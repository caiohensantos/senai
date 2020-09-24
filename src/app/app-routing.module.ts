import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescontoComponent } from './desconto/desconto.component';
import { DolarComponent } from './dolar/dolar.component';
import { HomeComponent } from './home/home.component';
import { IdadeComponent } from './idade/idade.component';
import { ImcComponent } from './imc/imc.component';
import { MenuComponent } from './menu/menu.component';
import { SemanaComponent } from './semana/semana.component';

const routes: Routes = [
{path:"menu",component:MenuComponent},
{path:"home",component:HomeComponent},
{path:"dolar",component:DolarComponent},
{path:"desconto",component:DescontoComponent},
{path:"idade",component:IdadeComponent},
{path:"imc",component:ImcComponent},
{path:"semana",component:SemanaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
