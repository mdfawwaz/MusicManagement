import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:8080/api/music'; // Replace with your actual API URL

constructor(private http: HttpClient) { }

getAllAlbums(): Observable<string[]> {
  const headers = new HttpHeaders({

    'Authorization': 'Bearer ' + localStorage.getItem('token')

  });
  return this.http.get<string[]>(`${this.apiUrl}/home`,{headers : headers});
}

getAllCategory(): Observable<string[]> {
  const headers = new HttpHeaders({

    'Authorization': 'Bearer ' + localStorage.getItem('token')

  });
  return this.http.get<string[]>(`${this.apiUrl}/categories`,{headers : headers});
}

  getSongsByAlbum(albumName: string): Observable<any[]> {
    console.log(albumName);
    const headers = new HttpHeaders({


      'Authorization': 'Bearer ' + localStorage.getItem('token')

    });
    return this.http.get<any[]>(`${this.apiUrl}/songs/${albumName}/all`,{headers : headers});
  }
}
