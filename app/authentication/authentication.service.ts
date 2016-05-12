import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
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
    private _redirectUri: string = 'http://localhost:' + this._localHostPort + '/authentication-redirect';
    private _duration: string = 'temporary';
    private _scope = 'read'; 
    
    constructor(private _http: Http){
        
    }
    
    authorizeApp(): void {
        this.authenticateUser();
    }
    
    private authenticateUser(): void {
        var authURL = this.createAuthURL();
        
        console.log("Redirecting Application to: '" + authURL + "'");
        window.location.href = this.createAuthURL();
    }
    
    private createAuthURL(): string {
        var postBody = { "client_id": this._clientId,
                         "response_type": this._responseType,
                         "state": this._state,
                         "redirect_uri": this._redirectUri,
                         "duration": this._duration,
                         "scope": this._scope
                        };
        return this._accessTokenUrl + this.objectToUrlEncoding(postBody);
    }
    
    private objectToUrlEncoding(object: Object): string {
        var str = '';
        for(var key in object){
            if(str != ''){
                str += "&";
            }
            str += key + "=" + encodeURIComponent(object[key]);
        }
        
        return str;
    }
    
    private getHeaders(): Headers {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', this._accessTokenUrl);
        
        return headers;
    }
    
    private handleError(error: Response){
        // This is where service layer exceptions will be managed.
        console.error(error);
        
        return Observable.throw(error.json().error || 'Server Error');
    }
}

//https://ssl.reddit.com/api/v1/authorize?client_id=m3lFlzf9HC1VFg&response_type=code&state=1463055045605&redirect_uri=localhost%3A3000%2FAuthenticationRedirect&duration=temporary&scope=read