import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './modules/shared/services/auth.guard';
import {LoginGuard} from './modules/shared/services/login.guard';
import {AdminGuard} from './modules/shared/services/admin.guard';

// MAIN ROUTING OBJECT TO ROUTE TO DIFFERENT MODULE
const appRoutes: Routes =
  [
    {
      path: 'login',
      canActivate: [LoginGuard],
      loadChildren: './modules/admin/authenticate/login/login.module#LoginModule'
    },
    {
      path: 'logout',
      loadChildren: './modules/admin/authenticate/logout/logout.module#LogoutModule'
    },
    {
      path: '',
      loadChildren: './modules/search/searchmain/searchmain.module#SearchMainModule'
    },
    {
      path: 'register',
      canActivate: [LoginGuard],
      loadChildren: './modules/admin/authenticate/register/register.module#RegisterModule'
    },
    {
      path: 'forgot',
      canActivate: [LoginGuard],
      loadChildren: './modules/admin/authenticate/forgot/forgot.module#ForgotModule'
    },
    {
      path: 'reset',
      loadChildren: './modules/admin/authenticate/change/change.module#ChangeModule'
    },
    {
      path: 'admin',
      canActivate: [AdminGuard],
      loadChildren: './modules/admin/adminportal/adminportal.module#AdminportalModule'
    },
    {
      path: ':id',
      loadChildren: './modules/search/searchdetails/searchdetails.module#SearchDetailsModule'
    },
    // OTHERWISE REDIRECT TO HOME
    {
      path: '**',
      canActivate: [AuthGuard],
      loadChildren: './modules/search/searchdetails/searchdetails.module#SearchDetailsModule'
    }
  ];

// EXPORTING ROUTING OBJECT TO APP MODULE
export const routing = RouterModule.forRoot (appRoutes);
