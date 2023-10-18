import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { HomeComponent } from './pages/home/home.component';
import { LogComponent } from './pages/log/log.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BookComponent } from './pages/book/book.component';
import { GuideComponent } from './pages/guide/guide.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BookStatusCardComponent } from './components/book-status-card/book-status-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    TransactionComponent,
    HomeComponent,
    LogComponent,
    SettingsComponent,
    BookComponent,
    GuideComponent,
    NotFoundComponent,
    BookStatusCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
