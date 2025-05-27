import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {
  // Objeto para armazenar os dados do formulário
  cadastro = {
    nome: '',
    email: '',
    cnpj: '',
    senha: '',
    confirmarSenha: '',
  };

  constructor(private rota: Router, private http: HttpClient) {}

  ngOnInit() {}

  // Método para voltar à página anterior
  voltar() {
    this.rota.navigate(['/folder']);
  }

  // Método para realizar o cadastro
  cadastrar() {
    // Verifica se algum campo está vazio
    if (
      !this.cadastro.nome.trim() ||
      !this.cadastro.email.trim() ||
      !this.cadastro.cnpj.trim() ||
      !this.cadastro.senha.trim() ||
      !this.cadastro.confirmarSenha.trim()
    ) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Verifica se o CNPJ é válido
    const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjPattern.test(this.cadastro.cnpj)) {
      alert('Por favor, insira um CNPJ válido no formato 00.000.000/0000-00.');
      return;
    }

    // Verifica se as senhas coincidem
    if (this.cadastro.senha !== this.cadastro.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Envia os dados para o backend
    this.http.post('http://localhost/apiPortal/crud1.php', {
      requisicao: 'salvar',
      nome: this.cadastro.nome,
      email: this.cadastro.email,
      cnpj: this.cadastro.cnpj,
      senha: this.cadastro.senha,
    }).subscribe((response: any) => {
      if (response.success) {
        alert('Cadastro realizado com sucesso!');
        this.rota.navigate(['/home']); // Redireciona após o cadastro
      } else {
        alert('Erro ao realizar o cadastro. Tente novamente!');
      }
    });
  }
}