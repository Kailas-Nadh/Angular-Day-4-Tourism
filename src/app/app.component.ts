import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { CardComponent } from "./components/card/card.component";
import { AuthComponent } from './pages/auth/auth.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, OverviewComponent, CardComponent,AuthComponent]
})
export class AppComponent {
  title = 'Kerala_Tourism';
}
