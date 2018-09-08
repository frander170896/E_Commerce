<?php
include_once("../Modelo/Entidades/Usuario.php");
class UsuariosHandler
{
    function get($usuPass = null)
    {
        try {
            if ($usuPass != null) {
                $split = explode("-", $usuPass);
                $username = $split[0];
                $pass = (string)$split[1];
                return Usuario::obtenerUsuario($username, $pass);
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
               // return Login::obtenerusuario('gerson@gmail.com', 'admin123');
            } else if ($_POST['metodo'] == 'insertarUsuario') {
                return Usuario::insertarUsuario($username, $pass);
            } 

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}
