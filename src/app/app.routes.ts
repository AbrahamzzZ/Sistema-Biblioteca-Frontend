import { Routes } from '@angular/router';
import { AuthLayout } from './module/components/layouts/auth-layout/auth-layout';
import { Main } from './module/components/layouts/main-layout/main/main';
import { authGuard } from './core/guard/auth-guard';

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
        canActivate: [authGuard], 
        children: [
            {
                path: 'dashboard',
                loadChildren: () => 
                    import('./module/pages/home/home-module').then(
                        (m) => m.HomeModule
                    )
            },
            {
                path: 'client',
                loadChildren: () =>
                    import('./module/pages/user/user-module').then(
                        (m) => m.UserModule
                    )
            },
            {
                path: 'book',
                loadChildren: () =>
                    import('./module/pages/product/product-module').then(
                        (m) => m.ProductModule
                    )
            },
            {
                path: 'loan',
                loadChildren: () => 
                    import('./module/pages/book-loan/book-loan-module').then(
                        (m) => m.BookLoanModule
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
