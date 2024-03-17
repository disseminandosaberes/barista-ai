import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeSearchComponent } from './coffe-search.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CoffeSearchComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CoffeSearchComponent
  ]
})
export class CoffeSearchModule { }
