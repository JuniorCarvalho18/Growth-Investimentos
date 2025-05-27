import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  login = {
    emailCnpj: '',
    senha: '',
  };

  constructor(private rota:Router, private http: HttpClient) {}

  ngOnInit() {
   
  }
  criarConta(){
    this.rota.navigate(['/cadastro']);
  }

   // Método para realizar o login
   logar() {
    // Verifica se os campos estão preenchidos
    if (!this.login.emailCnpj.trim() || !this.login.senha.trim()) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Envia os dados para o backend
    this.http.post('http://localhost/apiPortal/crud1.php', {
      requisicao: 'login',
      emailCnpj: this.login.emailCnpj,
      senha: this.login.senha,
    }).subscribe((response: any) => {
      if (response.success) {
        alert('Login realizado com sucesso!');
        this.rota.navigate(['/home']); // Redireciona para a página inicial
      } else {
        alert('E-mail/CNPJ ou senha inválidos!');
      }
    });
  }


}
