import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesingPageComponent } from './components/desing-page/desing-page.component';
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component';

import { BlanckPagesComponent } from './components/blanck-pages/blanck-pages.component';
import { SettingBarComponent } from './components/setting-bar/setting-bar.component';
import { MoveElementDirective } from './move-element.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesingPageComponent,
    ToolsBarComponent,
    SettingBarComponent,
    BlanckPagesComponent,
    MoveElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
