<?php
include_once("../Modelo/Entidades/Usuario.php");
class UsuariosHandler
{
    function get($usuPass = null)
    {
        try {
            if ($usuPass != null) {
                $_POST = json_decode(file_get_contents('php://input'), True);
                return Usuario::obtenerUsuario($_POST['email'], $_POST['pass']);
            }
        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
    function post($id = null)
    {
        try {
            $_POST = json_decode(file_get_contents('php://input'), True);
            if ($_POST['metodo'] == 'login') {
              
                return Usuario::obtenerUsuario($_POST['email'], $_POST['pass']);
            } else if ($_POST['metodo'] == 'insertarUsuario') {
                return Usuario::insertarUsuario($_POST);
            } 

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}
