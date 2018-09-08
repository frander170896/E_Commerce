<?php


class App
{
    public static function success($output){
        echo (json_encode(array(
            "code" => 200,
            "msg" => $output
        )));
    }

    public static function error($output){
        echo (json_encode(array(
            "code" => 401,
            "msg" => $output
        )));
    }
}