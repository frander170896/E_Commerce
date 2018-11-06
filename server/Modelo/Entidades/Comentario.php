<?php
include_once("App.php");
class Comentario {
    public static function obtenerComentariosId($noticia)
    {
        try {
            $dbh = Conexion::getConexionPDO();
            if ($noticia) {
                $select = "SELECT * FROM COMENTARIOS WHERE NOTICIA_ID=" . $noticia;
                $stmt = $dbh->prepare($select);
                $stmt->execute();
                $data = Array(); 
                while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $data[] = $result; 
                }
                echo json_encode($data);
                
            }else{
                echo App::error("Failed: Missing user or password...");
            }
        } catch (Exception $e) {
            echo App::error($e->getMessage()); 
        }
    }
    public static function obtenerComentarios($id = null) {
        $dbh = Conexion::getConexionPDO(); 
        try {
            if ($id == null) {
                $stmt = $dbh->prepare("SELECT * FROM COMENTARIOS"); 
            $stmt->execute(); 
            $data = Array(); 
            while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $data[] = $result; 
            }
            echo json_encode($data); 
        }
        }catch (Exception $e) {
            echo App::error($e->getMessage()); 
        }
    }
    public static function insertarComentario($data)
    {
        //Ejemplo de consumo URL
        
        /* POST ->

        {"metodo":"insertarNoticia",
        "DESCRIPCION":"gvargas",
        "TOPIC":1
        } 
       

         */
        try {
            $descripcion = $data['DESCRIPCION']; // 1= cliente, 2= interesado
            $topic = $data['TOPIC'];
            $fecha=date('Y-m-d H:i:s');
            $USUARIO_ID=$data['USUARIO_ID'];
            $NOTICIA_ID=$data['NOTICIA_ID'];
            $file_db = Conexion::getConexionPDO();
            //insert into usuarios (`usuario`,`contra`,`nombrecompleto`,`gender`,`email`)
            //values('gerson','1234','Gerson Vargas',1,'gerson@gmail.com');
            $insert2 = "INSERT INTO COMENTARIOS (`DESCRIPCION`,`FECHA`,`USUARIO_ID`,`NOTICIA_ID`,`TOPIC`)
                VALUES (:DESCRIPCION, :FECHA,:USUARIO_ID,:NOTICIA_ID, :TOPIC)";
            $stmt2 = $file_db->prepare($insert2);
            $stmt2->bindParam(':FECHA',$fecha );
            $stmt2->bindParam(':DESCRIPCION', $descripcion);
            $stmt2->bindParam(':USUARIO_ID', $USUARIO_ID);
            $stmt2->bindParam(':NOTICIA_ID', $NOTICIA_ID);
            $stmt2->bindParam(':TOPIC', $topic);
            $stmt2->execute();
            return App::success('Comentario insertado correctamente.');
        } catch (PDOException $e) {
            return App::error($e->getMessage());
        }
    }
}
