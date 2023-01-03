
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {

  constructor(private http: HttpClient) { }

  searchInfo(searchText: string): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime', {
      params: {
        q: searchText
      }
    }).pipe(
      map((value: any) => value.data)
    )
  }
}
