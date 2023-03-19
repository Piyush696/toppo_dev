<?php
use App\Controllers\AbstractHttpException;

// STARTING POINT FOR THE REST APPLICATION
try 
{
	// LOADING CONFIGS
	$config = require(__DIR__ . '/app/config/config.php');

	// AUTOLOADING CLASSES
	require __DIR__ . '/app/config/loader.php';

	// INITIALIZING DI CONTAINER
	/** @var \Phalcon\DI\FactoryDefault $di */
	$di = require __DIR__ . '/app/config/di.php';

	// INITIALIZING APPLICATION
	$app = new \Phalcon\Mvc\Micro();

	// SETTING DI CONTAINER
	$app->setDI($di);

	// SETTING UP ROUTING
	require __DIR__ . '/app/config/routes.php';

	// AFTER THE HANDLER HAS BEEN EXECUTED
	$app->after (
		function () use ($app) 
		{
			// GETTING THE RETURN VALUE OF METHOD
			$return = $app->getReturnedValue();

			if (is_array($return)) 
			{
				// TRANSFORMING ARRAYS TO JSON
				$app->response->setContent(json_encode($return));
			} 
			elseif (!strlen($return)) 
			{
				// SUCCESSFUL RESPONSE WITHOUT ANY CONTENT
				$app->response->setStatusCode('204', 'No Content');
			} 
			else 
			{
				// UNEXPECTED RESPONSE
				throw new Exception('Bad Response');
			}

			// SENDING RESPONSE TO THE CLIENT
			$app->response->send();
		}
	);

	// PROCESSING REQUEST
	$app->handle();

} 
catch (AbstractHttpException $e) 
{
	$response = $app->response;
	$response->setStatusCode($e->getCode(), $e->getMessage());
	$response->setJsonContent($e->getAppError());
	$response->send();
} 
catch (\Phalcon\Http\Request\Exception $e) 
{
	$app->response->setStatusCode(400, 'Bad request')
	              ->setJsonContent(
					[
		              AbstractHttpException::KEY_CODE    => 400,
		              AbstractHttpException::KEY_MESSAGE => 'Bad request'
	             	])
	              ->send();
} 
catch (\Exception $e) 
{
	// STANDARD ERROR FORMAT
	$result = 
	[
		AbstractHttpException::KEY_CODE    => 500,
		AbstractHttpException::KEY_MESSAGE => 'Some error occurred on the server.'. $e->getMessage().'\n'
	];

	// SENDING ERROR RESPONSE
	$app->response->setStatusCode(500, 'Internal Server Error')
	              ->setJsonContent($result)
	              ->send();
}
