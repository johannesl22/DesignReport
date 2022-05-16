import { elementDOM } from 'src/app/model/elementDOM';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsServiceService {
elementToConfig!:elementDOM;
changedelementToConfig = new Subject<elementDOM>();
changedelementToConfig$ = this.changedelementToConfig.asObservable();
  constructor() { }
// su funcion es tranportar la informacion del elemento seleccionado 
selectElement(element:elementDOM){
this.elementToConfig=element;
this.changedelementToConfig.next(this.elementToConfig);

}
}
