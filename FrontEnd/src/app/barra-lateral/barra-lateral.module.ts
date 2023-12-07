import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule 
  ],
  exports:[BarraLateralComponent],
  declarations: [BarraLateralComponent]
})
export class BarraLateralModule { }
