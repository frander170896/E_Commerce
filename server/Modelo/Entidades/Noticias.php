<?php
include_once("App.php");
class Noticias {
    public static function obtenerNoticiaID($noticia = null)
    {
        try {
            $dbh = Conexion::getConexionPDO();
            if ($noticia) {
                $select = "SELECT * FROM NOTICIAS WHERE NOTICIA_ID=" . $noticia;
                $stmt = $dbh->prepare($select);
                $stmt->execute();
                $noticia = $stmt->fetchObject();
                if($noticia){
                    echo json_encode($noticia);
                }else{
                    echo App::error("No se encontró la noticia...");
                }
                
            }else{
                echo App::error("Failed: Missing user or password...");
            }
        } catch (Exception $e) {
            echo App::error($e->getMessage()); 
        }
    }
    public static function obtenerNoticias($id = null) {
        $dbh = Conexion::getConexionPDO(); 
        try {
            if ($id == null) {
                $stmt = $dbh->prepare("SELECT * FROM NOTICIAS"); 
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
    public static function insertarNoticia($data)
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
            $file_db = Conexion::getConexionPDO();
            //insert into usuarios (`usuario`,`contra`,`nombrecompleto`,`gender`,`email`)
            //values('gerson','1234','Gerson Vargas',1,'gerson@gmail.com');
            $insert2 = "INSERT INTO NOTICIAS (`DESCRIPCION`,`FECHA`,`TOPIC`)
                VALUES (:DESCRIPCION, :FECHA, :TOPIC)";
            $stmt2 = $file_db->prepare($insert2);
            $stmt2->bindParam(':FECHA',$fecha );
            $stmt2->bindParam(':DESCRIPCION', $descripcion);
            $stmt2->bindParam(':TOPIC', $topic);
            $stmt2->execute();
            return App::success('Noticia insertada correctamente.');
        } catch (PDOException $e) {
            return App::error($e->getMessage());
        }
    }
}
