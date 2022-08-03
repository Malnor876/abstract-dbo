import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  public login(login = 'pershov', password = '12345678') {
    return this.apiService.post(
      'login',
      {},
      {},
      new HttpHeaders({
        Authorization: 'Basic ' + btoa(`${login}:${password}`),
      })
    );
  }
}
