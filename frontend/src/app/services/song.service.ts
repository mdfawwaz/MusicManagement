import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playlist = { id: 1, name: 'My Playlist', songs: [] };
  private apiUrl = 'http://localhost:8080/api/music'; // Replace with your actual API URL

constructor(private http: HttpClient) { }

  getSongsByAlbum(albumName: string): Observable<any[]> {
    const headers = new HttpHeaders({

      'Authorization': 'Bearer ' + localStorage.getItem('token')

    });
    const url = `${this.apiUrl}/songs/${albumName}/all`;
    return this.http.get<any[]>(url , {headers:headers});
  }


  addToPlaylist(song: any) {

  }


  getSongsByCategory(categoryName: string): Observable<any[]> {
    const headers = new HttpHeaders({

      'Authorization': 'Bearer ' + localStorage.getItem('token')

    });
    const url = `${this.apiUrl}/songs/category/${categoryName}/all`;
    return this.http.get<any[]>(url,{headers : headers});
  }

  likeSong(songId: number): Observable<any> {
    const headers = new HttpHeaders({

      'Authorization': 'Bearer ' + localStorage.getItem('token')

    });
    const url = `${this.apiUrl}/songs/${songId}/like`;
    return this.http.post(url, {},{headers : headers});
}

}

