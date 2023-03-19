<?php
// WE DEFINED THESE NAMESPACES IN LOADER. WE ARE NOW WORKING WITH USERCONTROLLER
namespace App\Controllers;

// ALL THE BELOW PHALCON LIBRARY CLASSES WILL BE USED.
// ALSO DEFINE THE SERVICES THAT WILL WORK WITH THIS CONTROLLER
use App\Controllers\HttpExceptions\Http400Exception;
use App\Controllers\HttpExceptions\Http422Exception;
use App\Controllers\HttpExceptions\Http500Exception;
use App\Services\AuthService;

class AuthController extends AbstractController
{
  // GET USER-ROLE DATA 
  public function getUserRoleListAction()
  {
    try {
      $this->logger->log('this is a message');
      $userData = $this->AuthService->getUsersRole();
    } catch (ServiceException $e) {
      throw new Http422Exception($e->getMessage(), $e->getCode());
    }
    return $userData;
  }

  // GET SINGLE-USER USING USERID
  public function getSingleUserListAction($userId)
  {
    try {
      $this->logger->log('this is a message');
      $userData = $this->AuthService->getSingleUser($userId);
    } catch (ServiceException $e) 
    {
      throw new Http500Exception(_('Internal Server Error'), $e->getCode());
    }

    return $userData;
  }
}
