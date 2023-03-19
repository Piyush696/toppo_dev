<?php
// WE DEFINED THESE NAMESPACES IN LOADER. WE ARE NOW WORKING WITH USERCONTROLLER
namespace App\Controllers;

// ALL THE BELOW PHALCON LIBRARY CLASSES WILL BE USED.
// ALSO DEFINE THE SERVICES THAT WILL WORK WITH THIS CONTROLLER
use App\Controllers\HttpExceptions\Http400Exception;
use App\Controllers\HttpExceptions\Http422Exception;
use App\Controllers\HttpExceptions\Http500Exception;
use App\Services\TopicService;

class TopicController extends AbstractController
{
  // GET USER-ROLE DATA 
  public function getTopicTabAction()
  {
    try {
      $this->logger->log('this is a message');
      $userData = $this->TopicService->getTopicsTab();
    } catch (ServiceException $e) {
      throw new Http422Exception($e->getMessage(), $e->getCode());
    }
    return $userData;
  }
}
