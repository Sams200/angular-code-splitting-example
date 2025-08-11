import { Component } from '@angular/core';
import {DynamicHome} from './dynamic-home/dynamic-home';

@Component({
  selector: 'app-home',
  imports: [
    DynamicHome
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
