<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include_once('connection.php');

// Decodifica o JSON recebido no corpo da requisição
$postjson = json_decode(file_get_contents('php://input'), true);

// Verifica se o JSON foi recebido corretamente
if (!$postjson) {
    echo json_encode(['success' => false, 'message' => 'Nenhum dado recebido']);
    exit;
}

// Verifica se a requisição é para salvar
if ($postjson['requisicao'] == 'salvar') {
            // Criptografa a senha
        $senha_crip = md5($postjson['senha']);

        // Prepara a query para inserir os dados
        $query = $pdo->prepare("INSERT INTO usuarios (senha, nome, email, cnpj) 
                                VALUES (:senha, :nome, :email, :cnpj)");
        $query->bindValue(':senha', $senha_crip);
        $query->bindValue(':nome', $postjson['nome']);
        $query->bindValue(':email', $postjson['email']);
        $query->bindValue(':cnpj', $postjson['cnpj']);
        $query->execute();

        // Obtém o último ID inserido
    $id = $pdo->lastInsertId();

    // Verifica se a query foi executada com sucesso
    if ($query->rowCount() > 0) {
        $result = array('success' => true, 'id' => $id);
    } else {
        $result = array('success' => false);
    }

    // Retorna o resultado como JSON
    echo json_encode($result);
    }

// Verifica se a requisição é para login
if ($postjson['requisicao'] == 'login') {
    $senha_crip = md5($postjson['senha']); // Criptografa a senha

    // Verifica se o valor é um e-mail ou um CNPJ
    if (filter_var($postjson['emailCnpj'], FILTER_VALIDATE_EMAIL)) {
        // É um e-mail
        $query = $pdo->prepare("SELECT * FROM usuario WHERE email = :emailCnpj AND senha = :senha");
    } else {
        // É um CNPJ
        $query = $pdo->prepare("SELECT * FROM usuario WHERE cnpj = :emailCnpj AND senha = :senha");
    }

    $query->bindValue(':emailCnpj', $postjson['emailCnpj']);
    $query->bindValue(':senha', $senha_crip);
    $query->execute();

    // Verifica se encontrou um usuário
    if ($query->rowCount() > 0) {
        $result = array('success' => true);
    } else {
        $result = array('success' => false);
    }

    echo json_encode($result);
}
?>