import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from "../../components/home-content/home-content.component";
import { HomeThreadsComponent } from "../../components/home-threads/home-threads.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MenuTitleComponent, HomeContentComponent, HomeThreadsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  
}
