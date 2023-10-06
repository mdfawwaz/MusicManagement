import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../services/song.service';



@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})


export class SongListComponent implements OnInit {

  currentSong: any;

  isPlaying: boolean | undefined;



  albumId: string | undefined;

  album: any;

  songs: any[] = []; // List of songs

  http: any;

  iconStyles: { color: string; } | undefined;



  constructor(private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const albumName = params.get('albumName');
      if (albumName) {
        this.loadAlbum(albumName);
      }
    });
  }

  loadAlbum(albumName: string) {
    this.songService.getSongsByAlbum(albumName).subscribe(
      (songs) => {
        this.songs = songs;
      },
      (error) => {
        console.error('Error fetching songs: ', error);
      }
    );
  }


  // ngOnInit() {

  //   this.route.paramMap.subscribe(params => {

  //     const id = params.get('id');
  //     this.loadAlbum();

  //   });

  // }



  // loadAlbum() {

  //   // Fetch album and songs from your API as needed

  //   // For demonstration purposes, let's assume you receive an array of songs

  //   this.album = { name: 'Album Name' };

  //   this.songs = [

  //     { name: 'Kun Faya Kun', isPlaying: false, },

  //     { name: 'Tinak Dhin Na', isPlaying: false },

  //     { name: 'Main Raasta', isPlaying: false },

  //     { name: 'Pasoori', isPlaying: false },

  //     { name: 'Hukum', isPlaying: false },

  //     { name: 'Chaleya', isPlaying: false },

  //     { name: 'Pyar Hota Kayi Baar Hai', isPlaying: false },



  //     // Add more songs as needed

  //   ];

  // }

  toggleLike(song: any): void {

    song.isLiked = !song.isLiked;

    if (song.isLiked) {

      // Make an HTTP POST request to add the song to Liked Songs or perform other actions

      // Example: You can send the song details to your user's Liked Songs list

      // this.http.post('/api/music/liked/add', song).subscribe(

      //   (response) => {

      //     console.log('Song added to Liked Songs:', response);

      //   },

      //   (error) => {

      //     console.error('Error adding song to Liked Songs:', error);

      //   }

      // );

    } else {

      // Make an HTTP POST request to remove the song from Liked Songs or perform other actions

      // Example: You can send the song details to your user's Liked Songs list

      // this.http.post('/api/music/liked/remove', song).subscribe(

      //   (response) => {

      //     console.log('Song removed from Liked Songs:', response);

      //   },

      //   (error) => {

      //     console.error('Error removing song from Liked Songs:', error);

      //   }

      // );

    }

  }

  handleButtonClick(): void {
    // Change the icon color to red
    this.iconStyles = {
      'color': 'red'
    };
  }

  togglePlayPause(song: any): void {
    // Toggle the isPlaying property of the clicked song
    song.isPlaying = !song.isPlaying;

    // Pause other songs when one is played

    this.songs.forEach((s) => {

      if (s !== song) {

        s.isPlaying = false;

      }

    });

  }

  //selectedPlaylistId: number = 1; // Replace with your actual logic to determine the playlist

  addToPlaylist(song: any) {

  }
}
