import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//////////////////////////////////////////////////////////////
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[MatMenuModule,
           MatButtonModule,
           MatIconModule,
           MatBadgeModule,
  ]
})
export class ModuloModule { }
