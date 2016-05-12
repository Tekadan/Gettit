import { Component, OnInit } from 'angular2/core';

import { IPost } from './post';
import { PostFilterPipe } from './post-filter.pipe';
import { PostService } from './post.service';
import { ISession } from '../authentication/session';

@Component({
    selector: 'gettit-postList',
    templateUrl: 'app/home/post-list.component.html',
    pipes: [PostFilterPipe]
})
export class PostListComponent implements OnInit {
    errorMessage: string;
    filterText: string;
    isFiltering: boolean = false;
    isRefreshing: boolean = false;
    pageTitle: string = 'Popular on Reddit';
    posts: IPost[];
    session: ISession;
    
    constructor(private _postService: PostService, injectedSession: ISession){
        this.session = injectedSession;
    }
    
    ngOnInit(): void {
        console.log('Initialization of PostListComponent');
        this._postService.getTopPosts()
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error);
    }
    
    refreshPosts(): void {
        if(this.isRefreshing){
            return;
        }
     
        this.isRefreshing = true;
        console.log('Refreshing posts!');
        setTimeout(function(){
            console.log('Posts refreshed.');
            this.isRefreshing = false;
        }, 1000);
    };
}