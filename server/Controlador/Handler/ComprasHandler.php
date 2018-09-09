<?php
include_once("../Modelo/Entidades/Compra.php");

class ComprasHandler
{
    function get($usuPass = null)
    {
//        try {
//            if ($usuPass != null) {
//                $split = explode("-", $usuPass);
//                $username = $split[0];
//                $pass = (string)$split[1];
//                return Usuario::obtenerUsuario($username, $pass);
//            }
//        } catch (Exception $e) {
//            echo App::error($e->getMessage());
//        }
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
