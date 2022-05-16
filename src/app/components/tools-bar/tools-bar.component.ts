import { DragAndDropService } from './../../drag-and-drop.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tools-bar',
  templateUrl: './tools-bar.component.html',
  styleUrls: ['./tools-bar.component.scss']
})
export class ToolsBarComponent implements OnInit {

  constructor(private dragService:DragAndDropService) { }

  ngOnInit(): void {
  }
  // funcion se activa cuando arrastras un elemento 
  dragstart(ev:any,type:string){
    // se le pasa el tipo de elememto a este servicio para que sea consumido al momento de realizar el drop 
  this.dragService.drag(type)
 
  }

  // obtine el html del diseño creado
  // aun no esta bien testeado pero el objetivo es obtener todos los elementos de la pagina y restarle los px necesario para que quede dentro de una A4
  // al utilizar el .html() se obtine el left pero desplazado a 632px(tamaño del componente tools-bar)
  // nota encontrar una mejor forma de tranformar esto.
  getHTML(){
   
    const  page = $( "#containment-wrapper" );
   let  element =$(page).find(".draggable");
    $(element).each(function(index:any,e:any) {
      let left = $(e).css("left");     
      let  leftsinpx= left.replace("px","");
      let leftnumber = parseInt(leftsinpx);
      let  recalcularX = leftnumber -632;
      $(e).css("left",recalcularX.toString()+"px");    
    })
    let html = $("#containment-wrapper").html();
  console.log(html);
  
    }
}
