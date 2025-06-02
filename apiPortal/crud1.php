<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include_once('connection.php');

$postjson = json_decode(file_get_contents('php://input'), true);

if (!$postjson) {
    echo json_encode(['success' => false, 'message' => 'Nenhum dado recebido']);
    exit;
}

// ✅ CRIAR (Salvar)
if ($postjson['requisicao'] == 'salvar') {
    $senha_crip = md5($postjson['senha']);
    $query = $pdo->prepare("INSERT INTO usuarios (senha, nome, email, cnpj) 
                            VALUES (:senha, :nome, :email, :cnpj)");
    $query->bindValue(':senha', $senha_crip);
    $query->bindValue(':nome', $postjson['nome']);
    $query->bindValue(':email', $postjson['email']);
    $query->bindValue(':cnpj', $postjson['cnpj']);
    $query->execute();

    $id = $pdo->lastInsertId();
    echo json_encode(['success' => $query->rowCount() > 0, 'id' => $id]);
}

// ✅ LOGIN
else if ($postjson['requisicao'] == 'login') {
    $senha_crip = md5($postjson['senha']);
    $query = $pdo->prepare("SELECT * FROM usuarios WHERE (email = :emailCnpj OR cnpj = :emailCnpj) AND senha = :senha");
    $query->bindValue(':emailCnpj', $postjson['emailCnpj']);
    $query->bindValue(':senha', $senha_crip);
    $query->execute();

    echo json_encode([
        'success' => $query->rowCount() > 0,
        'message' => $query->rowCount() > 0 ? 'Login realizado com sucesso!' : 'E-mail/CNPJ ou senha inválidos!'
    ]);
}

// ✅ LISTAR
else if ($postjson['requisicao'] == 'listar') {
    $query = $pdo->prepare("SELECT * FROM usuarios ORDER BY id DESC");
    $query->execute();
    $dados = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['success' => true, 'usuarios' => $dados]);
}

// ✅ EDITAR
else if ($postjson['requisicao'] == 'editar') {
    $query = $pdo->prepare("UPDATE usuarios SET nome = :nome, email = :email, cnpj = :cnpj WHERE id = :id");
    $query->bindValue(':nome', $postjson['nome']);
    $query->bindValue(':email', $postjson['email']);
    $query->bindValue(':cnpj', $postjson['cnpj']);
    $query->bindValue(':id', $postjson['id']);
    $query->execute();

    echo json_encode(['success' => $query->rowCount() > 0]);
}

// ✅ DELETAR
else if ($postjson['requisicao'] == 'deletar') {
    $query = $pdo->prepare("DELETE FROM usuarios WHERE id = :id");
    $query->bindValue(':id', $postjson['id']);
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
