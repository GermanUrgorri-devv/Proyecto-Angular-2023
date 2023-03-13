import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';


@Component({

  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']

})

export class PerfilComponent implements OnInit {

  public user: any = [];
  public repos: any = [];

  public username: string;

  constructor(private _githubService: GithubService) {

    this.user = false;
    this.username = "";

  }

  searchUser() {

    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

  }

  ngOnInit(): void {}

}
