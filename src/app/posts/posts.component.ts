import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    }
    createPost(input: HTMLInputElement){
      let post = { title: input.value };

      this.http.post(this.url,
        JSON.stringify(post))
        .subscribe(response => {
          post['id']=response['id'];
          console.log('creating response... ');
          this.posts.splice(0, 0, post);
      })
    }
    updatePost(post) {
      this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead : true }))
        .subscribe(response => {
          console.log(response)
        })
      // this.http.put(this.url, JSON.stringify(post))
    }
    deletePost(post) {
      this.http.delete(this.url + '/' + post.id)
        .subscribe(response => {
          let id = this.posts.indexOf(post);
          this.posts.splice(id, 1)
          console.log(response)
        })
    }
    ngOnInit(){
      this.http.get(this.url)
      .subscribe(response => {
        console.log('getting response... ', response);
        this.posts = (response as Array <any>);
      })
    }
}
