import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { ModulesComponent } from './modules.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';




@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    ModulesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule
  ]
})
export class ModulesModule { }
