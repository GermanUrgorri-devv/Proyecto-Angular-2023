import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';


@Component({

  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']

})

export class PerfilComponent implements OnInit {

  public user: any = [];

  constructor(private _githubService: GithubService) {
    
    this._githubService.getUser().subscribe(user => {
        this.user = user;
        console.log(user);
    });
}

  ngOnInit(): void {
  }

}
