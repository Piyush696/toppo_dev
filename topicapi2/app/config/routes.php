<?php

// FOR EVERY MODEL OR TABLE THAT WE WANT TO UPDATE, WE WILL CREATE SPECIFIC ROUTES AND SPECIFY THE CONTROLLER THAT IS CONTROLLING THE MODEL.
// THE BELOW CODE IS CONFIGURED FOR USER TABLE.
// WE HAVE SET API ROUTES TO LIST, ADD, UPDATE USER TABLE AND SET UP THE CONTROLLER FOR IT.
$usersCollection = new \Phalcon\Mvc\Micro\Collection();
$usersCollection->setHandler('\App\Controllers\UsersController', true);
$usersCollection->setPrefix('/user');
$usersCollection->post('/add', 'addAction');
$usersCollection->get('/list', 'getUserListAction');
$usersCollection->put('/{userId:[1-9][0-9]*}', 'updateUserAction');
$usersCollection->delete('/{userId:[1-9][0-9]*}', 'deleteUserAction');
$app->mount($usersCollection);

// WE HAVE SET API ROUTES TO LIST MESSAGE TABLE AND SET UP THE CONTROLLER FOR IT.
$globalCollection = new \Phalcon\Mvc\Micro\Collection();
$globalCollection->setHandler('\App\Controllers\GlobalController', true);
$globalCollection->setPrefix('/global');
$globalCollection->get('/messages', 'getMessageListAction');
$globalCollection->get('/forbidden', 'getForbiddenListAction');
$globalCollection->get('/sitevariable', 'getSiteVariableListAction');
$app->mount($globalCollection);

// NOT FOUND URLS
$app->notFound (function () use ($app) 
{
      $exception =
		new \App\Controllers\HttpExceptions\Http404Exception 
		(
          _('URI not found or error in request.'),
          \App\Controllers\AbstractController::ERROR_NOT_FOUND,
          new \Exception('URI not found: ' . $app->request->getMethod() . ' ' . $app->request->getURI())
        );
      throw $exception;
});

//USER-ROLE MANY-MANY MAPPING
$userRoleCollection = new Phalcon\Mvc\Micro\Collection();
$userRoleCollection->setHandler('\App\Controllers\AuthController', true);
$userRoleCollection->setPrefix('/userRole');
$userRoleCollection->get('/list', 'getUserRoleListAction');
$userRoleCollection->get('/dept', 'getUserDepartmentListAction');
$userRoleCollection->get('/project', 'getUserProjectListAction');
$userRoleCollection->get('/data/{userId:[1-9][0-9]*}', 'getSingleUserListAction');
$userRoleCollection->put('/{userId:[1-9][0-9]*}', 'updateUserAction');
$userRoleCollection->delete('/{userId:[1-9][0-9]*}', 'deleteUserAction');
$app->mount($userRoleCollection);

// NOT FOUND URLS
$app->notFound (function () use ($app) 
{
      $exception =
		new \App\Controllers\HttpExceptions\Http404Exception 
		(
          _('URI not found or error in request.'),
          \App\Controllers\AbstractController::ERROR_NOT_FOUND,
          new \Exception('URI not found: ' . $app->request->getMethod() . ' ' . $app->request->getURI())
        );
      throw $exception;
});


//TOPIC-TAB MANY-MANY MAPPING
$TopicTabCollection = new Phalcon\Mvc\Micro\Collection();
$TopicTabCollection->setHandler('\App\Controllers\TopicController', true);
$TopicTabCollection->setPrefix('/TopicTab');
$TopicTabCollection->get('/list', 'getTopicTabAction');
$TopicTabCollection->get('/dept', 'getUserDepartmentListAction');
$TopicTabCollection->get('/project', 'getUserProjectListAction');
$TopicTabCollection->get('/data/{userId:[1-9][0-9]*}', 'getSingleUserListAction');
$TopicTabCollection->put('/{userId:[1-9][0-9]*}', 'updateUserAction');
$TopicTabCollection->delete('/{userId:[1-9][0-9]*}', 'deleteUserAction');
$app->mount($TopicTabCollection);

// NOT FOUND URLS
$app->notFound (function () use ($app) 
{
      $exception =
		new \App\Controllers\HttpExceptions\Http404Exception 
		(
          _('URI not found or error in request.'),
          \App\Controllers\AbstractController::ERROR_NOT_FOUND,
          new \Exception('URI not found: ' . $app->request->getMethod() . ' ' . $app->request->getURI())
        );
      throw $exception;
});

