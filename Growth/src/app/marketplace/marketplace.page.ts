import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
  standalone: false,
})
export class MarketplacePage implements OnInit {
  isNotificationsModalOpen = false; // Controla o estado do modal de notificações
  isDragging = false; // Controla o estado de arraste
  startX = 0; // Posição inicial do cursor
  scrollLeft = 0; // Posição inicial do scroll

  constructor(private rota: Router, private renderer: Renderer2) {}

  ngOnInit() {
    const rewardOptions = document.querySelector('.reward-options') as HTMLElement;

    // Adiciona eventos para o comportamento de arraste
    this.renderer.listen(rewardOptions, 'mousedown', (e: MouseEvent) => {
      this.isDragging = true;
      rewardOptions.classList.add('active');
      this.startX = e.pageX - rewardOptions.offsetLeft;
      this.scrollLeft = rewardOptions.scrollLeft;
    });

    this.renderer.listen(rewardOptions, 'mouseleave', () => {
      this.isDragging = false;
      rewardOptions.classList.remove('active');
    });

    this.renderer.listen(rewardOptions, 'mouseup', () => {
      this.isDragging = false;
      rewardOptions.classList.remove('active');
    });

    this.renderer.listen(rewardOptions, 'mousemove', (e: MouseEvent) => {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - rewardOptions.offsetLeft;
      const walk = (x - this.startX) * 2; // Velocidade de rolagem
      rewardOptions.scrollLeft = this.scrollLeft - walk;
    });
  }

  openNotificationsModal() {
    this.isNotificationsModalOpen = true; // Abre o modal de notificações
  }

  closeNotificationsModal() {
    this.isNotificationsModalOpen = false; // Fecha o modal de notificações
  }
}
