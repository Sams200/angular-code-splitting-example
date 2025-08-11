import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamic-home',
  imports: [],
  templateUrl: './dynamic-home.html',
  styleUrl: './dynamic-home.css'
})
export class DynamicHome implements AfterViewInit {
  @ViewChild('homeContainer', { read: ViewContainerRef }) homeContainer!: ViewContainerRef;

  ngAfterViewInit() {
    /*
    ViewChild cannot be used in constructor or ngOnInit
     */
  }

  loadComponent() {
    /*
    Can Include API call Here
     */

    import("./dynamic-home-content/dynamic-home-content").then(c => {
        this.homeContainer.clear();
        this.homeContainer.createComponent(c.DynamicHomeContent);
      }
    )
  }
}
