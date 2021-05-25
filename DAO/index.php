<?php
require_once "config.php";
require 'dao/UsuarioDaoDB.php';

$usuarioDao = new UsuarioDaoDB($pdo);
$lista = $usuarioDao->findAll();
?>

<a href="adicionar_cliente.php" style="text-decoration: none; padding: 20px; color: #000; border: 1px solid #000; border-radius: 50px; box-shadow: 0px 2px 30px #555;">Adicionar Cliente</a>

<table border="1" width="100%" style="margin-top: 50px;">
    <thead>
        <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>AÇÔES</th>
        </tr>
    </thead>
    <tbody>
    <?php foreach($lista as $usuario): ?>
        <tr>
            <td><?php echo $usuario->getId(); ?></td>
            <td><?php echo $usuario->getNome(); ?></td>
            <td><?php echo $usuario->getEmail(); ?></td>
            <td>
                <a href="editar.php?id=<?php echo $usuario->getId(); ?>">Editar</a>
                <a href="excluir.php?id=<?php echo $usuario->getId(); ?>">Excluir</a>
            </td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>

