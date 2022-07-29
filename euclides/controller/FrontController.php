<?php

class FrontController {

    static function main() {
        require 'view/View.php';
        require 'lib/ServerConfiguration.php';

        if (!empty($_GET['controller'])) {
            $controllerName = $_GET['controller'] . 'Controller';
        } else {
            $controllerName = 'HomeController';
        }

        if (!empty($_GET['action'])) {
            $actionName = $_GET['action'];
        } else {
            $actionName = 'show';
        }
        
        $controllerPath = $config->get('controllerFolder') . $controllerName . '.php';

        if (is_file($controllerPath)) {
            require $controllerPath;
        } else {
            die('Controlador no encontrado - 404 Not found ('.$controllerPath.')');
        }

        if (!is_callable(array($controllerName, $actionName))) {
            trigger_error($controllerName . '->' . $actionName . ' no existe', E_USER_NOTICE);
            return false;
        }

        $controller = new $controllerName();
        $controller->$actionName();
    }

}
