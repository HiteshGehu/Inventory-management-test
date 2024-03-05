import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { Inventory } from '../../inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css',
})
export class InventoryListComponent {
  inventory: Inventory[] = [];
  isManager: boolean;
  deleteConfirmation: boolean = false;
  deleteId: number;
  constructor(
    private route: Router,
    private inventoryService: InventoryService
  ) {}
  ngOnInit(): void {
    this.isManager = this.inventoryService.getRole();
    console.log(this.isManager);
    this.inventory = this.inventoryService.inventory;
    console.log(this.inventory);
  }
  onDelete(i: number) {
    this.deleteConfirmation = true;
    this.deleteId = i;
  }
  onEdit(i: number) {
    this.route.navigate(['/inventory/edit', i]);
  }
  delete() {
    this.inventoryService.deleteInventoryItem(this.deleteId);
    this.deleteConfirmation = false;
  }
  cancel() {
    this.deleteConfirmation = false;
  }
}
