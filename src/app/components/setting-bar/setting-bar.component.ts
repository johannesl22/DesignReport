import { elementDOM } from 'src/app/model/elementDOM';
import { SettingsServiceService } from './../../settings-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-setting-bar',
  templateUrl: './setting-bar.component.html',
  styleUrls: ['./setting-bar.component.scss']
})
export class SettingBarComponent implements OnInit {
  element!:elementDOM;
  elementSelect="";
  fileCapture!:any;
  resizableActive=false;
  sizeText= 12;
  constructor(private setting:SettingsServiceService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.setting.changedelementToConfig.subscribe(NewElement=>{
      this.element=NewElement;
      this.elementSelect= NewElement.type;
    })
  }
  //borra elemento
  deleteDom(){
    $("#"+this.element.id).remove();
      this.element={id:"", class:"", type:"", value:""}
  }
  //subir imagen 
  captureFile(event:any)
  {
    this.fileCapture =event.target.files[0];
    this.extractBase64(this.fileCapture).then((img:any) =>{
       this.element.value=img.base;
     
    });
  }
  //extrae  base 64 para que se pueda usar la imagen
  extractBase64 = async ($event:any) => new Promise(resolve=>{
    try{
        const unsafeImg = window.URL.createObjectURL($event);
        const Img = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload=()=>{
          resolve({

            base:reader.result
          });
        };
        reader.onerror = error =>{
          resolve({
            base:null
          })
        }
    }catch(e){
      resolve(null)

    }
  })
// le coloca bordes 
  border(){
    $("#"+this.element.id).toggleClass("border1");
  }
  // lo expande el tamaño a tu necesidad 
  resizable(){
    if (!this.resizableActive)
    {
      $( "#"+this.element.id ).resizable();
      this.resizableActive=true;
    }
       
    else{
      $( "#"+this.element.id ).resizable( 'destroy');
      this.resizableActive=false;
    }
  }
  // coloca en negrita 
  bold(){
    $("#"+this.element.id).toggleClass("bold");

  }
// cambia el tamaño de la letra 
  sizeTextChange(operator:string){
  
   this.sizeText= Number($("#"+this.element.id).css("font-size").replace("px",""));
   console.log("sizeText",this.sizeText);
   
    switch (operator) {
      case "-":
        this.sizeText-=2;
        break;
      case "+":
        this.sizeText+=2;
        break;
    
       
    }
    $("#"+this.element.id).css("font-size",this.sizeText+"px");
  }
// justifica el texto 
  justifyText(){
    $("#"+this.element.id).toggleClass("justify");
  }
// cambiar el color de la letra 
  textColor(){}




}
