import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { Injectable } from '@angular/core';

const horizontalPosition: MatSnackBarHorizontalPosition = 'start'
const verticalPosition: MatSnackBarVerticalPosition = 'top'

@Injectable({
  providedIn: 'root'
})

export class ErrorHandleService {
  constructor(private _SnackBar: MatSnackBar){}

  handle(message: string, error?:HttpErrorResponse){
    this._SnackBar.open(
      message, 'Fechar', {
      duration: 5000,
      horizontalPosition,
      verticalPosition
    });
  }
}
