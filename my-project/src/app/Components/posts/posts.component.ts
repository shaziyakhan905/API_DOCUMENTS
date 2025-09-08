import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postsApiUrl: string = "https://dummyjson.com/posts";
  constructor(private httpClient: HttpClient) {
    this.getAllPosts();
  }

  getAllPosts() {
    this.httpClient.get(this.postsApiUrl).subscribe((result: any) => {
      console.log(result.posts)
    })
  }

  getPost() {
    // this.httpClient.get("https://dummyjson.com/posts").subscribe((result:any)=>{
    //   console.log(result);
    // },(error)=>{
    //     console.log(error)
    //   });
    // }
    this.httpClient.get("https://dummyjson.com/posts").subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  postUser(payload: any) {
    this.httpClient.post("https://dummyjson.com/posts", payload).subscribe
      ((result) => {
        console.log(result);
      },
        (error) => {
          console.log(error);
        });
  }

  putUser(payload: any) {
    this.httpClient.put("https://dummyjson.com/posts", payload).subscribe
      ((result) => {
        console.log(result);
      },
        (error) => {
          console.log(error);
        });
  }
  deleteUser(id: any) {
    this.httpClient.delete(`https://dummyjson.com/posts/${id}`).subscribe
      ((result) => {
        console.log(result);
      },
        (error) => {
          console.log(error);
        });
  }
  patchUser(payload: any) {
    this.httpClient.patch("https://dummyjson.com/posts", payload).subscribe
      ((result) => {
        console.log(result);
      },
        (error) => {
          console.log(error)
        });
  }
}