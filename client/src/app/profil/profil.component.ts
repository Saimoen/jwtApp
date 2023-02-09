import { User } from './../shared/interfaces/user.interface';
import { AuthService } from './../shared/service/auth.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  public user$: Observable<User | null> = this.authService.user$.asObservable();

  constructor(private authService: AuthService) {}
}
