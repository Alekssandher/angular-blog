import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  post: any;

  photoCover: string = ""
  cardTitle: string = ""
  cardDescription: string = ""
  id: string = ""

  constructor() {}

  ngOnInit(): void {
    
    const post: any = this.post
    this.photoCover = `https://res.cloudinary.com/dnf22gtjt/image/upload/f_auto,q_auto/v1/${post.category}/${post.media}`;
    this.cardTitle = post.title;
    this.cardDescription = post.content;
    this.id = post.id
  
  }
   
  

  
}
