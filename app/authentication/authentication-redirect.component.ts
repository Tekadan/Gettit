import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';

import { ISession } from '../home/session';

@Component({
    selector: 'gettit-authentication-redirect',
    templateUrl: 'app/authentication/authentication-redirect.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class AuthenticationRedirectComponent {
    
    constructor(private _router: Router){
        
    }
    
    redirectToHomePage(session: ISession): void {
        // Get the session from the JSON body of this call
        // Call the method below once we have confirmed the successful token authentication of the user
        
        this._router.navigate(['Home', { session: session }]);
    }
}