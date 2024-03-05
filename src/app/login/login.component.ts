import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private route: Router,
    private inventoryService: InventoryService
  ) {}
  onSubmit(form: NgForm) {
    if (
      form.value.name === 'hitesh' &&
      form.value.password === 'hitesh' &&
      form.value.role === 'Manager'
    ) {
      this.inventoryService.setRole(true);
    } else {
      this.inventoryService.setRole(false);
    }
    if (form.value.role === 'Manager' && !this.inventoryService.getRole()) {
      alert('Enter correct admin credentials');
      return;
    }
    this.inventoryService.setUser(form.value.name, form.value.role);
    this.route.navigate(['/home']);
  }
}
