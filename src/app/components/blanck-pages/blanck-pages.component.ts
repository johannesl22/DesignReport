import { SettingsServiceService } from './../../settings-service.service';
import { MoveElementDirective } from './../../move-element.directive';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DragAndDropService } from 'src/app/drag-and-drop.service';
import { elementDOM } from 'src/app/model/elementDOM';
declare var $: any;

@Component({
  selector: 'app-blanck-pages',
  templateUrl: './blanck-pages.component.html',
  styleUrls: ['./blanck-pages.component.scss'],
})
export class BlanckPagesComponent implements OnInit {
  elementList:elementDOM[]=[];
  lastElement!:elementDOM;
  count =1;
  @Output() elementToConfig= new EventEmitter();
  constructor(private dragService: DragAndDropService,private settings:SettingsServiceService) {}
// se mantiene esperando cualquier cambio de la lista de elementos 
  ngOnInit(): void {
    this.settings.changedelementToConfig.subscribe(changeElement=>{
      const elementIndex = this.elementList.findIndex(e => e.id==changeElement.id);
      if (elementIndex!=-1)
        this.elementList[elementIndex]=changeElement;
    })
  }
  // se activa cuando un elemento es soltado en la hoja en blanco,
  dragDrop(ev: any) {
    // el elemento seleccionado
    const dropElement = this.dragService.dragElement;
    // inserta el elemento en la lista de elemento que tiene la pagina en blanco.
    this.elementList.push(dropElement)
    // se le añade la funcionabilidad de draggable de jquery individualmente a cada alemento 
    this.activeDragable(dropElement.id);
    this.count ++
  }
  dragOver(ev: any) {
    ev.preventDefault();
  }
// activa la funcionabilidad de dragable con jquery(solo dentro de la hoja A4)
  activeDragable(id: string,) {
    var i =this.count.toString()
   
    $(function () {
      $( "#"+id).draggable({ containment: "#containment-wrapper", scroll: false , grid: [ 1, 1 ]});
      $("#"+id).css("z-index",i);

    });

  }
  //se activa al hacer click en cualquier elemento, se añade el estilo de select y enviar la informacion del elemento al componente setting  
  select(element:elementDOM){
    if (this.lastElement &&   element.id!=this.lastElement.id)
       $("#"+this.lastElement.id).removeClass("select");
    $("#"+element.id).addClass("select");
    this.settings.selectElement(element);
    this.lastElement=element;
  }
  // remueve el estilo de select 
  deselect (){
    if (this.lastElement )
       $("#"+this.lastElement.id).removeClass("select");
  }

}
