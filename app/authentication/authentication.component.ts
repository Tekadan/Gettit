import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';

import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'gettit-authentication',
    templateUrl: 'app/authentication/authentication.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
                AuthenticationService]
})
export class AuthenticationComponent {
    
    constructor(private _authenticationService: AuthenticationService){
        console.log("Loaded AuthenticationComponent");
    }
}