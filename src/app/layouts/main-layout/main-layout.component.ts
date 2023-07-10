import { Component,Renderer2  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  constructor(private renderer: Renderer2) {
    
  }

  ngOnInit() {
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    if (isMobile) {
      const sidebarElement = document.getElementsByTagName('nav');
      this.renderer.addClass(sidebarElement, 'hide-sidebar');
    }
  }



}
