import { elementDOM } from 'src/app/model/elementDOM';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  dragElement!:elementDOM;
  count: number = 0;

  constructor() { }
// se le pasa el tipo y se crea un objeto elementDom, actualizacion obtenga la configuracion del elemento desde un doc.config
  drag(type:string){

    switch (type) {
      case "text":
        this.dragElement={id:'draggable' + this.count,class:"draggable m-0",type:type,value:"Drag me around1"};
        break;
      case "IMG":
        this.dragElement={id:'draggable' + this.count,class:"draggableIMG",type:type,value:"assets/img/DefaultIMG.png"};
        break;

    }
    this.count++;
  }
}
