<?php
include_once("App.php");

class Compra
{

    public static function insertarCompra()
    {
        try {
            $dbh = Conexion::getConexionPDO();
            $total = 0;
            $subTotal = 0;
            $insertCompra = "INSERT INTO compras (`total`, `subtotal`, `estado`) VALUES (:TOTAL, :SUBTOTAL, '1');";
            $stmtCompra = $dbh->prepare($insertCompra);
            $stmtCompra->bindParam(':TOTAL', $total);
            $stmtCompra->bindParam(':SUBTOTAL', $subTotal);
            $stmtCompra->execute();
            $compraId = $dbh->lastInsertId();

            if (!empty($_POST)) {
                //
                foreach ($_POST as $result) {
                    $idArti = $result['id'];
                    $stmt = $dbh->prepare("SELECT * FROM articulos WHERE id = :id");
                    $stmt->bindParam(':id', $idArti);
                    $stmt->execute();
                    $articulo = $stmt->fetchObject();
                    if ($articulo) {
                        $articuloId = $articulo -> id;
                        $articuloPrecio = ($articulo -> precio);
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
                return App::success('Se ha insertado la COMPRA con el id '. $compraId .'.');
            }

        } catch (PDOException $e) {
            return App::error($e->getMessage());
        }
    }
}
