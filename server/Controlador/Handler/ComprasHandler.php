<?php
include_once("../Modelo/Entidades/Compra.php");

class ComprasHandler
{
    function get($id = null)
    {
        try {
            if ($id != null) {
                return Compra::obtenerCompras($id);
            } else {
                return Compra::obtenerCompras();
            }
        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }

    function post()
    {
        try {
            $_POST = json_decode(file_get_contents('php://input'), True);
            return Compra::insertarCompra($_POST);

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}
