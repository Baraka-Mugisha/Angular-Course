import { Component, Input, OnInit } from '@angular/core';
import { _getOptionScrollPosition } from '@angular/material/core';
import { ɵangular_packages_platform_browser_platform_browser_a } from '@angular/platform-browser';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {

    }
    createPost(input: HTMLInputElement){
      let post = { title: input.value };
      this.service.createPosts(post)
        .subscribe(response => {
          post['id']=response['id'];
          console.log('creating response... ');
          this.posts.splice(0, 0, post);
      })
    }
    updatePost(post) {
      this.service.updatePost(post)
        .subscribe(response => {
          console.log(response)
        })
      // this.http.put(this.url, JSON.stringify(post))
    }
    deletePost(post) {
      this.service.deletePost(post.id)
        .subscribe(response => {
          let id = this.posts.indexOf(post);
          this.posts.splice(id, 1)
          console.log(response)
        })
    }
    ngOnInit(){
      this.service.getPosts()
      .subscribe(response => {
        console.log('getting response... ', response);
        this.posts = (response as Array <any>);
      }, error => {
        alert('an error occured');
        console.log(error)
      })
    }
}
