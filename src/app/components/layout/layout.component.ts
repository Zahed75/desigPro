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

  isOpenProfile=false;

  constructor() {
  }

  ngOnInit() {

  }

  isCollapsed = false;

  isActive(route: string): boolean {
    return route === '/overview'; // Simulate "Overview" as active
  }

  toggleDemoMode(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    console.log('Demo Mode:', checkbox.checked);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
