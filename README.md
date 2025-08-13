## Dynamic Code Splitting In Angular

Dynamically load only the required code. This helps improve performance and maintain security

in *src/app/app.routes.ts*

    {  
      path: 'admin',  
      loadComponent: () => import('./admin/admin').then(c => c.Admin),  
      canActivate: [hasRoleGuard],  
      data: {  
        roles: [Role.ADMIN]  
      }  
    },

Use a role guard to only allow authorized users to access the route. If an unauthorized user tries to access the route, they will be handled according to the role guard, and the code for the admin page will not be loaded.

The app will automatically create an *app_role* item in the browser's local storage. The guard will work based on its value: **"user"** or **"admin"**.

Try accessing the *admin* page, then search in the project files
- If you can find **@@UNAUTHORIEZED** then the *unauthorized* page is loaded
- If you can find **@@ADMIN** then the *admin* page is loaded

We can also load components without necessarily using routes. By using a *ViewContainerRef* and *ng-template* we can load components at runtime

in *src/app/home/dynamic-home/dynamic-home.ts*

    export class DynamicHome implements AfterViewInit {  
      @ViewChild('homeContainer', { read: ViewContainerRef }) homeContainer!: ViewContainerRef;  
      
      ngAfterViewInit() {  
        // ViewChild cannot be used in constructor or ngOnInit 
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

And then use *ng-template* in our html

    <button (click)="loadComponent()">Load Dynamic Home Component</button>  
    <ng-template #homeContainer></ng-template>

You should now be able to find **@@DYN_HOME_COMPONENT** in the project files
