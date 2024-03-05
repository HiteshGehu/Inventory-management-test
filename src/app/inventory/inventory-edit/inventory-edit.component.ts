import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { NgForm } from '@angular/forms';
import { Inventory } from '../../inventory.model';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrl: './inventory-edit.component.css',
})
export class InventoryEditComponent {
  index: number;
  editConfirmation: boolean = false;
  editedItem: Inventory;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private InventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });
  }
  onEdit(form: NgForm) {
    this.editedItem = {
      name: form.value.name,
      description: form.value.desc,
      quantity: form.value.quantity,
      price: form.value.price,
    };
    this.InventoryService.editInventoryItem(this.index, this.editedItem);
    this.editConfirmation = true;
  }
  goBack() {
    this.route.navigate(['/home']);
  }
}
