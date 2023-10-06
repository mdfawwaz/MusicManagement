import { Component } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent{

constructor(private songService: SongService) {}

likeSong(songId: number) {
    this.songService.likeSong(songId).subscribe(
        response => {
            console.log('Song liked:', response);
        },
        error => {
            console.error('Error liking song: ', error);
        }
    );
}
}
