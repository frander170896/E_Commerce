<?php
include_once("../Modelo/Entidades/Articulo.php");
class ArticulosHandler
{
    function get($id = null)
    {
        $dbh = Conexion::getConexionPDO();
        try {
            if ($id != null) {
                return Articulo::obtenerArticulos($id);
            } else {
                return Articulo::obtenerArticulos();
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