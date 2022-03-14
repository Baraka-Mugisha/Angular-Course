import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Object[];
  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => {
        this.posts = response as [];
      },
      (error) => {
        throw error;
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value,
    };
    this.posts.splice(0, 0, post);

    this.service.create(post).subscribe(
      (response) => {
        post['id'] = response['id'];
        input.value = '';
      },
      (error: AppError) => {
        this.posts.splice(0, 1)
        if (error instanceof BadRequestError) {
          alert(error.originalError);
        } else throw error;
      }
    );
  }

  updatePost(post) {
    this.service.update(post.id, { isRead: true }).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } else throw error;
    });
  }
}
