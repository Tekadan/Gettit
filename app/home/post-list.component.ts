import { Component, OnInit } from 'angular2/core';

import { IPost } from './post';
import { PostFilterPipe } from './post-filter.pipe';
import { PostService } from './post.service';

@Component({
    selector: 'gettit-postList',
    templateUrl: 'app/home/post-list.component.html',
    pipes: [PostFilterPipe]
})
export class PostListComponent implements OnInit {
    filterText: string;
    isFiltering: boolean = false;
    isRefreshing: boolean = false;
    pageTitle: string = 'Popular on Reddit';
    posts: IPost[];
    
    constructor(private _postService: PostService){

    }
    
    ngOnInit(): void {
        console.log('Initialization of PostListComponent');
        this.posts = this._postService.getTopPosts();
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