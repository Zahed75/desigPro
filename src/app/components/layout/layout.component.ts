import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    NgClass

  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  isSidebarOpen = false;

  constructor() {
  }

  ngOnInit() {

  }



  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
