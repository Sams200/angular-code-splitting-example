import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Role} from './role';
import {AuthService} from './auth.service';
import {from, of, switchMap} from 'rxjs';

export const hasRoleGuard: CanActivateFn = (route,state) => {
  const router: Router = inject(Router);
  const expectedRoles: Role[] = route.data['roles'];

  return inject(AuthService)
    .getUserRole()
    .pipe(
      switchMap((userRole: Role) => {
        const hasRole = expectedRoles.some(role => userRole === role);
        if (hasRole)
          return of(true);
        else{
          return from(router.navigate(['unauthorized']))
        }
      })
    );
}
