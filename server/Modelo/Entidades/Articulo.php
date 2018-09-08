<?php
include_once("App.php");
class Articulo {
   public static function obtenerArticulos($id = null) {
        $dbh = Conexion::getConexionPDO(); 
        try {
            if ($id == null) {
                $stmt = $dbh->prepare("SELECT * FROM ARTICULOS"); 
            $stmt->execute(); 
            $data = Array(); 
            while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $data[] = $result; 
            }
            echo json_encode($data); 
        }else {
         echo Articulo::obtenerArticuloById($id); 
        }
        }catch (Exception $e) {
            echo App::error($e->getMessage()); 
        }
    }
    private static function obtenerArticuloById($id = null) {
        $dbh = Conexion::getConexionPDO(); 
        try {
            if ($id != null) {
                $stmt = $dbh-> prepare("SELECT * FROM articulos WHERE id = :id"); 
                $stmt->bindParam(':id', $id); 
                $stmt->execute(); 
                $articulo = $stmt->fetchObject(); 
                echo json_encode($articulo); 
            }
            
        }catch (Exception $e) {
            echo App::error($e->getMessage());  
        }
    }
}
