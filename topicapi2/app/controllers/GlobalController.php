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
use App\Services\GlobalService;

class GlobalController extends AbstractController
{
    /**
     * RETURNS USER LIST
     *
     * @return array
     */
    public function getMessageListAction()
    {
        try 
        {
            $this->logger->log('this is a message');
            $messageList = $this->globalService->getMessageList();
        } 
        catch (ServiceException $e) 
        {
            throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
        }

        return $messageList;
        
    }

    public function getForbiddenListAction()
    {
        try 
        {
            $this->logger->log('this is a message');
            $forbiddenList = $this->globalService->getForbiddenList();
        } 
        catch (ServiceException $e) 
        {
            throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
        }

        return $forbiddenList;
        
    }

    public function getSiteVariableListAction()
    {
        try 
        {
            $this->logger->log('this is a message');
            $siteVariableList = $this->globalService->getSiteVariableList();
        } 
        catch (ServiceException $e) 
        {
            throw new Http500Exception(_('Internal Server Error'), $e->getCode(), $e);
        }

        return $siteVariableList;
        
    }
   
   
    
}
