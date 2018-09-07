<?php
require("Toro.php");

class ArticulosHandler
{

    var $conexion;

    private function init()
    {
        try {
            $this->conexion = new PDO('mysql:host=localhost;dbname=implementosdeportivos', 'root', 'root');
        } catch (Exception $e) {
            return false;
        }
        return $this->conexion;
    }

    function get($id = null)
    {
        $dbh = $this->init();
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

    var $conexion;

    private function init()
    {
        try {
            $this->conexion = new PDO('mysql:host=localhost;dbname=implementosdeportivos', 'root', 'root');
        } catch (Exception $e) {
            return false;
        }
        return $this->conexion;
    }

    function get($usuPass = null)
    {
        $dbh = $this->init();

        try {
            if ($usuPass != null) {
                $split = explode("-", $usuPass);
                $username = $split[0];
                $pass = (string)$split[1];
                if ($username != null && $pass != null) {
                    $stmt = $dbh->prepare("SELECT * FROM usuarios WHERE usuario = :username");
                    $stmt->bindParam(':username', $username);
                    $stmt->execute();
                    $data = Array();
                    $passDB = "";
                    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                        $data[] = $result;
                        $passDB = (string)$result["contra"];
                    }
                    if ($pass === $passDB) {
                        echo "true";
                    } else {
                        echo "false";
                    }
                }
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