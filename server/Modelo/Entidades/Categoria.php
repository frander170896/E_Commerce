<?php
include_once("App.php");
class Categoria
{
   public static function obtenerProductosCategorias()
    {
        $dbh = Conexion::getConexionPDO();
        try {
            if ($id != null) {
                $stmt = $dbh->prepare("SELECT ARTICULOS.*,CATEGORIA.CATEGORY_NAME FROM ARTICULOS
                LEFT OUTER JOIN CATEGORIA
                ON ARTICULOS.ID=CATEGORIA.ARTICULO_ID");
            $stmt->execute();
            $data = Array();
            while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $data[] = $result;
            }
            echo json_encode($data);
        }
        } catch (Exception $e) {
            echo App::error($e->getMessage()); 
        }
    }
}
