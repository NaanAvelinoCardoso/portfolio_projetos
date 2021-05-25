<?php 
require_once "config.php";
require 'dao/UsuarioDaoDB.php';

$usuarioDao = new UsuarioDaoDB($pdo);

$id = filter_input(INPUT_GET, 'id');
if ($id) {
    $usuarioDao->delete($id);
}

header("Location: index.php");
exit;