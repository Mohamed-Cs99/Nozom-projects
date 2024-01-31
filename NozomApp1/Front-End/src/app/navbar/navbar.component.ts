import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin: boolean = false;
  constructor(private _ApisService: ApisService) {

    if (this._ApisService.currentUser.getValue() != null) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }

  };

}
