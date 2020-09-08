import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../../models/user';

export class AdminAuthGuardService implements CanActivate {

    constructor(private auth: AuthService, private userService: UserService) { }
  
    canActivate(): Observable<boolean> {
        return this.auth.user$.pipe(
            map(appUser => appUser.isAdmin)
        )
    }
  }