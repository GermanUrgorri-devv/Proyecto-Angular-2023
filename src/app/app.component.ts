import { Component } from '@angular/core';

import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'Proyecto Angular 2023 CAMBBIADO';
}
