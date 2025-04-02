import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'home',
        loadChildren: () => import('../app/feature/home/home.module').then(m => m.HomeModule)
    }
];
