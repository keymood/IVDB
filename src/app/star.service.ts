import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Rating } from './models/content/rating';
/* I'm not sure its pertinent that this service is in the root module anymore, since
we found a new way to get username and gameotitle, and this is handled by the component logic
anyhow...
 */
@Injectable({
  providedIn: 'root'
})
export class StarService {
    exists : boolean = false;;


    constructor(private afs : AngularFirestore) {
    }

    getRatingAsPromise(username : string, game_title :  string) : Promise<Rating> {
        /* This will allow us to get the value from observable 
        to check whether or not rating exists, in component logic.
         */
        return this.getGameRating(username, game_title).pipe(take(1))
        .toPromise();
    }


    getUserStars(username : string) : Observable<Rating []> {
        const ratingRef = this.afs.collection<Rating>('ratings', (ref) => ref.where('username', '==', username));
        return ratingRef.valueChanges();
    }

    getGameRating(username :  string, game_title : string) : Observable<Rating> {
        return this.afs.collection('ratings').doc<Rating>(`${username}_${game_title}`).valueChanges();
    }

    setRating(username : string, game_title : string, value : number) {
        //rating document data
        const rating : Rating = {username, game_title, value};

        //create unique path for each rating
        const ratingPath = `ratings/${rating.username}_${rating.game_title}`

        //return the promise after setting data in the document
        return this.afs.doc(ratingPath).set(rating);
    }

    //seperate method for deleting a rating
    deleteRating(username, game_title) {
        if (!confirm('Are you sure that you want to delete your rating for this game?')) return;
        return this.afs.doc(`ratings/${username}_${game_title}`).delete();
    }
}
