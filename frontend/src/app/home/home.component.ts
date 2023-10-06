import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums: string[] = [];
  songs: any[]=[];

  constructor(private route: ActivatedRoute,private albumService: AlbumService,private router : Router) { }

  ngOnInit(): void {
    this.getAlbums();
    this.route.paramMap.subscribe((params) => {
      const albumName = params.get('name'); // Assuming the param name is 'name'

      if (albumName) {
        this.loadAlbum(albumName);
      }
    });
  }


  getAlbums(): void {
    this.albumService.getAllAlbums().subscribe(
      data => {
        this.albums = data;
      },
      error => {
        console.error('Error fetching albums: ', error);
      }
    );
  }

  onAlbumClick(albumName: string) {
    this.router.navigate(['/song-list', { albumName: albumName }]);
  }

  loadAlbum(albumName: string) {
    this.albumService.getSongsByAlbum(albumName).subscribe(
      (songs) => {
        this.songs = songs;
      },
      (error) => {
        console.error('Error fetching songs: ', error);
      }
    );
  }

}




