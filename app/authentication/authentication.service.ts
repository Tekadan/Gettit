import { Injectable } from 'angular2/core';
import { IAuthenticate } from '../authentication/authenticate';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
    private _errorMessage: string;
    private _token: any;
    
    // Properties for OAuth
    private _accessTokenUrl: string = 'https://ssl.reddit.com/api/v1/authorize?';
    private _appName: string = 'Gettit: An Angular 2 App that consumes the Reddit API'
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
        this.authenticateUser()
            .subscribe(
                token => this._token = token,
                error => this._errorMessage = <any>error
            );
    }
    
    private authenticateUser(): Observable<string> {
        var postBody = this.createAuthPostBody();
        
        return this._http.post(this._accessTokenUrl, postBody)
            .map((response: Response) => <string>response.json())
            .catch(this.handleError);
    }
    
    private createAuthPostBody(): string {
        var postBody = { "client_id": this._clientId,
                         "response_type": this._responseType,
                         "state": this._state,
                         "redirect_uri": this._redirectUri,
                         "duration": this._duration,
                         "scope": this._scope
                        };
        return this.objectToUrlEncoding(postBody);
    }
    
    private objectToUrlEncoding(object: Object): string {
        var str = '';
        for(var key in object){
            if(str != ''){
                str += "&";
            }
            str += key + "=" + encodeURIComponent(object[key]);
        }
        
        console.log("Post Body to Url Encoding: " + str);
        return str;
    }
    
    private handleError(error: Response){
        // This is where service layer exceptions will be managed.
        console.error(error);
        
        return Observable.throw(error.json().error || 'Server Error');
    }
}