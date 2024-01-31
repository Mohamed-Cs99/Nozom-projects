import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _ApisService: ApisService, private _Router: Router) { };
  loginForm = new FormGroup(
    {
      userName: new FormControl(null, [Validators.required]),
      passWord: new FormControl(null, [Validators.required])
    }
  )

  submitLoginForm(logF: FormGroup) {

    // console.log(logF.value);
    this._ApisService.Login(logF.value).subscribe((response) => {

      if (response.message == '') {
        localStorage.setItem('userToken', response.token);
        this._ApisService.saveCurrentUser();
        // if userName and password correct 
        // elmfrod yro7 el home component 
        // this._Router.navigate(['/home'])
      }
      else {

      }

    })


  }


}
