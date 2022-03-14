import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  createPost(post) {
    return this.http
      .post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  updatePost(id, payload) {
    return this.http.patch(this.url + '/' + id, JSON.stringify(payload))
    .pipe(catchError(this.handleError));
  }

  deletePost(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      throwError(new NotFoundError());
    }
    if (error.status === 400) {
      throwError(new BadRequestError());
    }
    return throwError(new AppError(error));
  }
}
