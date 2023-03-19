<?php

// SET APPLICATION LEVEL CONFIGURATIONS HERE.
return new \Phalcon\Config 
(
    [
        'database' => 
       // [
           // 'adapter' => 'Mysql',
          //  'host' => '67.225.190.155',
          //  'username' => 'topicopo_gk',
          //  'password' => 'gaurav2019',
           // 'dbname' => 'topicopo_example',
        ]//,
        [
            'adapter' => 'Mysql',
             'host' => 'localhost',
             'username' => 'root',
            'password' => '',
             'dbname' => 'topicopo_example',
         ],

        'application' => 
        [
	        'controllersDir' => "app/controllers/",
	        'modelsDir'      => "app/models/",
            'baseUri'        => "/api",
            'logPath'        => "app/logs/app.log",
        ],
    ]
);
