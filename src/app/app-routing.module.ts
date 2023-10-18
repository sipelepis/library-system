import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { HomeComponent } from './pages/home/home.component';
import { LogComponent } from './pages/log/log.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BookComponent } from './pages/book/book.component';
import { GuideComponent } from './pages/guide/guide.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'logs', component: LogComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'book', component: BookComponent },
  { path: 'help', component: GuideComponent },

  // redirects
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
