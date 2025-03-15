import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css'
})
export class OtpVerificationComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {

  }
}
