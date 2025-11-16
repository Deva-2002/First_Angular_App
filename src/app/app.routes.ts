import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'todo',
    loadComponent:()=> {
        return import('./todo/todo').then((m)=>m.Todo);
    },
}];
