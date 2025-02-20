import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-threads',
  imports: [],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.css'
})
export class ThreadsComponent {
  @Input()
  post: any

  imageUrl = ""
  threadTitle = ""
  threadDescription = ""
  threadCategory = ""
  author = ""
  date = ""
  threadId = ""
  constructor() {}
  ngOnInit(): void {
    
    const post: any = this.post
    this.imageUrl = `./assets/banners/${post.media}`;
    this.threadTitle = post.title;
    this.threadDescription = this.truncateText(post.description, 120);
    this.threadCategory = post.category
    this.author = post.author
    this.date = post.date
    this.threadId = post.id
  }
  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  }
}
