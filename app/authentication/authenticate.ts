export interface IAuthenticate{
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
    refresh_token: string; // This value should never be populated, as we are not requesting this value. 
}