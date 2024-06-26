import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  monthAndYear: string = '';
  title = 'blogs';
  allPosts = []

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.monthAndYear = formatDate(this.today, 'MMM YYYY', 'en-GB')
    this.httpClient.get("https://saysomething-a52a6-default-rtdb.firebaseio.com/movies.json").pipe(map(responseData => {
      const posts = [];
      for (const key in responseData) {
        posts.push({...responseData[key], id: key})
      }
      return posts;
    } )).subscribe(posts => {
      this.allPosts = posts;
  })
  }
}
