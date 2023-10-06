import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  songs: any[]=[];
  iconStyles: { color: string; } | undefined;

  constructor(private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if (categoryName) {
        this.loadSongsByCategory(categoryName);
      }
    });
  }

  loadSongsByCategory(categoryName: string) {
    this.songService.getSongsByCategory(categoryName).subscribe(
      (songs) => {
        this.songs = songs;
      },
      (error) => {
        console.error('Error fetching songs: ', error);
      }
    );
  }

  toggleLike(song: any): void {

    song.isLiked = !song.isLiked;

    if (song.isLiked) {

    } else {

    }

  }

  handleButtonClick(): void {
       this.iconStyles = {
      'color': 'red'
    };
  }

  togglePlayPause(song: any): void {
    // Toggle the isPlaying property of the clicked song
    song.isPlaying = !song.isPlaying;


    this.songs.forEach((s) => {

      if (s !== song) {

        s.isPlaying = false;

      }

    });

  }

  addToPlaylist(song: any) {

  }
}



