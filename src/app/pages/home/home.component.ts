import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeThreadsComponent } from "../../components/home-threads/home-threads.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HomeThreadsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  
}
