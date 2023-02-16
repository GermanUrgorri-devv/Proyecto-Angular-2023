import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;

  constructor(private _http: HttpClient) {
    this.username = 'German-devv';
  }

  getUser() {
    
    return this._http.get('http://api.github.com/users/' + this.username).pipe(map(res => res));
  }
}
