import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { FormsComponent } from './forms/forms.component';
import { IplstatsComponent } from './iplstats/iplstats.component';

const routes: Routes = [
    {
      path:'basics',
      component: BasicsComponent
    },
    {
      path:'forms',
      component: FormsComponent
    },
    {
      path:'iplstats',
      component: IplstatsComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
