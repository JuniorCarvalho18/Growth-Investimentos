import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user = {
    name: '',
    cnpj: '',
    email: '',
    password: '',
  };

  constructor(private rota: Router, private http: HttpClient) {} // Adicionado HttpClient

  ngOnInit() {
    this.loadUserProfile(); // Carrega as informações do usuário ao iniciar a página
  }

  loadUserProfile() {
    const userId = 'id_do_usuario_logado'; // Substitua pelo ID do usuário logado
    const apiUrl = `https://sua-api.com/usuarios/${userId}`; // URL da API para buscar os dados do usuário

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.user = {
          name: data.name,
          cnpj: data.cnpj,
          email: data.email,
          password: data.senha,
        };
      },
      (error) => {
        console.error('Erro ao carregar perfil:', error);
        alert('Não foi possível carregar as informações do perfil.');
      }
    );
  }

  saveProfile() {
    const userId = 'id_do_usuario_logado'; // Substitua pelo ID do usuário logado
    const apiUrl = `https://sua-api.com/usuarios/${userId}`; // URL da API para salvar os dados do usuário

    this.http.put(apiUrl, this.user).subscribe(
      () => {
        alert('Informações salvas com sucesso!');
      },
      (error) => {
        console.error('Erro ao salvar perfil:', error);
        alert('Não foi possível salvar as informações do perfil.');
      }
    );
  }
}
