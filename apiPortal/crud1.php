<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include_once('connection.php');

// Cria o administrador padrão
try {
    // Verifica se o administrador já existe
    $query = $pdo->prepare("SELECT * FROM admin WHERE maskid = :maskid");
    $query->bindValue(':maskid', 1); // Verifica pelo identificador padrão
    $query->execute();

    if ($query->rowCount() == 0) {
        // Insere o administrador padrão
        $query = $pdo->prepare("INSERT INTO admin (maskid, senha) VALUES (:maskid, :senha)");
        $query->bindValue(':maskid', 1); // Define o identificador padrão como 1
        $query->bindValue(':senha', '0000'); // Insere a senha sem criptografia
        $query->execute();

        echo json_encode(['success' => true, 'message' => 'Administrador padrão criado com sucesso!']);
    } else {
        echo json_encode(['success' => true, 'message' => 'Administrador padrão já existe!']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Erro ao criar administrador: ' . $e->getMessage()]);
}

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
    try {
        $senha_crip = md5($postjson['senha']); // Criptografa a senha

        // Prepara a query para verificar o login
        $query = $pdo->prepare("SELECT * FROM usuarios WHERE (email = :emailCnpj OR cnpj = :emailCnpj) AND senha = :senha");
        $query->bindValue(':emailCnpj', $postjson['emailCnpj']);
        $query->bindValue(':senha', $senha_crip);
        $query->execute();

        if ($query->rowCount() > 0) {
            echo json_encode(['success' => true, 'message' => 'Login realizado com sucesso!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'E-mail/CNPJ ou senha inválidos!']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro no servidor: ' . $e->getMessage()]);
    }
}
?>