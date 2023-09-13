import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//////////////////////////////////////////////////////////////
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[MatMenuModule,
           MatButtonModule,
           MatIconModule,
  ]
})
export class ModuloModule { }
