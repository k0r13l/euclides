<?php

require_once 'lib/Config.php';

class SPDO extends PDO {

    private static $instance;

    public function __construct() {
        $config = Config::getInstance();
        parent::__construct('mysql:host=' . $config->get('dbhost') . ';dbname=' . $config->get('dbname').';charset=utf8',
                $config->get('dbuser'), $config->get('dbpass'));
    }

     public static function getInstance() {
        if (!isset(self::$instance)) {
            $temp = __CLASS__;
            self::$instance = new $temp;
        }
        return self::$instance;
    }
}
