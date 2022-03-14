import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(id, payload) {
    return this.http.patch(this.url + '/' + id, JSON.stringify(payload));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
