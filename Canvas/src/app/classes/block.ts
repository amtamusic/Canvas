import * as Color from 'color';
import { OnInit } from '@angular/core';

export class Block implements OnInit{
    colorWhite: Color<'white'> = new Color('white');
    colorBlack: Color<'black'> = new Color('black');
    colorRGB: Color = new Color({r : 0 , g: 0 , b: 0 }, 'rgb');
    currentColor: Color;
    id: number;

    constructor(id)
    {
        this.setId(id);
        const rC = Math.floor(Math.random() * 255);
        const gC = Math.floor(Math.random() * 255);
        const bC = Math.floor(Math.random() * 255);
        this.currentColor = Color ({r: rC , g: gC , b: bC}, 'rgb');
        //console.log(this.currentColor.hex());
    }

    setColor(color)
    {
        this.currentColor = color;
    }

    getColor()
    {
        return this.currentColor;
    }

    getColorHex()
    {
        return this.currentColor.hex();
    }

    getId()
    {
        return this.id;
    }

    setId(id)
    {
        this.id = id;
    }

    ngOnInit(){}
}
