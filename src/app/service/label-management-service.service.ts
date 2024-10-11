import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelManagementServiceService {

  constructor(private httpClient:HttpClient) { 

  }


  getLabelDetails(): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/zorroSign/labelManagement/getAll_labels`)
  }

  saveLabelDetail(body: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8081/zorroSign/labelManagement/createNewLabel', body);
  }






}
