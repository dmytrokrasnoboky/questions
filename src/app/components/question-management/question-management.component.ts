import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.css'],
  animations:[
    trigger('menuAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class QuestionManagementComponent implements OnInit {
  @ViewChild('sidenav') sidenav?: MatSidenav;
  isMenuOpen: 'inactive' | 'active' = 'inactive';
  isMobile = false;

  @HostListener('window:resize', [`$event`])
  onResize() {
    if (this.isMobile !== window.innerWidth < 768) {
      this.isMobile = window.innerWidth < 768;

      if (this.isMobile === this.sidenav?.opened) {
        this.sidenav?.toggle();
      }
    }
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
    this.isMenuOpen = this.isMobile ? 'active' : 'inactive';
  }

  toggleMenu() {
    if (this.isMobile) {
      this.isMenuOpen = this.isMenuOpen === 'active' ? 'inactive' : 'active';
      this.sidenav?.toggle();
    }
  }
}
