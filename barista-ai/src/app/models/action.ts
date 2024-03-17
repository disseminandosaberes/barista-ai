import { Observable } from "rxjs";

export class Action {
  constructor(public type:string, public payload?:any){
    console.log(this.type);
  }

  execute(service?:any) : Observable<any>
  {
    return new Observable<any>()
  }
}
