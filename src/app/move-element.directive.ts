import { Directive, OnChanges, SimpleChanges } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appMoveElement]'
})
export class MoveElementDirective implements OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.activeDragable();
  }
  ngAfterViewInit(): void {
    this.activeDragable();
}
  activeDragable(){
    $( function() {
      const  page = $( ".draggable" );
  
      $(page).each(function(index:any,e:any) {
       $( "#"+e.id).draggable({ containment: "#containment-wrapper", scroll: false , grid: [ 20, 20 ]});
      
 
     })
 
     } );

  }
}
