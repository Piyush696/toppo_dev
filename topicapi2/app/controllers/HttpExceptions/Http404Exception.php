<?php

namespace App\Controllers\HttpExceptions;
use App\Controllers\AbstractHttpException;

/**
 * CLASS HTTP404EXCEPTION
 *
 * EXECPTION CLASS FOR NOT FOUND ERROR (404)
 *
 * @PACKAGE APP\LIB\EXCEPTIONS
 */
class Http404Exception extends AbstractHttpException
{
    protected $httpCode = 404;
    protected $httpMessage = 'Not Found';
}
