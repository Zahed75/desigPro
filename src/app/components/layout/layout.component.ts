import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-layout',
  imports: [
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initFlowbite();
  }


  ngAfterViewInit() {
    const profileButton = document.getElementById('profile-dropdown-button');
    const profileDropdown = document.getElementById('profile-dropdown');

    if (profileButton && profileDropdown) {
      profileButton.addEventListener('click', () => {
        profileDropdown.classList.toggle('hidden');
      });
    }
  }

}
