import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponents, GameRoutingModule } from './game-routing.module';


@NgModule({
  declarations: [GameComponents],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
/* 
    For the singleton view of object.
    Displays all known information and picture of the game or console.
    
    
    As opposed to GamesModule, which
    allows us to view multiple objects.
 */
export class GameModule { }
