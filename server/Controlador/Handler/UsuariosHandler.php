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
}
class CategoriasHandler
{
    function get($id = null)
    {
        try {
            if ($id != null) {
                $stmt = $dbh->prepare("SELECT * FROM articulos WHERE id = :id");
                $stmt->bindParam(':id', $id);
            } else {
               return Categoria::obtenerProductosCategorias();
            }
            
        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}