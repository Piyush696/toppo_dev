<?php
// LOADS PROJECT CLASSES AUTOMATICALLY, BASED ON SOME PREDEFINED RULES 
$loader = new \Phalcon\Loader();

// WE ARE CONFIGURING THE NAMESPACE OF THE APP. ALL DIRECTORIES ARE NOW MAPPED TO THESE NAMES.
$loader->registerNamespaces (
[
	'App\Services'    => realpath(__DIR__ . '/../services/'),
	'App\Controllers' => realpath(__DIR__ . '/../controllers/'),
	'App\Models'      => realpath(__DIR__ . '/../models/'),
]);

$loader->register();
