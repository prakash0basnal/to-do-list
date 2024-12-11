import { Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:ToDoListComponent},
    {path:'404',component:NotFoundComponent},
    {path:'**',redirectTo:'404',pathMatch:'full'}
];
