import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { Inventory } from '../../inventory.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrl: './inventory-add.component.css',
})
export class InventoryAddComponent {
  addConfirmation: boolean = false;
  newItem: Inventory;
  constructor(
    private route: Router,
    private inventoryService: InventoryService
  ) {}
  onAdd(form: NgForm) {
    this.newItem = {
      name: form.value.name,
      description: form.value.desc,
      quantity: form.value.quantity,
      price: form.value.price,
    };
    this.inventoryService.addInventoryItem(this.newItem);
    this.addConfirmation = true;
  }
  goBack() {
    this.route.navigate(['/home']);
  }
}
