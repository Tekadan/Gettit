import {Component} from 'angular2/core';
import {PostListComponent} from './home/post-list.component';

@Component({
    selector: 'gettit-app',
    template: `
    <h1>{{pageTitle}}</h1>
    <gettit-postList>Loading Posts...</gettit-postList>
    `,
    directives: [PostListComponent]
})
export class AppComponent { 
    pageTitle: string = 'Gettit: An Angular 2 Project cosuming the Reddit API';
}
