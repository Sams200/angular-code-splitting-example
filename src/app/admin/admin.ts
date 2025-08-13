import { Component } from '@angular/core';
import {AdminNested} from './admin-nested/admin-nested';

@Component({
  selector: 'app-admin',
  imports: [
    AdminNested
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
