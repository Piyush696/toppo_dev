<?php

namespace App\Controllers\HttpExceptions;
use App\Controllers\AbstractHttpException;

/**
 * CLASS HTTP422EXCEPTION
 *
 * EXECPTION CLASS FOR UNPROCESSABLE ENTITY ERROR (422)
 *
 * @PACKAGE APP\LIB\EXCEPTIONS
 */
class Http422Exception extends AbstractHttpException
{
    protected $httpCode = 422;
    protected $httpMessage = 'Unprocessable entity';
}
