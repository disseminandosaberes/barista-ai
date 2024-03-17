import { Action } from "src/app/models/action";
import { CoffeSearchActions } from "./coffe-search.action";
import { Coffe } from "src/app/models/coffe";
import { CoffeResult } from "src/app/models/coffe-result";
import { delay, of, switchMap, throwError, timer } from "rxjs";
import { OpenAIService } from "src/app/services/open-ai.service";

export class GetListCoffeAction extends Action {
  override readonly type = CoffeSearchActions.GET_LIST_COFFE;
  constructor(override payload: {coffe:Coffe}){
    super(CoffeSearchActions.GET_LIST_COFFE);
  }
  override execute(service?: OpenAIService){
    if(service == null){
      throw Error("OpenAIService indisponível")
    }

    return service.callOpenAI({
      question: this.coffeDescription(this.payload.coffe)
    })
  }

  private coffeDescription(coffe: Coffe){
    return `Faça apenas uma lista de 5 tipos de café especiais com as características: Aroma ${coffe.aroma}, Acidez ${coffe.acidity}, Sabor ${coffe.flavor}, Corpo ${coffe.body}. Apenas o nome do café.`
  }
}
