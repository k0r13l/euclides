<?php

require 'lib/Config.php';

$config = Config::getInstance();

$config->set('controllerFolder', 'controller/');
$config->set('modelFolder', 'model/');
$config->set('viewFolder', 'view/');
/*
API
$config->set('apiURL', 'http://localhost/ApiTienda/index.php');
*/

//BD

$config->set('dbhost', '163.178.107.10'); // ip
$config->set('dbname', 'EXPERTOS_EUCLIDES');
$config->set('dbuser', 'laboratorios');
$config->set('dbpass', 'KmZpo.2796');

