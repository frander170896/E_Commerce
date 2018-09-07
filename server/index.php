<?php
require("Toro.php");
require("Conexion.php");

class ArticulosHandler
{


    function get($id = null)
    {
        $dbh = Conexion::getConexionPDO();
        try {
            if ($id != null) {
                $stmt = $dbh->prepare("SELECT * FROM articulos WHERE id = :id");
                $stmt->bindParam(':id', $id);
            } else {
                $stmt = $dbh->prepare("SELECT * FROM articulos");
            }
            $stmt->execute();
            $data = Array();
            while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $data[] = $result;
            }
            echo json_encode($data);
        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }
}

class UsuariosHandler
{

   
    public static function obtenerUsuario($email = null, $password = null) {
        try {
            $dbh = Conexion::getConexionPDO();
            if ($email && $password) {
                $select = "SELECT * FROM usuarios WHERE username = '" . $email . "' and contra = '" . $password . "';";
                $stmt = $dbh->prepare($select);
                $stmt->execute();
                $usuario = $stmt->fetchObject();
                echo json_encode($usuario);
            }
        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }
    function get($usuPass = null)
    {
        $dbh = Conexion::getConexionPDO();

        try {
            if ($usuPass != null) {
                $split = explode("-", $usuPass);
                $username = $split[0];
                $pass = (string)$split[1];
                return $this->obtenerUsuario($username,$pass);
            }
        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }
}

Toro::serve(array(
    "/implDeport/" => "ArticulosHandler",
    "/implDeport/:alpha" => "ArticulosHandler",
    "/usuario/" => "UsuariosHandler",
    "/usuario/:alpha" => "UsuariosHandler",
));

?>