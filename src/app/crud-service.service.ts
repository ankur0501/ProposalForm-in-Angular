import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpClientJsonpModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable, of } from 'rxjs';
import { PersonalDetail, EmploymentDetails } from './personal-detail';
import * as State  from "../state.json";
@Injectable({
  providedIn: 'root'
})

export class CrudServiceService {
  private apiServer = "http://localhost:60250/api/";
  public updateList:any;
  public FlagforEmpType:string="N";
  httpOptions = { headers: new HttpHeaders({ 
    'Content-Type': 'application/json'}) }
  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<any> {
    return of(State).pipe();
 }
  create(product): Observable<PersonalDetail> 
  { 
    return this.httpClient.post<PersonalDetail>(this.apiServer+"Create", JSON.stringify(product), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
  update(personalDetails): Observable<PersonalDetail>
  {
    return this.httpClient.post<PersonalDetail>(this.apiServer+"updateDetails", JSON.stringify(personalDetails), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
  delete(id:number): Observable<PersonalDetail>
   {
     return this.httpClient.post<PersonalDetail>(this.apiServer + 'RemoveDetails?productId='+id, this.httpOptions).pipe(
       catchError(this.errorHandler)
     )
   }

  getById(id): Observable<PersonalDetail> {
    return this.httpClient.get<PersonalDetail>(this.apiServer+"/getDetails?id="+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  
  getEmploymentDetails(id): Observable<EmploymentDetails> {
    return this.httpClient.get<EmploymentDetails>(this.apiServer+"/getEmploymentDetails?id="+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  updateEmploymentDetails(employment): Observable<EmploymentDetails>
  {
    return this.httpClient.post<EmploymentDetails>(this.apiServer+"updateEmploymentDetails", JSON.stringify(employment), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
