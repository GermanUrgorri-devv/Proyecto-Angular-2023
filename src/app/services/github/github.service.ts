import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private client_id = 'd42e79e66af579497b2f';
  private client_secret = '20cb00fd5ded7f0a2bede1f9149c07d9485925a4';

  constructor(private _http: HttpClient) {
    this.username = 'bradtraversy';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username +
      '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(map(res => res));
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' +
      '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(map(res => res));
  }

  updateUser(username: string) {
    this.username = username;
  }
}
