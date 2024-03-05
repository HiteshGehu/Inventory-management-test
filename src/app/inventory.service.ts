import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  isAdmin: boolean;
  currentUserName: string;
  currentUserRole: string;
  inventory: Inventory[] = [
    {
      id: 1,
      name: 'French Tea Cup',
      description: 'Colorful set of two french tea cups',
      quantity: 2,
      price: 20.99,
    },
    {
      id: 2,
      name: 'Sphagetti',
      description: 'Breaking them offends italian',
      quantity: 4,
      price: 29.99,
    },
    {
      id: 3,
      name: 'Wick Pencil',
      description: 'Safest pencil for your child',
      quantity: 1,
      price: 9.99,
    },
  ];
  constructor() {}
  setRole(state: boolean) {
    if (state) localStorage.setItem('isManager', JSON.stringify(true));
    else localStorage.setItem('isManager', JSON.stringify(false));
  }
  getRole() {
    const storedValue = localStorage.getItem('isManager');
    return storedValue ? JSON.parse(storedValue) : null;
  }
  setUser(name: string, role: string) {
    this.currentUserName = name;
    this.currentUserRole = role;
    localStorage.setItem('currentUserName', name);
    localStorage.setItem('currentUserRole', role);
  }
  addInventoryItem(newItem: Inventory) {
    newItem.id = this.inventory.length + 1;
    this.inventory.push(newItem);
  }
  deleteInventoryItem(id: number) {
    this.inventory.splice(id, 1);
  }
  editInventoryItem(id: number, updatedItem: Inventory) {
    this.inventory[id] = updatedItem;
  }
}
