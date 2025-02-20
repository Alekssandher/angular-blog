import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/posts';
import { NgIf } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-content',
  imports: [NgIf, FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  articleId: string | null = null;
  article: any = null;
  articleImg: string = ""

  articles = posts;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get("id"); 
    this.loadArticle();
  }

  loadArticle() {
    const id = Number(this.articleId);
    this.article = this.articles.find(a => a.id === id);

  }
}