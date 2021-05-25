<?php
require_once "config.php";
require 'dao/UsuarioDaoDB.php';

$usuarioDao = new UsuarioDaoDB($pdo);

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($nome && $email) {

    if ($usuarioDao->findByEmail($email) === false) {
        $novoUsuario = new Usuario();
        $novoUsuario->setNome($nome);
        $novoUsuario->setEmail($email);

        $usuarioDao->add($novoUsuario);

        header("Location: index.php");
        exit;
    } else {
        header("Location: adicionar_cliente.php");
        exit;
    }

} else {
    header("Location: adicionar_cliente.php");
    exit;
}
