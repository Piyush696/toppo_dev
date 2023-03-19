<?php
// WE DEFINED THESE NAMESPACES IN LOADER. WE ARE NOW WORKING WITH USERCONTROLLER
namespace App\Controllers;

// ALL THE BELOW PHALCON LIBRARY CLASSES WILL BE USED.
// ALSO DEFINE THE SERVICES THAT WILL WORK WITH THIS CONTROLLER
use App\Controllers\HttpExceptions\Http400Exception;
use App\Controllers\HttpExceptions\Http422Exception;
use App\Controllers\HttpExceptions\Http500Exception;
use App\Services\AbstractService;
use App\Services\ServiceException;
use App\Services\UsersService;

/**
 * Operations with Users: CRUD
 */
class UsersController extends AbstractController
{
    // THIS FUNCTION ADDS A NEW USER TO THE USER TABLE
    // THE CODE BELOW IS A SAMPLE OF HOW TO USE THE CONTROLLER WITH SERVICE AND MODEL
    public function addAction()
    {
	    /** INIT BLOCK **/
        $errors = [];
        $data = [];
	    /** END INIT BLOCK **/

	    /** VALIDATION BLOCK **/
        $data = $this->request->getJsonRawBody(true);
        if (!is_string($data['login']) || !preg_match('/^[A-z0-9_-]{3,16}$/', $data['login'])) 
        {
            $errors['login'] = 'Login must consist of 3-16 latin symbols, numbers or \'-\' and \'_\' symbols';
        }
        if (!is_string($data['password']) || !preg_match('/^[A-z0-9_-]{6,18}$/', $data['password'])) 
        {
            $errors['password'] = 'Password must consist of 6-18 latin symbols, numbers or \'-\' and \'_\' symbols';
        }
        if ((!empty($data['first_name'])) && (!is_string($data['first_name']))) 
        {
            $errors['first_name'] = 'String expected';
        }
        if ((!empty($data['last_name'])) && (!is_string($data['last_name']))) 
        {
            $errors['last_name'] = 'String expected';
        }

        // IF ERRORS FOUND IN VALIDATION, THROW EXCEPTION
        if ($errors) 
        {
            $exception = new Http400Exception(_('Input parameters validation error'), self::ERROR_INVALID_REQUEST);
            throw $exception->addErrorDetails($errors);
        }
	    /** END VALIDATION BLOCK **/

	    // PASSING TO BUSINESS LOGIC AND PREPARING THE RESPONSE. CREATE THE USER IF VALIDATION PASSED
        try 
        {
            $this->usersService->createUser($data);
        } 
        catch (ServiceException $e) 
        {
            switch ($e->getCode()) 
            {
                case AbstractService::ERROR_ALREADY_EXISTS:
                case UsersService::ERROR_UNABLE_CREATE_USER:
                    throw new Http422Exception($e->getMessage(), $e->getCode(), $e);
                default:
                    throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
            }
        }
	    /** END PASSING TO BUSINESS LOGIC AND PREPARING THE RESPONSE  **/
    }

    /**
     * RETURNS USER LIST
     *
     * @return array
     */
    public function getUserListAction()
    {
        try 
        {
            $this->logger->log('this is a message');
            $userList = $this->usersService->getUserList();
        } 
        catch (ServiceException $e) 
        {
            throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
        }

        return $userList;
    }

     /**
     * UPDATING EXISTING USER
     *
     * @param string $userId
     */
    public function updateUserAction($userId)
    {
        $errors = [];
        $data   = [];

        $data = $this->request->getJsonRawBody(true);
        if ((!is_null($data['login'])) && (!is_string($data['login']) || !preg_match (
                    '/^[A-z0-9_-]{3,16}$/',
              $data['login']
            ))
        ) 
        {
            $errors['login'] = 'Login must consist of 3-16 latin symbols, numbers or \'-\' and \'_\' symbols';
        }
        if ((!is_null($data['password'])) && (!is_string($data['password']) || !preg_match (
                    '/^[A-z0-9_-]{6,18}$/',
              $data['password']
            ))
        ) 
        {
            $errors['password'] = 'Password must consist of 6-18 latin symbols, numbers or \'-\' and \'_\' symbols';
        }
        if ((!is_null($data['old_password'])) && (!is_string($data['old_password']))) 
        {
            $errors['old_password'] = 'Old password must be a string';
        }
        if ((!is_null($data['first_name'])) && (!is_string($data['first_name']))) 
        {
            $errors['first_name'] = 'String expected';
        }
        if ((!is_null($data['last_name'])) && (!is_string($data['last_name']))) 
        {
            $errors['last_name'] = 'String expected';
        }

        if (!ctype_digit($userId) || ($userId < 0)) 
        {
            $errors['id'] = 'Id must be a positive integer';
        }

        $data['id'] = (int)$userId;

        if ($errors) 
        {
            $exception = new Http400Exception(_('Input parameters validation error'), self::ERROR_INVALID_REQUEST);
            throw $exception->addErrorDetails($errors);
        }

        try 
        {
            $this->usersService->updateUser($data);
        } 
        catch (ServiceException $e) 
        {
            switch ($e->getCode()) 
            {
                case UsersService::ERROR_UNABLE_UPDATE_USER:
                case UsersService::ERROR_USER_NOT_FOUND:
                    throw new Http422Exception($e->getMessage(), $e->getCode(), $e);
                default:
                    throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
            }
        }
    }

    /**
     * DELETE AN EXISTING USER
     *
     * @param string $userId
     */
    public function deleteUserAction($userId)
    {
        if (!ctype_digit($userId) || ($userId < 0)) 
        {
            $errors['userId'] = 'Id must be a positive integer';
        }

        try 
        {
            $this->usersService->deleteUser((int)$userId);
        } 
        catch (ServiceException $e) 
        {
            switch ($e->getCode()) 
            {
                case UsersService::ERROR_UNABLE_DELETE_USER:
                case UsersService::ERROR_USER_NOT_FOUND:
                    throw new Http422Exception($e->getMessage(), $e->getCode(), $e);
                default:
                    throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
            }
        }
    }
}
