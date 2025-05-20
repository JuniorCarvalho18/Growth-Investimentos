import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: false,
})
export class UsuariosPage implements OnInit {
usuario: string = "";
cnpj: string = "";
email: string = "";
senha: string = "";



  carregar(){
  }


  constructor(private rota:Router, private actRouter: ActivatedRoute, public toastController: ToastController, /*private provider: Post */) 
  { }

  ngOnInit() {
    /* this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.cnpj = data.cnpj;
      this.email = data.email;
      this.senha = data.senha;
    })*/
  } 

    async mensagemsalvar(){
      const toast = await this.toastController.create({
        message: 'Usuário salvo com sucesso',
        duration: 2000,
        color: 'success',
        position: 'top',
      });
      toast.present();

    }
}
