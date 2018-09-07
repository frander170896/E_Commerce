<?php

class DBConnection {

    var $conexion;

    
    static function dtConnection() {
        
    }

    public static function getConexion() {
        return $this->conexion;
    }

    public static function conect() {
        $con = mysqli_connect("localhost", "root", "1234", "E_COMMERCE");

        if ($con->connect_errno) {
            echo "Falló la conexión a MySQL: (" . $con->connect_errno . ") " . $con->connect_error;
        }
        $this->conexion = $con;
        return $this->conexion;
    }

    public static function crearConexionPDO() {
        $conexion1;
        try {
            $conexion1= new PDO('mysql:host=localhost;dbname=E_COMMERCE', 'root', '1234');
            $conexion1->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            return $e->getMessage();
        }
        return $conexion1;
    }

}
