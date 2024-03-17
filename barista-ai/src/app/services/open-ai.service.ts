import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class OpenAIService {
  constructor(private http: HttpClient) {}

  callOpenAI({question}: {question: string}): Observable<any>{
    return this.http.post(`${environment.openAIService}/ask-openai`, {question})
  }
}
