<?php
include_once("App.php");

class Compra
{
    public static function insertarCompra()
    {
        try {
            if (!empty($_POST)) {
                $dbh = Conexion::getConexionPDO();
                $total = 0;
                $subTotal = 0;
                $insertCompra = "INSERT INTO compras (`total`, `subtotal`, `estado`) VALUES (:TOTAL, :SUBTOTAL, '1');";
                $stmtCompra = $dbh->prepare($insertCompra);
                $stmtCompra->bindParam(':TOTAL', $total);
                $stmtCompra->bindParam(':SUBTOTAL', $subTotal);
                $stmtCompra->execute();
                $compraId = $dbh->lastInsertId();

                foreach ($_POST as $result) {
                    $idArti = $result['id'];
                    $stmt = $dbh->prepare("SELECT * FROM articulos WHERE id = :id");
                    $stmt->bindParam(':id', $idArti);
                    $stmt->execute();
                    $articulo = $stmt->fetchObject();
                    if ($articulo) {
                        $articuloId = $articulo->id;
                        $articuloPrecio = ($articulo->precio);
                        $subTotal = $subTotal + $articuloPrecio;

                        $insertArticulo = "INSERT INTO comprasarticulos (`compra`, `articulo`) VALUES (:COMPRA, :ARTICULO);";
                        $stmtArticulo = $dbh->prepare($insertArticulo);
                        $stmtArticulo->bindParam(':COMPRA', $compraId);
                        $stmtArticulo->bindParam(':ARTICULO', $articuloId);
                        $stmtArticulo->execute();
                    }
                }
                $total = $subTotal + (13 / 100) * $subTotal;
                $updateCompra = "UPDATE compras SET `total` = :TOTAL, `subtotal` = :SUBTOTAL WHERE (`id` = :IDCOMPRA);";
                $stmtCompra = $dbh->prepare($updateCompra);
                $stmtCompra->bindParam(':TOTAL', $total);
                $stmtCompra->bindParam(':SUBTOTAL', $subTotal);
                $stmtCompra->bindParam(':IDCOMPRA', $compraId);
                $stmtCompra->execute();
                return App::success('Se ha insertado la COMPRA con el id ' . $compraId . '.');
            } else {
                return App::error("Se necesita almenos un articulo para crear una compra");
            }

        } catch (PDOException $e) {
            return App::error($e->getMessage());
        }
    }

    public static function obtenerCompras($id = null)
    {
        $dbh = Conexion::getConexionPDO();
        try {
            if ($id == null) {
                $stmt = $dbh->prepare("SELECT * FROM compras");
                $stmt->execute();
                $data = Array();
                while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $data[] = $result;
                }
                return Compra::appendArticulos($data, true);
            } else {
                return Compra::obtenerCompraById($id);
            }
        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }

    private static function obtenerCompraById($id = null)
    {
        $dbh = Conexion::getConexionPDO();
        try {
            if ($id != null) {
                $stmt = $dbh->prepare("SELECT * FROM compras WHERE id = :id");
                $stmt->bindParam(':id', $id);
                $stmt->execute();
                $articulo = $stmt->fetchObject();
                return Compra::appendArticulos($articulo, false);
            }

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }

    private static function obtenerCompraArticulosById($id = null)
    {
        $dbh = Conexion::getConexionPDO();
        try {
            if ($id != null) {
                $stmt = $dbh->prepare("SELECT * FROM comprasarticulos WHERE compra = :id");
                $stmt->bindParam(':id', $id);
                $stmt->execute();
                $data = Array();
                while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $data[] = $result;
                }
                return $data;
            }

        } catch (Exception $e) {
            echo App::error($e->getMessage());
        }
    }

    private static function appendArticulos($data = null, $bandera = false)
    {
        $data = (array)$data;
        $tam = count($data);
        if($bandera) {
            for ($row = 0; $row < $tam; $row++) {
                $idCompra = $data[$row]['id'];
                $arrayArticulos = Compra::obtenerCompraArticulosById($idCompra);
                $data[$row]["articulos"] = $arrayArticulos;
            }
        } else {
            $idCompra = $data['id'];
            $arrayArticulos = Compra::obtenerCompraArticulosById($idCompra);
            $data["articulos"] = $arrayArticulos;
        }
        echo json_encode($data);
    }
}
