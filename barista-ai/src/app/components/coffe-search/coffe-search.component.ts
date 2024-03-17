import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoffeOptions } from 'src/app/models/coffe-options';
import { CoffeSearchFacade } from './coffe-search.facade';
import { GetListCoffeAction } from './actions/get-list-coffe.action';

@Component({
  selector: 'app-coffe-search',
  templateUrl: './coffe-search.component.html',
  styleUrls: ['./coffe-search.component.css']
})
export class CoffeSearchComponent {

  constructor(public formBuilder: FormBuilder, public facade: CoffeSearchFacade){ }

  @ViewChild('stepper') stepper: any;

  coffeOptions: CoffeOptions = new CoffeOptions();

  coffeForm: FormGroup = this.formBuilder.group({
    aroma: ['', [Validators.required]],
    flavor: ['', [Validators.required]],
    acidity: ['', [Validators.required]],
    body: ['', [Validators.required]],
  })

  confirmChoice(){
    console.log(this.coffeForm.value);

    this.facade.call(new GetListCoffeAction({ coffe: this.coffeForm.value }));

    this.stepper.next();
  }

  reset(){
    this.coffeForm.reset();
    this.stepper.reset();
  }
}
