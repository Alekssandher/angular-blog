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
  constructor() {}
  ngOnInit(): void {
    
    const post: any = this.post
    this.imageUrl = `https://res.cloudinary.com/dnf22gtjt/image/upload/f_auto,q_auto/v1/${post.category}/${post.media}`;
    this.threadTitle = post.title;
    this.threadDescription = this.truncateText(post.content, 30);
  }
  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  }
}
