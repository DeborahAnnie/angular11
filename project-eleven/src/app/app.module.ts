import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookComponent } from './book/book.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookformComponent } from './bookform/bookform.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './tab/tab.component';
import { NewComponent } from './news/new.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewComponent },
  { path: 'books', component: BookCatlogComponent },
  { path: 'addbook', component: BookformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BoxaComponent,
    CustomerFormComponent,
    HitButtonComponent,
    CounterAppComponent,
    EmployeeFormComponent,
    BookComponent,
    BookCatlogComponent,
    BookListComponent,
    BookformComponent,
    PriceDiscountPipe,
    HomeComponent,
    TabComponent,
    NewComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
