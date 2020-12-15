import { Injectable } from '@angular/core';
import { Letters } from './models/Letters';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  private _stack: string;
  private _needle: string;

  stackArr: Letters[];
  needleArr: Letters[];
  occurrencesCount: number = 0;

  isSorting: boolean = false;
  animationSpeed: number = 500;

  constructor() {
    [this.stack, this.needle, this.stackArr, this.needleArr] = ['ABCDE','ABC',[],[]];
    this.createStringsArrays();
  }


  createStringsArrays() {
    // If the new stack message is different from the curr arr, update!
    const currStack = this.stackArr.map((obj) => obj.character).join('');
    if (currStack !== this.stack) { 
      let splitStack = this.stack.split(''); 
      this.stackArr = [];
      for (let i = 0; i < splitStack.length; i++) 
        this.stackArr.push({character: splitStack[i], colour: 'white', index: i});
    }

    const currNeedle = this.needleArr.map((obj) => obj.character).join('');
    if (currNeedle !== this.needle) { 
      let needleStack = this.needle.split(''); 
      this.needleArr = [];
      for (let i = 0; i < needleStack.length; i++) 
        this.needleArr.push({character: needleStack[i], colour: 'white', index: i});
    }
  }


  formatLabel(value: number): string {
    value /= 1000;
    if (value.toString().length > 1)
      return value.toString().substring(0, 4) + 's';
    return value + 's';
  }



  public get stack(): string {
    return this._stack;
  }
  public set stack(value: string) {
    this._stack = value;
  }

  public get needle(): string {
    return this._needle;
  }
  public set needle(value: string) {
    this._needle = value; 
  }

}

