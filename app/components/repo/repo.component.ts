import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'repo-component',
    templateUrl: 'app/components/repo/repo.component.html',
    styleUrls:['app/components/repo/repo.component.css'],
    providers: [RepoService]
})
export class RepoComponent implements OnInit{
    repos: any[];
    errorMessage: string;
    constructor(private repoService: RepoService){}
    loadRepos(): void {
        this.repoService.getUsers()
            .subscribe(repos => this.repos = repos, error => this.errorMessage = error);

    }
    private onFailurLoad(error): void {
        this.errorMessage = error;
        console.log(error);
    }
    private onSuccessLoad(repos): void {
        this.repos = repos;
        console.log(this.repos);
    }
    ngOnInit(){
        this.loadRepos();
    }
}