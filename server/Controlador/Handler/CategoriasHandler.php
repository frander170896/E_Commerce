<?php
include_once("../Modelo/Entidades/Categoria.php");

class CategoriasHandler
{
    function get($metodo = null)
    {
        try {
            if ($metodo=="productoscategorias") {
                return Categoria::obtenerProductosCategorias();
            } else if ($metodo=="categorias") {
               return Categoria::obtenerCategorias();
            }
            
        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }
}