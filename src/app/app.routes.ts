import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { AppComponent } from './app.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    // loadChildren: () => import('./chat/chat.routes')
  },
];
