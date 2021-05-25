<?php 
require_once "config.php";
require 'dao/UsuarioDaoDB.php';

$usuarioDao = new UsuarioDaoDB($pdo);

$usuario = false;
$id = filter_input(INPUT_GET, 'id');
if ($id) {
    $usuario = $usuarioDao->findById($id);
}

if ($usuario === false) {
    header('Location: index.php');
    exit;
}
?>

<h1>Editar Cliente</h1>
<form method="POST" action="editar_action.php">
    <input type="hidden" name="id" value="<?php echo $usuario->getId(); ?>">

    <label>
        Nome: <br>
        <input type="text" name="nome" value="<?php echo $usuario->getNome(); ?>">
    </label><br><br>

    <label>
        Email: <br>
        <input type="email" name="email" value="<?php echo $usuario->getEmail(); ?>">
    </label><br><br>

    <input type="submit" value="Cadastrar Cliente">
</form>