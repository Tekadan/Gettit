import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { PostListComponent } from './home/post-list.component';
import { PostService } from './home/post.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRedirectComponent } from './authentication/authentication-redirect.component';

@Component({
    selector: 'gettit-app',
    template: `
    <h1>{{pageTitle}}</h1>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [PostListComponent,
                 AuthenticationComponent,
                 ROUTER_DIRECTIVES],
    providers: [PostService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: "/authenticate", name : "Authenicate", component: AuthenticationComponent, useAsDefault: true },
    { path: "/authenticate-redirect", name: "AuthenticateRedirect", component: AuthenticationRedirectComponent},
    { path: "/home/:session", name: "Home", component: PostListComponent }
])
export class AppComponent { 
    pageTitle: string = 'Gettit: An Angular 2 Project cosuming the Reddit API';
}
