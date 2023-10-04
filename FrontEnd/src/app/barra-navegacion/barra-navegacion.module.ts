import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barra-navegacion.component';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports:[BarraNavegacionComponent],
  declarations: [BarraNavegacionComponent]
})
export class BarraNavegacionModule { }
