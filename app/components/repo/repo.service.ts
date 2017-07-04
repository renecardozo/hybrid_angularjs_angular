import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export class User{
    login:string;
    avatarUrl:string;
    urlRepo:string;
    typeUser:string;
    isAdmin: boolean;
}

@Injectable()
export class RepoService{
    repoUrl: string;
    constructor(private http: Http){
        this.repoUrl = 'https://api.github.com/users';
    }
    getUsers(): Observable<Response[]>{
        return this.http.get(this.repoUrl)
                        .map(this.onSuccessResponse)
                        .catch(this.onFailurResponse);
    }
    
    private onSuccessResponse(response: Response){
        return response.json();
    }
    private onFailurResponse(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}