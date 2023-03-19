<?php
namespace App\Controllers\HttpExceptions;
use App\Controllers\AbstractHttpException;

/**
 * CLASS HTTP500EXCEPTION
 *
 * EXECPTION CLASS FOR INTERNAL SERVER ERROR (500)
 *
 * @PACKAGE APP\LIB\EXCEPTIONS
 */
class Http500Exception extends AbstractHttpException
{
    protected $httpCode = 500;
    protected $httpMessage = 'Internal Server Error';
}
