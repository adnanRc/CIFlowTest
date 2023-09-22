import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      {
        path: 'products',
        loadChildren: () =>
          import('src/app/features/catalog/catalog.module').then(
            (m) => m.CatalogModule
          ),
        title: 'Home | GadgetGalaxy',
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/app/features/cart/cart.module').then((m) => m.CartModule),
        title: 'Cart | GadgetGalaxy',
      },
      {
        path: 'account',
        loadChildren: () =>
          import('src/app/features/account/account.module').then(
            (m) => m.AccountModule
          ),
        title: 'Account | GadgetGalaxy',
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import(
            'src/app/core/errors/pages/not-found-page/not-found-page.module'
          ).then((m) => m.NotFoundPageModule),
        title: 'Not Found | GadgetGalaxy',
      },
      {
        path: '**',
        loadChildren: () =>
          import(
            'src/app/core/errors/pages/not-found-page/not-found-page.module'
          ).then((m) => m.NotFoundPageModule),
        title: 'Not Found | GadgetGalaxy',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
