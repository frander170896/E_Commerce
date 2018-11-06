<?php
include_once("../Modelo/Entidades/Noticias.php");
class NoticiasHandler
{
    function get($id = null)
    {
        try {
            if ($id != null) {
                $split = explode("-", $id);
                $username = $split[0];
                $pass = (string)$split[1];
                return Noticias::obtenerNoticiaID($id);
            }else{
                return Noticias::obtenerNoticias();
            }
        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
    function post($id = null)
    {
        //echo App::success("hola");
        try {
            $_POST = json_decode(file_get_contents('php://input'), True);
            if ($_POST['metodo'] == 'login') {
               // return Login::obtenerusuario('gerson@gmail.com', 'admin123');
            } else if ($_POST['metodo'] == 'insertarNoticia') {
                //echo App::msj("hola");
               return Noticias::insertarNoticia($_POST);
            } 

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}
