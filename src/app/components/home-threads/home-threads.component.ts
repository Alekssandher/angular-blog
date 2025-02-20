import { Component, OnInit } from '@angular/core';
import { ThreadsComponent } from "../threads/threads.component";
import { NgFor } from '@angular/common';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-home-threads',
  imports: [ThreadsComponent, NgFor],
  templateUrl: './home-threads.component.html',
  styleUrl: './home-threads.component.css'
})
export class HomeThreadsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts("8").subscribe({
      next: (response) => {
        this.posts = response.data
      }
    })
  }
}
