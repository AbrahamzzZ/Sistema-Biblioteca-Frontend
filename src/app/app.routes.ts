import { Routes } from '@angular/router';
import { AuthLayout } from './module/components/layouts/auth-layout/auth-layout';
import { Main } from './module/components/layouts/main-layout/main/main';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadChildren: () =>
                    import('./module/pages/auth/auth-module').then(
                        (m) => m.AuthModule
                    ),
            },
            {
                path: '**',
                redirectTo: 'login',
                pathMatch:'full'
            }
        ]
    },
    {
        path: 'home',
        component: Main,
        children: [
            {
                path: 'loan',
                loadChildren: () => 
                    import('./module/pages/book-loan/book-loan-module').then(
                        (m) => m.BookLoanModule
                    )
            },
            {
                path: 'client',
                loadChildren: () =>
                    import('./module/pages/user/user-module').then(
                        (m) => m.UserModule
                    )
            }
        ]
    },
    {
        path: '**',
        loadChildren: () =>
            import('./module/pages/page-not-found/page-not-found-module').then(
                (m) => m.PageNotFoundModule
            )
    }
];
