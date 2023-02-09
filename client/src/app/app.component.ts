import { AuthService } from './shared/service/auth.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { User } from './shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedin$: Observable<boolean> =
    this.authService.isLoggedin$.asObservable();

  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/connexion');
    });
  }
}
