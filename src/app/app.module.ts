import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DeleteAlertComponent,
    InventoryAddComponent,
    InventoryListComponent,
    InventoryEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
