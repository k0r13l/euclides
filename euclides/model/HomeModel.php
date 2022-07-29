<?php

require_once 'lib/SPDO.php';
require_once 'lib/Config.php';

class HomeModel {

    public function __construct() {
        $this->db = SPDO::getInstance();
    }

    /**
     * Las funciones que inician con get llaman a un
     * procedimiento almacenado y devuelven la información
     */

    public function getRegistros() {
        $query = $this->db->prepare('call getRegistrosEuclides()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getRegistrosEje2() {
        $query = $this->db->prepare('call getRegistrosEj2()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    /**
     * Llama a un procedimiento almacenado para insertar datos
     * en la bd
     */
    public function insertarEje2($data) {
        $query = "call insertar_registro_e2(?,?,?,?,?,?,?,?)";
        $this->db->prepare($query)->execute([$data[0],$data[1],$data[2],$data[3],$data[4],$data[5],$data[6],$data[7]]);
        return "Insertado correcto";
    }

    public function getDataProfesor() {
        $query = $this->db->prepare('call getDataProfesores()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getDataRedes() {
        $query = $this->db->prepare('call getDataRedes()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }
}
