import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private _githubService: GithubService) {
    
    this._githubService.getUser().subscribe(user => {
        console.log(user);
    });
}




  ngOnInit(): void {
  }

}
