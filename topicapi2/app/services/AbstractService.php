<?php

namespace App\Services;

/**
 * CLASS ABSTRACTSERVICE
 *
 * @property \Phalcon\Db\Adapter\Pdo\Postgresql $db
 * @property \Phalcon\Config                    $config
 */
abstract class AbstractService extends \Phalcon\DI\Injectable
{
    /**
     * INVALID PARAMETERS ANYWHERE
     */
    const ERROR_INVALID_PARAMETERS = 10001;

    /**
     * RECORD ALREADY EXISTS
     */
    const ERROR_ALREADY_EXISTS = 10002;
}
