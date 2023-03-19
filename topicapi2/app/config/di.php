<?php
use Phalcon\Db\Adapter\Pdo\Mysql as PdoMysql;
use Phalcon\Logger\Adapter\File as FileAdapter;
use Phalcon\Logger\Formatter\Line as LineFormatter;

// INITIALIZING A DI CONTAINER
$di = new \Phalcon\DI\FactoryDefault();

// OVERRIDING RESPONSE-OBJECT TO SET THE CONTENT-TYPE HEADER GLOBALLY
$di->setShared ( 'response', function () 
{
	$response = new \Phalcon\Http\Response();
	$response->setContentType('application/json', 'utf-8');
	return $response;
});

// COMMON CONFIG SETTINGS ARE LOADED 
$di->setShared ('config', $config);

// DATABASE INITIALIZED 
$di->set ( "db", function () use ($config) 
{
	return new PdoMysql (
	[
		"host"     => $config->database->host,
		"username" => $config->database->username,
		"password" => $config->database->password,
		"dbname"   => $config->database->dbname,
	]);
});

// WE ARE CONFIGURING LOGGER AS A SHARED SERVICE THAT CAN BE USED IN ALL CONTROLLERS.
$di->setShared("logger", function () use ($config, $di)
{
	$router = $di->get('router');
	$controller = $router->getControllerName();
	$action = $router->getActionName();
	$logger = new FileAdapter($config->application->logPath);
	$formatter = new LineFormatter("[%date%][Controller: ".$controller."->Action: ".$action."][%type%]{%message%}");
	$logger->setFormatter($formatter);
	return $logger;
});

// TBD: WE WILL HAVE TO SET THE CACHE SERVICE FOR THE DATA MODELS TO CACHE THE DATABASE TRANSACTIONS AND QUERIES. 
// MORE INFORMATION AND EXAMPLE IS FROM HERE. https://docs.phalcon.io/3.4/en/db-models-cache

// ALL SERVICES TO PERFORM OPERATIONS ON MOEDLS WILL GO HERE 
$di->setShared ('usersService', '\App\Services\UsersService');
$di->setShared ('globalService', '\App\Services\GlobalService');
$di->setShared ('AuthService', '\App\Services\AuthService');
$di->setShared ('TopicService', '\App\Services\TopicService');

// RETURN THE INSTANCE OF THE DI.
return $di;