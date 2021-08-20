import { Product } from './../models/product.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this._http.get<Product[]>(`http://localhost:3000/products/`)
    }

    getProductById(id): Observable<Product> {
        return this._http.get<Product>(`http://localhost:3000/products/${id}`)
    }

}