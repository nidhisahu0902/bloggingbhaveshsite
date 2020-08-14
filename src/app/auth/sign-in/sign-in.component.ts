import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }
signIn(formData : NgForm)
{
  let cred = formData.value
  console.log(cred)
  this.authService.signIn(cred)
  
}
}
