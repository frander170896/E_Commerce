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
        try {
            $this->conexion = new PDO('mysql:host=localhost;dbname=db_farmacia', 'root', '');
        } catch (Exception $e) {
            return false;
        }
        return $this->conexion;
    }

}

?>
