import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AgregarComponent } from './utl/agregar/agregar.component';

const routes: Routes = [
    {path:'',redirectTo:'/home', pathMatch:'full'},
    // {path:'home', component: HomeComponet},
    { path: 'Agregar', component: AgregarComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
