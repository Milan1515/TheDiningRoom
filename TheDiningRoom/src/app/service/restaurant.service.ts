import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestaurantList } from '../core/model/restaurant-list.model';
const baseURL = "http://localhost:3000/api/restaurants"
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(params?: any): Observable<RestaurantList> {
    let options = {}

    if (params) {
      options = {
        params: new HttpParams()
          .set("page", params.page || "")
          .set("pageSize", params.pageSize || "")
          .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get(baseURL, options).pipe(map((data: any) => {
      return new RestaurantList(data)
    }))
  }
}
