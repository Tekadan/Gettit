import { Injectable } from 'angular2/core';
import { IPost } from './post';
import { IAuthenticate } from '../authentication/authenticate';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    // Properties for HTTP Calls
    private _redditAPIBaseUrl: string = 'https://www.reddit.com/dev/api';
    private _redditHotUrl: string = '/r/hot';
    private _redditNewUrl: string = '/r/new';
    private _redditRandomUrl: string = '/r/random';
    private _redditTopUrl: string = '/r/top';
    
    // Properties for OAuth
    private _accessTokenUrl: string = 'https://www.reddit.com/api/v1/access_token';
    private _authorizationHeader: string = 'HTTP Basic Auth';
    private _clientId: string = 'm3lFlzf9HC1VFg';
    private _grantType: string = 'authorization_code';
    private _localHostPort: number = 3000;
    private _responseType: string = 'code';
    private _state: string = Date.now().toString();
    private _redirectUri: string = 'http://localhost:' + this._localHostPort;
    private _duration: string = 'temporary';
    private _scope = 'read'; 
    
    constructor(private _http: Http){
        
    }
    
    authorizeApp(): void {
        var url = 'https://www.reddit.com/api/v1/authorize?client_id=' + 
                       this._clientId + '&response_type=' + this._responseType +
                       '&state=' + this._state + '&redirect_uri=' + this._redirectUri + 
                       '&duration=' + this._duration + '&scope=' + this._scope;
                       
        // Post to this URL, get the 'code' to retrieve the token
        
        var result = this.retrieveToken(this._state);
    }
    
    retrieveToken(_code: string): boolean {
        var jsonBody = 'grant_type=' + this._grantType + 
                            '&code=' + _code + 
                            '&redirect_uri=' + this._redirectUri; 
                            
        var postResponse = this._http.post(this._accessTokenUrl, jsonBody)
                    .map((response: Response) => <IAuthenticate[]>response.json());
                    
        console.log(postResponse);
                    
        // Check out to make sure the call worked
        return true;
    }
    
    getHotPosts(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditHotUrl;
        
        return this._http.get(url)
            .map((response: Response) => <IPost[]>response.json());
    }
    
    getNewPosts(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditNewUrl;
        
        return this._http.get(url)
            .map((response: Response) => <IPost[]>response.json());
    }
    
    getTopPosts(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditTopUrl;
        
        return this._http.get(url)
            .map((response: Response) => <IPost[]>response.json());
    }
    
    getRandomPost(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditRandomUrl;
        
        return this._http.get(url)
            .map((response: Response) => <IPost[]>response.json());
    }
}