import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterLink


  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

  }


}
