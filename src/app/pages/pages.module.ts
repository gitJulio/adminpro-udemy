import { NgModule } from '@angular/core';
import {pagesRoutesModules} from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports:[
    SharedModule,
    pagesRoutesModules

  ]
})

export class pagesModule{}
