import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Actions, DocumentResponseTypes} from "./models/document.model";


export interface ILastDocumentsFullWithActions<T extends DocumentResponseTypes> {
  lastFullWithActions: Readonly<Readonly<{
    documents: Readonly<T>,
    actions: Readonly<Actions[]>
  }>[]>
}

export interface IHttpParams {
  [key: string]: string | number | boolean
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public get<T>(endpoint: string, params?: IHttpParams): Observable<T> {
    return this.httpClient.get<T>(environment.url + endpoint, {
      params: params && this.createHttpParams(params),
      withCredentials: true
    })
  }

  public post<T>(endpoint: string, body: any, params?: IHttpParams): Observable<T> {
    return this.httpClient.post<T>(environment.url + endpoint, body, {
      params: params && this.createHttpParams(params),
      withCredentials: true
    })
  }

  public put<T>(endpoint: string, body: any, params?: IHttpParams): Observable<T> {
    return this.httpClient.put<T>(environment.url + endpoint, body, {
      params: params && this.createHttpParams(params),
      withCredentials: true
    })
  }

  public delete<T>(endpoint: string, params?: IHttpParams): Observable<T> {
    return this.httpClient.delete<T>(environment.url + endpoint, {
      params: params && this.createHttpParams(params),
      withCredentials: true
    })
  }

  private createHttpParams(params: { [key: string]: string | number | boolean }) {
    const httpParams = new HttpParams()
    if (params) {
      Object.entries(params).map(([key, value]) => httpParams.set(key, value))
    }
    return httpParams;
  }

}
