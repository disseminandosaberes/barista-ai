import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Action } from "src/app/models/action";
import { CoffeResult } from "src/app/models/coffe-result";
import { ErrorHandleService } from '../../services/error-handle.service';
import { OpenAIService } from '../../services/open-ai.service';

class CoffeSearchState {
  loading: boolean = false;
  result?: CoffeResult;
}

@Injectable({
  providedIn: 'root'
})
export class CoffeSearchFacade {
  constructor(private errorHandleService: ErrorHandleService, private OpenAIService: OpenAIService){}

  private state = new CoffeSearchState();
  private stateManager = new BehaviorSubject<CoffeSearchState>(this.state);

  loading$ = this.stateManager.asObservable().pipe(
    map(state => state.loading)
  );

  result$ = this.stateManager.asObservable().pipe(
    map(state => state.result)
  );

  call(actions: Action){
    this.stateManager.next({...this.state, loading: true})

    actions.execute(this.OpenAIService).subscribe({
      next: (result) => {
        this.stateManager.next({...this.state, loading: false, result})
      },
      error:(err:HttpErrorResponse) => {
        this.errorHandleService.handle('Erro ao processar os dados solicitados', err)
        this.stateManager.next({...this.state, loading: false})
      }

    })
  }
}
