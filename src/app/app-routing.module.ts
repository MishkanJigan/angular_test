import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SecondChildComponent } from './components/second-child/second-child.component';

const routes: Routes = [
  {path: 'child' , component: ChildComponent},
  {path: 'second-child' , component: SecondChildComponent},
  {path: '**' , component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
