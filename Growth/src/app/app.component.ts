import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Marketplace', url: '/folder/marketplace', icon: 'bag' },
    { title: 'Configurações', url: '/folder/configuracoes', icon: 'settings' },
  ];
  constructor() {
    this.ShowSplash();
  }

 async ShowSplash() {
      await SplashScreen.show({
        autoHide: true,
        showDuration: 10000,
      });

}
}
