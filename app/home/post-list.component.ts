import { Component } from 'angular2/core';
import { IPost } from './post';

@Component({
    selector: 'gettit-postList',
    templateUrl: 'app/home/post-list.component.html'
})
export class PostListComponent{
    filterText: string = '';
    isFiltering: boolean = false;
    isRefreshing: boolean = false;
    pageTitle: string = 'Popular on Reddit';
    posts: IPost[] = [
        {
            numVotes: 1401,
            title: 'Dog that knows he is a good boy',
            tag: 'Dogs',
            numComments: 255,
            url: "www.google.com"
        },
        {
            numVotes: 392,
            title: 'Left Shark at beach',
            tag: 'Farming',
            numComments: 111,
            url: "www.reddit.com"
        }
    ];
    
    filterPosts(): void {
        
    };
    
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