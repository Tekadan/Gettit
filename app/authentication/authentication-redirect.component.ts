import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router, RouteParams } from 'angular2/router';

import { ISession } from '../authentication/session';

@Component({
    selector: 'gettit-authentication-redirect',
    templateUrl: 'app/authentication/authentication-redirect.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class AuthenticationRedirectComponent implements OnInit {
    private _session: ISession;
    
    constructor(private _router: Router, private _params: RouteParams){
        console.log("Loaded AuthenticationRedirectComponent.");
    }
    
    ngOnInit(): void {
        console.log("Succesfully redirected from Reddit.");
        this.setSessionData();
        this.redirectToHomePage();
    }
    
    setSessionData(): void {
        this._session.state = this._params.get('state');
        this._session.code = this._params.get('code');
    }
    
    redirectToHomePage(): void {
        console.log("Session Data: " + this._session);
                
        this._router.navigate(['Home', { session: this._session }]);
    }
}