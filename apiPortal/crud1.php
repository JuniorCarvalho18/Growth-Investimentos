<?php
include_once('connection.php');
    $postjson=json_encode(file_put_contents('php://input'),true);

    $senha_crip=md5($postjson['senha']);

    if($postjson['requisicao']== 'salvar'){
        $query= $pdo->prepare("INSERT INTO usuario set 
        senha=:senha, nome=:nome, usuario=:usuario, email=:email, cnpj=:cnpj");
        $query->bindValue(':senha', $postjson['senha']);
        $query->bindValue(':nome', $postjson['nome']);
        $query->bindValue(':usuario', $postjson['usuario']);
        $query->bindValue(':email', $postjson['email']);
        $query->bindValue(':cnpj', $postjson['cnpj']);
        $id= $pdo->lastInsertId();
    
         if($query){
            $result=json_decode(array('sucess'=>true,'id'=> $id));
                }else{
                    $result=json_decode(array('sucess'=>false));
                }
            echo $result;
            
    }

?>