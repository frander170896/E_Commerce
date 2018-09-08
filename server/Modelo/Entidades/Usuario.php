<?php
include_once("App.php");
class Usuario {
    public static function obtenerUsuario($email = null, $password = null)
    {
        try {
            $dbh = Conexion::getConexionPDO();
            if ($email && $password) {
                $select = "SELECT * FROM usuarios WHERE usuario = '" . $email . "' and contra = '" . $password . "';";
                $stmt = $dbh->prepare($select);
                $stmt->execute();
                $usuario = $stmt->fetchObject();
                if($usuario){
                    echo json_encode($usuario);
                }else{
                    echo App::error("User or password incorrect...");
                }
                
            }else{
                echo App::error("Failed: Missing user or password...");
            }
        } catch (Exception $e) {
            echo App::error($e->getMessage()); 
        }
    }
   
}
