<?php

//header("Location:?controller=Login&action=show");
require_once 'view/View.php';
require_once 'model/HomeModel.php';

class HomeController {

    public function __construct() {
        $this->view = new View();
        $this->model = new HomeModel();
    }

    /** 
     * Las funciones que inician con show
     * muestran las vistas de la página web
     */
    public function show() {
        $this->view->show("HomeView.php", null);
    }

    public function showEstiloAprendizaje() {
        $this->view->show("EstiloAView.php", null);
    }

    public function showRecinto() {
        $this->view->show("RecintoView.php", null);
    }

    public function showS() {
        $this->view->show("SexoView.php", null);
    }

    public function showEstiloAprendizaje2() {
        $this->view->show("EstiloA2View.php", null);
    }

    public function showTipoProfesor() {
        $this->view->show("TipoProfesor.php", null);
    }

    public function showClassRedes() {
        $this->view->show("ClassRedes.php", null);
    }

    /** 
     * Obtiene los datos para el algoritmo de euclides
     * sobre tipos de aprendizaje
     */
    public function getData() {
        echo json_encode($this->model->getRegistros());
    }

    /**
     * Obtiene los datos para el segundo ejercicio
     */
    public function getDataEj2() {
        echo json_encode($this->model->getRegistrosEje2());
    }

    /**
     * Obtiene los datos sobre el profesor
     */
    public function getDataProfesor() {
        echo json_encode($this->model->getDataProfesor());
    }

    /**
     * Obtiene los datos sobre las redes
     */
    public function getDataRedes() {
        echo json_encode($this->model->getDataRedes());
    }

    /**
     * Inserta un dato en la bd, ya no es necesario
     */
    public function insertDataEj2() {
        echo $this->model->insertarEje2($_POST['data']);
    }
}
