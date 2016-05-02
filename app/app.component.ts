import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import {PostListComponent} from './home/post-list.component';
import {PostService} from './home/post.service';

@Component({
    selector: 'gettit-app',
    template: `
    <h1>{{pageTitle}}</h1>
    <gettit-postList>Loading Posts...</gettit-postList>
    `,
    directives: [PostListComponent],
    providers: [PostService,
                HTTP_PROVIDERS]
})
export class AppComponent { 
    pageTitle: string = 'Gettit: An Angular 2 Project cosuming the Reddit API';
}
