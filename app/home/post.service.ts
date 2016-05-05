import { Injectable } from 'angular2/core';
import { IPost } from './post';
import { IAuthenticate } from '../authentication/authenticate';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    // Properties for HTTP Calls
    private _redditAPIBaseUrl: string = 'https://oauth.reddit.com/api/v1';
    private _redditHotUrl: string = '/r/hot';
    private _redditNewUrl: string = '/r/new';
    private _redditRandomUrl: string = '/r/random';
    private _redditTopUrl: string = '/r/top';
    
    // Properties for OAuth
    private _token: string;
    
    constructor(private _http: Http, token: string){
        this._token = token;
    }
    
    getHotPosts(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditHotUrl;
        
        return this._http.get(url, { headers: this.getHeaders()})
            .map((response: Response) => <IPost[]>response.json())
            .catch(this.handleError);
    }
    
    getNewPosts(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditNewUrl;
        
        return this._http.get(url, { headers: this.getHeaders()})
            .map((response: Response) => <IPost[]>response.json())
            .catch(this.handleError);;
    }
    
    getTopPosts(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditTopUrl;
        
        return this._http.get(url, { headers: this.getHeaders()})
            .map((response: Response) => <IPost[]>response.json())
            .catch(this.handleError);;
    }
    
    getRandomPost(): Observable<IPost[]>{
        var url = this._redditAPIBaseUrl + this._redditRandomUrl;
        
        return this._http.get(url, { headers: this.getHeaders()})
            .map((response: Response) => <IPost[]>response.json())
            .catch(this.handleError);
    }
    
    private getHeaders(): Headers {
        var headers = new Headers();
        headers.append('Authorization', 'bearer ' + this._token);
        
        return headers;
    }
    
    private handleError(error: Response){
        // This is where service layer exceptions will be managed.
        console.error(error);
        
        return Observable.throw(error.json().error || 'Server Error');
    }
}