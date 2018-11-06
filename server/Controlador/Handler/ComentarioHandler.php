<?php
include_once("../Modelo/Entidades/Comentario.php");
class ComentarioHandler
{
    function get($id = null)
    {
        try {
            if ($id != null) {
                $split = explode("-", $id);
                $username = $split[0];
                $pass = (string)$split[1];
                return Comentario::obtenerComentariosId($id);
            }else{
                return Comentario::obtenerComentarios();
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
            } else if ($_POST['metodo'] == 'insertarComentario') {
                //echo App::msj("hola");
               return Comentario::insertarComentario($_POST);
            } 

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}
