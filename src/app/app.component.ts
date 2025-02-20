import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { HomeContentComponent } from "./components/home-content/home-content.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, HomeContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
