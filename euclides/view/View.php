<?php

class View {

    private $config;

    public function __construct() {
        $this->config = Config::getInstance();
    }

    public function show($viewName, $var = array()) {
        $path = $this->config->get('viewFolder') . $viewName;

        if (!is_file($path)) {
            trigger_error('Pagina ' . $path . ' No existe', E_USER_NOTICE);
            return FALSE;
        }
        
        if (is_array($var)) {
            foreach ($var as $value => $value) {
                $key = $value;
            }
        }
        
        require $path;
    }

}
