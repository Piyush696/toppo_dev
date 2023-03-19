<?php
namespace App\Services;
use App\Models\Users;

/**
 * BUSINESS-LOGIC FOR USERS
 *
 * Class UsersService
 */
class UsersService extends AbstractService
{
	/** UNABLE TO CREATE USER */
	const ERROR_UNABLE_CREATE_USER = 11001;

	/** USER NOT FOUND */
	const ERROR_USER_NOT_FOUND = 11002;

	/** NO SUCH USER */
	const ERROR_INCORRECT_USER = 11003;

	/** UNABLE TO UPDATE USER */
	const ERROR_UNABLE_UPDATE_USER = 11004;

	/** UNABLE TO DELETE USER */
	const ERROR_UNABLE_DELETE_USER = 1105;

	/**
	 * CREATING A NEW USER
	 *
	 * @param array $userData
	 */
	public function createUser(array $userData)
	{
		try 
		{
			$user   = new Users();
			$result = $user->setLogin($userData['login'])
			               ->setPass(password_hash($userData['password'], PASSWORD_DEFAULT))
			               ->setFirstName($userData['first_name'])
			               ->setLastName($userData['last_name'])
			               ->create();

			if (!$result) 
			{
				throw new ServiceException('Unable to create user', self::ERROR_UNABLE_CREATE_USER);
			}

		} 
		catch (\PDOException $e) 
		{
			if ($e->getCode() == 23505) 
			{
				throw new ServiceException('User already exists', self::ERROR_ALREADY_EXISTS, $e);
			} 
			else 
			{
				throw new ServiceException($e->getMessage(), $e->getCode(), $e);
			}
		}
	}

	/**
	 * UPDATING AN EXISTING USER
	 *
	 * @param array $userData
	 */
	public function updateUser(array $userData)
	{
		try 
		{
			$user = Users::findFirst ( 
				[
					'conditions' => 'id = :id:',
					'bind'       => 
					[
						'id' => $userData['id']
					]
				]);

			$userData['login']      = (is_null($userData['login'])) ? $user->getLogin() : $userData['login'];
			$userData['password']   = (is_null($userData['password'])) ? $user->getPass() : password_hash($userData['password'], PASSWORD_DEFAULT);
			$userData['first_name'] = (is_null($userData['first_name'])) ? $user->getFirstName() : $userData['first_name'];
			$userData['last_name']  = (is_null($userData['last_name'])) ? $user->getLastName() : $userData['last_name'];

			$result = $user->setLogin($userData['login'])
			               ->setPass($userData['password'])
			               ->setFirstName($userData['first_name'])
			               ->setLastName($userData['last_name'])
			               ->update();

			if (!$result) 
			{
				throw new ServiceException('Unable to update user', self::ERROR_UNABLE_UPDATE_USER);
			}

		} 
		catch (\PDOException $e) 
		{
			throw new ServiceException($e->getMessage(), $e->getCode(), $e);
		}
	}

	/**
	 * DELETE AN EXISTING USER
	 *
	 * @param int $userId
	 */
	public function deleteUser($userId)
	{
		try 
		{
			$user = Users::findFirst (
				[
					'conditions' => 'id = :id:',
					'bind'       => 
					[
						'id' => $userId
					]
				]);

			if (!$user) 
			{
				throw new ServiceException("User not found", self::ERROR_USER_NOT_FOUND);
			}

			$result = $user->delete();

			if (!$result) 
			{
				throw new ServiceException('Unable to delete user', self::ERROR_UNABLE_DELETE_USER);
			}

		} 
		catch (\PDOException $e) 
		{
			throw new ServiceException($e->getMessage(), $e->getCode(), $e);
		}
	}

	/**
	 * RETURNS USER LIST
	 *
	 * @return array
	 */
	public function getUserList()
	{
		try 
		{
			$users = Users::find (
				[
					'conditions' => '',
					'bind'       => [],
					'columns'    => "id, first_name, last_name, login",
				]
			);

			if (!$users) 
			{
				return [];
			}

			return $users->toArray();
		} 
		catch (\PDOException $e) 
		{
			throw new ServiceException($e->getMessage(), $e->getCode(), $e);
		}
	}
}
