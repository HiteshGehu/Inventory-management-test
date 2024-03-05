import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: InventoryListComponent },
  { path: 'inventory/edit/:id', component: InventoryEditComponent },
  { path: 'inventory/add', component: InventoryAddComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
