<?php
namespace App\Controllers;

/**
 * CLASS ABSTRACTCONTROLLER
 *
 * @property \Phalcon\Http\Request              $request
 * @property \Phalcon\Http\Response             $htmlResponse
 * @property \Phalcon\Db\Adapter\Pdo\Postgresql $db
 * @property \Phalcon\Config                    $config
 * @property \App\Services\UsersService         $usersService
 * @property \App\Models\Users                  $user
 */
abstract class AbstractController extends \Phalcon\DI\Injectable
{
    /**
     * ROUTE NOT FOUND. HTTP 404 ERROR
     */
    const ERROR_NOT_FOUND = 1;

    /**
     * INVALID REQUEST. HTTP 400 ERROR.
     */
    const ERROR_INVALID_REQUEST = 2;
}
