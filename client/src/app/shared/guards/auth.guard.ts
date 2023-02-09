import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedin$.pipe(
      first(),
      tap((isLoggedin: boolean) => {
        if (!isLoggedin) {
          this.router.navigateByUrl('/connexion');
        }
      })
    );
  }
}
