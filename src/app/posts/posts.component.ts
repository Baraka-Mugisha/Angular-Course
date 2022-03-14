import { Component, OnInit } from '@angular/core';
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
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = response as [];
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value,
    };
    this.service.createPost(post).subscribe((response) => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post);
      input.value = '';

      console.log(response, this.posts);
    });
  }

  updatePost(post) {
    this.service.updatePost(post.id, { isRead: true }).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response);
    });
  }
}
