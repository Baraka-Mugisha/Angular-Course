import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Object[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        console.log('getting response... ', response);
        this.posts = (response as Array<null>);
      })
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
}
