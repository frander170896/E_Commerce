<?php

include "./Connection/DBConnection.php";

require("Toro.php");

class DBHandler
{

    function get($id = null)
    {
        $metodo = $_GET['metodo'];
        if ($metodo) {

            if($metodo == "dataCharts"){
                return Propiedad::getDataCharts();
            }else{
                if ($metodo == 'login') {
                    $email = $_GET['email'];
                    $password = $_GET['password'];
                    return Login::obtenerUsuario($email, $password);
                } else if ($metodo == 'getpropiedades') {
                    return Propiedad::obtenerPropiedades();
                } else if ($metodo == 'obtenerCantidadAplicadas') {
                    $numero_propiedad = $_GET['numero_propiedad'];
                    return Propiedad::obtenerCantidadAplicadas($numero_propiedad);
                } else if ($metodo == 'obtenerTodasAplicadas') {
                    return Propiedad::obtenerTodasAplicadas();
                } else if ($metodo == 'obtenerPropiedadesUsuario') {
                    $user = $_GET['email'];
                    return Propiedad::obtenerPropiedadesUsuario($user);
                }//obtenerMensajesPropiedad
                else if ($metodo == 'obtenerMensajesPropiedad') {
                    $propiedad = $_GET['propiedad'];
                    return Propiedad::obtenerMensajesPropiedad($propiedad);
                } else if ($metodo == 'obtenerInteresado') {
                    $usuario = $_GET['propiedad'];
                    return Login::obtenerInteresado($usuario);
                }
            }
        }
    }

    function put($_DATA)
    {
        try {
            $metodo = $_DATA['metodo2'];
            switch ($metodo) {
                case "insertarUsuario":
                    Usuario::insertarUsuario($_DATA);
                    break;
                case "insertarPostulacion":
                    return Propiedad::insertarPostulacion($_POST);
                    break;
                case "actualizarUsuario":
                    Usuario::actualizarUsuario($_DATA);
                    break;
                default:
                    break;
            }
        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }

    function delete($data)
    {
        try {
            $metodo = $data['metodo2'];
            if ($metodo == 'eliminarPropiedad') {
                $numero = $data['numero_propiedad'];
                Propiedad::eliminarPropiedad($numero);
            } else if ($metodo == 'eliminarUsuario') {
                $email = $data['email'];
                $tipo_usuario = $data['tipo_usuario'];
                Usuario::eliminarUsuario($email, $tipo_usuario);
            }
        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }

    function post($id = null)
    {
        try {
            $_POST = json_decode(file_get_contents('php://input'), True);
            if ($_POST['method'] == 'login') {
                return Login::obtenerusuario('gerson@gmail.com', 'admin123');
            } else if ($_POST['method'] == 'delete') {
                return $this->delete($_POST);
            } else if ($_POST['method'] == 'put' OR $_POST['method'] == 'post') {
                return $this->put($_POST);
            } else if ($_POST['method'] == 'insertarPropiedad') {
                return Propiedad::insertarPropiedad($_POST);
            } else if ($_POST['method'] == 'modificarPropiedad') {
                return Propiedad::modificarPropiedad($_POST);
            }

        } catch (Exception $e) {
            echo "Failed: " . $e->getMessage();
        }
    }
}

Toro::serve(array(
    "/login" => "DBHandler",
    "/propiedad/:alpha" => "DBHandler",
    "/propiedad/data" => "DBHandler",
    "/usuario/:alpha" => "DBHandler",
    "/country/:alpha/:alpha" => "DBHandler",
));

