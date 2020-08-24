//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


//services AKA providers
import { AuthService } from './common/services/auth.service';
import { AuthGuardService } from './common/services/auth-guard.service';
import { AdminAuthGuardService } from './common/services/admin-auth-guard.service';
import { CategoryService } from './common/services/category.service';


//declarations/ bootstraps
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';
import { GamesComponent } from './games/games.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { RateComponent } from './rate/rate.component';
import { SearchComponent } from './search/search.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PostsComponent } from './posts/posts.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { CommentComponent } from './comment/comment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from './common/services/user.service';
import { AdminHomeComponent } from './admin/admin-home/home.component';
import { AdminGamesComponent } from './admin/admin-games/games.component';
import { AdminGamesFormComponent } from './admin/admin-games-form/games-form.component';

//environment
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    HomeComponent,
    SignInComponent,
    CreateAccountComponent,
    ProfileComponent,
    ForumComponent,
    GamesComponent,
    StreamingComponent,
    ReccomendationsComponent,
    WatchlistsComponent,
    RateComponent,
    SearchComponent,
    ForgotPasswordComponent,
    PostsComponent,
    CreateThreadComponent,
    CommentComponent,
    NotFoundComponent,
    AdminHomeComponent,
    AdminGamesFormComponent,
    AdminGamesComponent,
    ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        //routes asscesible to annoymous users
        { path: '', component: HomeComponent },
        
        { path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent },
        { path: 'sign_in/createAccount', component: CreateAccountComponent},
        { path: 'sign_in', component: SignInComponent },
        { path: 'search', component: SearchComponent },

        //you'll see more on these pages if youre signed in, but can view as anonymous user.
        { path: 'forum', component: ForumComponent },
        { path: 'games', component: GamesComponent },
        { path: 'streaming', component: StreamingComponent },
        { path: 'reccomendations', component: ReccomendationsComponent },
        { path: 'watchlists', component: WatchlistsComponent },

        //routes for logged in users
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
        // { path: 'sign_in/profile/:username', component: ProfileComponent, canActivate: [AuthGuardService] },
        { path: 'forum/create-thread', component: CreateThreadComponent, canActivate: [AuthGuardService] },
        { path: 'rate', component: RateComponent,  canActivate: [AuthGuardService]  },

        // admin-only routes: probably dont need admin/home TBT
        { path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        { path: 'admin/games/new', component: AdminGamesFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        { path: 'admin/games/:id', component: AdminGamesFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        { path:  'admin/games', component: AdminGamesComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},

        //wildcard for fallthrough cases.
        { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
      AuthService,
      AuthGuardService,
      UserService,
      AdminAuthGuardService,
      CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
