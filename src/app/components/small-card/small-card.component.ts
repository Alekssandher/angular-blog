import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() 
  post:any

  imageUrl = ""
  cardTitle = ""

  constructor() {}

  ngOnInit(): void {
    
    const post: any = this.post
    this.imageUrl = `https://res.cloudinary.com/dnf22gtjt/image/upload/f_auto,q_auto/v1/${post.category}/${post.media}`;
    this.cardTitle = post.title;
  
  }
}
