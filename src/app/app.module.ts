//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFirestoreModule } from '@angular/fire/firestore';




//declarations/ bootstraps
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


// admin module- all things accessible only to administrators, 
import { GameComponent } from './admin/game/game.component';
import { GameFormComponent } from './admin/forms/game-form/game-form.component';
import { PostComponent } from './post/post.component';
import { DescriptorFormComponent } from './descriptor-form/descriptor-form.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ConsoleInfoFormComponent } from './admin/forms/console-info-form/console-info-form.component';
import { GameInfoComponent } from './admin/game-info/game-info.component';
import { GameInfoFormComponent } from './admin/forms/game-info-form/game-info-form.component';



// auth module - componentry related to authentication and profile 
import { SignInComponent } from './user/sign-in/sign-in.component';
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
// we combined profile with auth for now, for simplicity sake. less modules better while routing doesnt work fully
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { EditPreferencesComponent } from './user/edit-preferences/edit-preferences.component';




// forum module
import { ForumComponent } from './forum/forum.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';


// games module- browsing games, filtering games, searching games, viewing games
import { GamesComponent } from './games/games.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { GamingIndexComponent } from './gaming-index/gaming-index.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreatorsComponent } from './creators/creators.component';
import { ConsoleComponent } from './console/console.component';
import { GameCardComponent } from './game/game-card/game-card.component';



// content module - all things the site contains which is not user generated, such as streaming, reccomendations, news, etc
import { StreamingComponent } from './streaming/streaming.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { NewsComponent } from './news/news.component';
import { ContentDashboardComponent } from './content/content-dashboard/content-dashboard.component';
import { DisplayReviewComponent } from './display-review/display-review.component';
import { DisplayRatingComponent } from './display-rating/display-rating.component';
import { DisplayAverageRatingComponent } from './display-average-rating/display-average-rating.component';


// Inclined to remove these, but they are a good idea if they werent soo buggy and unreliable - (debug + test  | redesign -> implement)

// contrib module - all things that user can create, modify delete- comments, forum posts, reviews, ratings
import { ContribDashboardComponent } from './contrib/contrib-dashboard/contrib-dashboard.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component'; // iffy here- could be content or contrib- users can view other users ratings or reviews
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { RecentlyPostedComponent } from './recently-posted/recently-posted.component';
import { ViewAllRatingsComponent } from './view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ProvideRatingComponent } from './provide-rating/provide-rating.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';


//environment 
import { environment } from 'src/environments/environment';



// main service module
import { PlatformsComponent } from './platforms/platforms.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';
import { ViewForumComponent } from './view-forum/view-forum.component';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { ConsolePostComponent } from './admin/forms/console-post/console-post.component';
import { ConsoleFormComponent } from './admin/forms/console-form/console-form.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AppRoutingModule } from './app.routing';
import { ServicesModule } from './common/services/services.module';


@NgModule({
  declarations: [
    AppComponent,



    CreatePostComponent,
    ConsoleFormComponent,
    ConsolePostComponent,
    AdminDashboardComponent,
    GameInfoFormComponent,
    GameFormComponent,
    EditProfileComponent,
    ViewProfileComponent,
    EditPreferencesComponent,
    SignInComponent,
    CreateAccountComponent,
    ForumComponent,
    GamesComponent,
    StreamingComponent,
    ReccomendationsComponent,
    WatchlistsComponent,
    ForgotPasswordComponent,
    CreateThreadComponent,
    GameComponent,
    // GameFormComponent,
    ViewGameComponent,
    ViewRatingsComponent,
    PostComponent,
    GamingIndexComponent,
    CategoriesComponent,
    CreatorsComponent,
    PlatformsComponent,
    ConsoleComponent,
    ConsoleInfoFormComponent,
    ContribDashboardComponent,
    EditContributionsComponent,
    EditReviewComponent,
    NewsComponent,

    ContentDashboardComponent,
    ViewReviewsComponent,
    ViewPostsComponent,
    RecentlyPostedComponent,
    ViewAllRatingsComponent,
    ViewAllReviewsComponent,
    ViewAllPostsComponent,
    ViewThreadComponent,
    ViewForumComponent,
    ForumsListComponent,
    DisplayReviewComponent,
    DisplayRatingComponent,
    ProvideRatingComponent,
    DisplayAverageRatingComponent,
    GameCardComponent,
    CommentSectionComponent,
    GameInfoComponent,
    GameInfoFormComponent,
    SuggestNewComponent,
    DescriptorFormComponent,
    ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
