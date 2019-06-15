import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
const urlTodos = 'https://jsonplaceholder.typicode.com/todos';
const urlAlb = 'https://jsonplaceholder.typicode.com/albums';
const urlUsers = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get(urlPhotos);
  }
  getPhoto(id) {
    return this.http.get(urlPhotos + '/' + id);
  }
  createData(data) {
    return this.http.post(urlPhotos, data);
  }
  getAlbums() {
    return this.http.get(urlAlb);
  }
  getAlbum(id) {
    return this.http.get(urlAlb + '/' + id);
  }
  getUsers() {
    return this.http.get(urlUsers);
  }
  getUser(id) {
    return this.http.get(urlUsers + '/' + id);
  }
}
