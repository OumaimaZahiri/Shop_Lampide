import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  
  constructor(private http: HttpClient) {
    var obj;
    this.getJSON().subscribe((data: any) => obj=data, (error: any) => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/products_list.json");
  }
  
}
