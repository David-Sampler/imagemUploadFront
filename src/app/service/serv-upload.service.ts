import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServUploadService {

  url = 'http://localhost:3000'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  }
  constructor(private http:HttpClient) { }

//fotosUpdate
 get(){   
   return this.http.get(this.url+'/posts')
 }

 post(arquivo){    
   return this.http.post(this.url+'/posts',arquivo)
 }

 getCliente(){
   return this.http.get(this.url+'/')
 }

 insertCliente(cliente):Observable<any>{
   return this.http.post<any>(this.url+'/insertCliente',cliente)
 }

}
