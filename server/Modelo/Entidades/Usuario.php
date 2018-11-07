<?php
include_once("App.php");
class Usuario {
    public static function obtenerUsuario($email = null, $password = null)
    {
        try {
            $dbh = Conexion::getConexionPDO();
            if ($email && $password) {
                $select = "SELECT * FROM usuarios WHERE (usuario = '" . $email . "' OR email = '" . $email . "') and contra = '" . $password . "';";
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
    public static function insertarUsuario($data)
    {
        //Ejemplo de consumo URL
        
        /* POST ->

        {"metodo":"insertarUsuario",
        "metodo2":"insertarUsuario",
        "usuario":"gvargas",
        "nombrecompleto":"Gerson Vargas",
        "gender":1,
        "email":"gerson1@gmail.com",
        "contra":"123"}

         */
        try {
            $genero = $data['gender']; // 1= cliente, 2= interesado
            $nombre = $data['nombrecompleto'];
            $email = $data['email'];
            $user_name = $data['usuario'];
            $pass = $data['contra'];
            $file_db = Conexion::getConexionPDO();


            $select = "SELECT EMAIL FROM USUARIOS where email = '" . $email . "'";
            $stmt = $file_db->prepare($select);
            $stmt->execute();
            $usuario = $stmt->fetchObject();
            if($usuario){
                echo App::error("Este correo ya esta registrado. Intente con otro.");
            }
            $genre=0;
            if($genero == '1'){
                $genre=1;
            }else if($genero == '2'){
                $genre=2;
            }
            //insert into usuarios (`usuario`,`contra`,`nombrecompleto`,`gender`,`email`)
            //values('gerson','1234','Gerson Vargas',1,'gerson@gmail.com');
            $insert2 = "insert into usuarios (`usuario`,`contra`,`nombrecompleto`,`gender`,`email`)
                VALUES (:USERNAME, :PASSWORD, :NCOMPLETO, :GENDER, :EMAIL)";
            $stmt2 = $file_db->prepare($insert2);
            $stmt2->bindParam(':USERNAME', $user_name);
            $stmt2->bindParam(':NCOMPLETO', $nombre);
            $stmt2->bindParam(':EMAIL', $email);
            $stmt2->bindParam(':GENDER', $genre);
            $stmt2->bindParam(':PASSWORD', $pass);
            $stmt2->execute();
            return App::success('Se ha insertado el usuario.');
        } catch (PDOException $e) {
            return App::error($e->getMessage());
        }
    }
}
