import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InfoComponent } from './info/info.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: UserComponent,
        children : [
            { path: '', component: WelcomeComponent },
            { path: 'info', component: InfoComponent },
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-in/createAccount', component: CreateAccountComponent },
            { path: 'profile/:uid', component: ViewProfileComponent, canActivate: [AuthGuard] },
            { path: 'preferences/:uid', component: EditPreferencesComponent, canActivate: [AuthGuard] },
            { path: 'sign-in/createAccount/forgotPassword', component: ForgotPasswordComponent },
            // change uid here to displayname to be user and search friendlier
            { path: 'sign-in/create-profile/:uid', component: EditProfileComponent, canActivate: [AuthGuard] },
            
            //i think you need to refactor here so that other users can view another users profile.
            // that does not need route guard.
            { path: 'profile/:uid/:username', component: ViewProfileComponent, canActivate: [AuthGuard] },
            { path: 'preferences/:uid/:username', component: EditPreferencesComponent, canActivate: [AuthGuard] }    
        ]
    }
    
    
];

export const UserRoutingModule = RouterModule.forChild(routes);