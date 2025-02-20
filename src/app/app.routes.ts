import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeThreadsComponent } from './components/home-threads/home-threads.component';

export const routes: Routes = [
    {path: ':category', component: HomeThreadsComponent},
    { path: '', component: HomeComponent },
    { path: 'article/:id', component: ContentComponent}
];
