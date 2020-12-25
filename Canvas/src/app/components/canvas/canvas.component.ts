import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/classes/block';
import * as Color from 'color';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  blockArr: Block[];
  rowSize = 20;
  colSize = 20;

  constructor() {
    this.blockArr = [];
  }

  ngOnInit(): void {
    this.newCanvas();
  }

  newCanvas(){
    for (let i = 0 ; i < this.rowSize * this.colSize; i++)
    {
      const b = new Block(i);
      this.blockArr.push(b);
    }
  }

  getNewColor()
  {
    const rC = Math.floor(Math.random() * 255);
    const gC = Math.floor(Math.random() * 255);
    const bC = Math.floor(Math.random() * 255);
    const color = new Color ({r: rC , g: gC , b: bC}, 'rgb');
    return {'background-color': color.hex()};
  }

}
