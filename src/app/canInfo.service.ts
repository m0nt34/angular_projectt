import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class carsInfoService {
  private apiUrl = 'http://localhost:3000/carsInfo'; 

  constructor(private http: HttpClient) {}

  addcarsInfo(carsInfo: any) {
    return this.http.post<any>(this.apiUrl, carsInfo);
  }
} 