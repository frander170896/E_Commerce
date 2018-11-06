<?php
require("Toro.php");
include_once("../Modelo/Conexion/Conexion.php");
include_once("../Modelo/Entidades/Categoria.php");
include_once("Handler/ArticulosHandler.php");
include_once("Handler/UsuariosHandler.php");
include_once("Handler/CategoriasHandler.php");
include_once("Handler/ComprasHandler.php");
include_once("Handler/NoticiasHandler.php");
include_once("Handler/ComentarioHandler.php");

Toro::serve(array(
    "/implDeport/" => "ArticulosHandler",
    "/implDeport/:alpha" => "ArticulosHandler",
    "/usuario/" => "UsuariosHandler",
    "/usuario/:alpha" => "UsuariosHandler",
    "/categoria/:alpha" => "CategoriasHandler",
    "/categoria/" => "CategoriasHandler",
    "/compra/" => "ComprasHandler",
    "/compra/:alpha" => "ComprasHandler",
    "/noticia/" => "NoticiasHandler",
    "/noticia/:alpha" => "NoticiasHandler",
    "/comentario/" => "ComentarioHandler",
    "/comentario/:alpha" => "ComentarioHandler"
));

?>