<?php

class Config {

    private $var;
    private static $instance;

    private function __construct() {
        $this->var = array();
    }

    public function set($attrName, $value) {
        if (!isset($this->var[$attrName])) {
            $this->var[$attrName] = $value;
        }
    }

    public function get($attrName) {
        if (isset($this->var[$attrName])) {
            return $this->var[$attrName];
        }
    }

    public static function getInstance() {
        if (!isset(self::$instance)) {
            $temp = __CLASS__;
            self::$instance = new $temp;
        }
        return self::$instance;
    }

}
