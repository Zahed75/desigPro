import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [

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


  isActive(route: string): boolean {

    return false;
  }

  toggleDemoMode(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    console.log('Demo Mode:', checkbox.checked);

  }


}
