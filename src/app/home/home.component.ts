import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: string;
  role: string;
  constructor(
    private route: Router,
    private inventoryService: InventoryService
  ) {
    this.name = localStorage.getItem('currentUserName');
    this.role = localStorage.getItem('currentUserRole');
  }
  ngOnInit(): void {
    // this.name = this.custService.currentUserName;
    // this.role = this.custService.currentUserRole;
  }
  onAdd() {
    this.route.navigate(['/inventory/add']);
  }
  logout() {
    this.route.navigate(['/login']);
  }
}
