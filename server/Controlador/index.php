<?php
require("Toro.php");
include_once("../Modelo/Conexion/Conexion.php");
include_once("../Modelo/Entidades/Categoria.php");
include_once("Handler/ArticulosHandler.php");
include_once("Handler/UsuariosHandler.php");


Toro::serve(array(
    "/implDeport/" => "ArticulosHandler",
    "/implDeport/:alpha" => "ArticulosHandler",
    "/usuario/" => "UsuariosHandler",
    "/usuario/:alpha" => "UsuariosHandler",
    "/categoria/:alpha" => "CategoriasHandler",
    "/categoria/" => "CategoriasHandler",
));

?>