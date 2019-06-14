import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
const urlTodos = 'https://jsonplaceholder.typicode.com/todos';
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
}
