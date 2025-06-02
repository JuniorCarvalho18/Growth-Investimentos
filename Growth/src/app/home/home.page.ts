import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false, 
})
export class HomePage implements OnInit {
  isModalOpen = false; // Controla o estado do modal
  userName: string = ''; // Variável para armazenar o nome do usuário

  constructor(private rota: Router, private http: HttpClient) {}

  ngOnInit() {
    // Inicializações necessárias
    this.loadUserName(); // Carrega o nome do usuário ao iniciar a página
  }

  openAddProjectModal() {
    this.isModalOpen = true; // Abre o modal
  }

  closeModal() {
    this.isModalOpen = false; // Fecha o modal
  }

  loadUserName() {
    const userId = 'id_do_usuario_logado'; // Substitua pelo ID do usuário logado
    const apiUrl = `https://sua-api.com/usuarios/${userId}`; // URL da API para buscar os dados do usuário

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.userName = data.name; // Define o nome do usuário
      },
      (error) => {
        console.error('Erro ao carregar nome do usuário:', error);
        this.userName = 'Usuário'; // Define um valor padrão em caso de erro
      }
    );
  }
}
