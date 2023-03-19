<?php

namespace App\Services;

use App\Models\User;
use App\Models\Role;
use App\Models\UserRoleTopic;
use App\Models\DInternallink;
use App\Models\Internallink;

use \Phalcon\Mvc\Model\Query\Builder;

class AuthService extends AbstractService
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


    // CREATE USERPROJECT AS MANY-MANY
    public function getUsersRole()
    {
        try {
            $user = (new Builder())
                ->addFrom("App\Models\User", "user")
                ->join("App\Models\UserRoleTopic", 'user.user_id = UserRoleTopic.user_id', 'UserRoleTopic', "LEFT")
                ->join("App\Models\Role", 'Role.role_id = UserRoleTopic.role_id', 'Role', "LEFT")

                ->join("App\Models\DInternallink", 'Role.role_id = DInternallink.role_id', 'DInternallink', "LEFT")
                ->join("App\Models\Internallink", 'Internallink.internallink_id = DInternallink.internallink_id', 'Internallink', "LEFT")
               
                ->columns(
                    [
                        'user_id' => 'user.user_id',
                        'utc' => 'user.utc',
                        'username' => 'user.username',
                        'handle' => 'user.handle',
                        'trustlevel' => 'user.trustlevel',
                        'role_id' => 'Role.role_id',
                        'name'    => 'Role.name',
                        'description' => 'Role.description',
                        'internallink_id' => 'Internallink.internallink_id',
                        'name' => 'Internallink.name',
                        'description' => 'Internallink.description',
                        'isActive' => 'Internallink.isActive'
                    ]
                )
                ->getQuery()
                ->execute();
            return $user->toArray();
        } catch (\PDOException $e) {
            throw new ServiceException($e->getMessage(), $e->getCode(), $e);
        }
    }

    //  GET SINGLE USER USING USER_ID
    public function getSingleUser($user_id)
    {
        try {
            $user = (new Builder())
                ->addFrom("App\Models\User", "user")
                ->join("App\Models\UserRoleTopic", 'user.user_id = UserRoleTopic.user_id', 'UserRoleTopic', "LEFT")
                ->join("App\Models\Role", 'Role.role_id = UserRoleTopic.role_id', 'Role', "LEFT")

                ->join("App\Models\DInternallink", 'Role.role_id = DInternallink.role_id', 'DInternallink', "LEFT")
                ->join("App\Models\Internallink", 'Internallink.internallink_id = DInternallink.internallink_id', 'Internallink', "LEFT")
                ->where("user.user_id = '$user_id'")
                ->columns(
                    [
                        'user_id' => 'user.user_id',
                        'utc' => 'user.utc',
                        'username' => 'user.username',
                        'handle' => 'user.handle',
                        'trustlevel' => 'user.trustlevel',
                        'role_id' => 'Role.role_id',
                        'name'    => 'Role.name',
                        'description' => 'Role.description',
                        'internallink_id' => 'Internallink.internallink_id',
                        'name' => 'Internallink.name',
                        'description' => 'Internallink.description',
                        'isActive' => 'Internallink.isActive'
                    ]
                )
                ->getQuery()
                ->execute();
            return $user->toArray();
        } catch (\PDOException $e) {
            throw new ServiceException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
