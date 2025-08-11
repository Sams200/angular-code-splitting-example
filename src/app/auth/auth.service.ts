import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Role} from './role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(){}

  public getUserRole(): Observable<Role>{
    /*
    fake API call
     */
    return of(Role.USER).pipe(delay(1000));
  }
}
