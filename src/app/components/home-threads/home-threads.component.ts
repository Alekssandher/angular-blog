import { Component, OnInit } from '@angular/core';
import { ThreadsComponent } from "../threads/threads.component";
import { NgFor, NgIf } from '@angular/common';
import { PostService } from '../../../services/post.service';
import { posts } from '../../data/posts';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-threads',
  imports: [ThreadsComponent, NgFor, NgIf, FooterComponent],
  templateUrl: './home-threads.component.html',
  styleUrl: './home-threads.component.css'
})
export class HomeThreadsComponent implements OnInit {
  posts: any[] = [];
  displayedPosts: any[] = [];
  filteredPosts: any[] = [];
  postsPerPage = 4;
  category: string | null = null;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category'); 
      this.shufflePosts();
      this.filterPosts();
    });
  }
  
  shufflePosts() {
    this.posts = posts
      .map(post => ({ post, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ post }) => post);
  }

  filterPosts() {
    if (this.category) {
      this.filteredPosts = this.posts.filter(post => post.category.toLowerCase() === this.category?.toLowerCase());
    } else {
      this.filteredPosts = [...this.posts]; 
    }
    
    // Resetar os posts exibidos e carregar novos
    this.displayedPosts = [];
    this.loadMore();
  }

  loadMore() {
    const nextPosts = this.filteredPosts.slice(this.displayedPosts.length, this.displayedPosts.length + this.postsPerPage);
    this.displayedPosts = [...this.displayedPosts, ...nextPosts];
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/threads', category]);
  }
}
