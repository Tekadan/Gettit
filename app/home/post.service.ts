import { Injectable } from 'angular2/core';
import { IPost } from './post';

@Injectable()
export class PostService {
    getHotPosts(): IPost[]{
        return [
        {
            numVotes: 1401,
            title: 'Dog that knows he is a good boy',
            subreddit: 'Dogs',
            numComments: 255,
            url: "www.google.com"
        },
        {
            numVotes: 392,
            title: 'Left Shark at beach',
            subreddit: 'Farming',
            numComments: 111,
            url: "www.reddit.com"
        }
        ];
    }
    
    getNewPosts(): IPost[]{
        return [
        {
            numVotes: 989,
            title: 'If it fits I sit',
            subreddit: 'Cats',
            numComments: 212,
            url: "www.wikipedia.com"
        },
        {
            numVotes: 131,
            title: 'Mission Impossible: 28',
            subreddit: 'Movies',
            numComments: 63,
            url: "www.imdb.com"
        }
        ];
    }
    
    getRisingPosts(): IPost[]{
    return [
        {
            numVotes: 99,
            title: 'Alien or Potato?',
            subreddit: 'Paranormal',
            numComments: 845,
            url: "www.idaho.gov"
        }
        ];
    }
    
    getTopPosts(): IPost[]{
    return [
        {
            numVotes: 1401,
            title: 'Dog that knows he is a good boy',
            subreddit: 'Dogs',
            numComments: 255,
            url: "www.google.com"
        },
        {
            numVotes: 989,
            title: 'If it fits I sit',
            subreddit: 'Cats',
            numComments: 212,
            url: "www.wikipedia.com"
        },
        {
            numVotes: 392,
            title: 'Left Shark at beach',
            subreddit: 'Farming',
            numComments: 111,
            url: "www.reddit.com"
        }
        ];
    }
    
    getSearchPosts(): IPost[]{
        return [{
            numVotes: 45,
            title: 'Where\'s Waldo?',
            subreddit: 'Searching',
            numComments: 43,
            url: "www.yahoo.com"
        }]
    }
}