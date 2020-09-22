import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ControlplatGuard } from '../plats/controlplat.guard';
import { LoginPageModule } from '../form/login/login.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuModule)
          },
          {
            path:'restaurant/:id',
            loadChildren: ()=>
              import('../menu/details/details.module').then(m=>m.DetailsPageModule)
          }
        ]
      },
      {
        path:'login',
        loadChildren:()=>
          import('../form/login/login.module').then(m=>m.LoginPageModule)
      },
      {
        path:'register',
        loadChildren:()=>
          import('../form/register/register.module').then(m=>m.RegisterPageModule)
      },
      {
        path: 'plats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plats/plats.module').then(m => m.PlatsModule)
          },
          {
            path: 'add',
            canActivate:[ControlplatGuard],
            loadChildren: () =>
              import('../plats/addplat/addplat.module').then(m => m.AddplatPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () => import('../plats/modifier/modifier.module').then( m => m.ModifierPageModule)
          }
        ]
      },
      {
        path: 'compte',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../compte/compte.module').then(m => m.CompteModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
