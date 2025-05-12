import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Marketplace', url: '/marketplace', icon: 'bag' },
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
  ];

  constructor(private router: Router) {
    this.ShowSplash();
  }

  async ShowSplash() {
    await SplashScreen.show({
      autoHide: true,
      showDuration: 4000,
    });
  }

  navigateToSaldo(event: Event) {
    event.stopPropagation(); 
    this.router.navigate(['/saldo']);
  }
  
  navigateToHistorico(event: Event) {
    event.stopPropagation(); 
    this.router.navigate(['/historico']);
  }
}