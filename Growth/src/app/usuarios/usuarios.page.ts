import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: false,
})
export class UsuariosPage implements OnInit {

  usuarios: any[] = [];
  usuario = { id: null, nome: '', email: '', senha: '', cnpj: '' };
  apiUrl = 'http://localhost/seu_projeto/crud1.php';

  constructor(
    private rota:Router,
    private http: HttpClient,
    private toast: ToastController,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.listarUsuarios();
  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({ message: msg, duration: 2000 });
    toast.present();
  }

  listarUsuarios() {
    this.http.post<any>(this.apiUrl, { requisicao: 'listar' }).subscribe(res => {
      if (res.success) {
        this.usuarios = res.usuarios;
      }
    });
  }

  salvarUsuario() {
    const requisicao = this.usuario.id ? 'editar' : 'salvar';
    const payload = {
      requisicao,
      id: this.usuario.id,
      nome: this.usuario.nome,
      email: this.usuario.email,
      senha: this.usuario.senha,
      cnpj: this.usuario.cnpj,
    };

    this.http.post(this.apiUrl, payload).subscribe(() => {
      this.presentToast(requisicao === 'salvar' ? 'Usuário salvo!' : 'Usuário editado!');
      this.usuario = { id: null, nome: '', email: '', senha: '', cnpj: '' };
      this.listarUsuarios();
    });
  }

  editar(u: any) {
    this.usuario = { ...u, senha: '' }; // senha vazia por segurança
  }

  async deletar(id: number) {
    const alert = await this.alert.create({
      header: 'Confirmar',
      message: 'Deseja excluir este usuário?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          handler: () => {
            this.http.post(this.apiUrl, { requisicao: 'deletar', id }).subscribe(() => {
              this.presentToast('Usuário excluído!');
              this.listarUsuarios();
            });
          },
        },
      ],
    });
    await alert.present();
  }
}
