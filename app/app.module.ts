import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { AppComponent }  from './app.component';
import { RepoComponent } from './components/repo/repo.component';
import * as _angular_ from 'angular';

declare global {
  const angular: typeof _angular_;
}

@NgModule({
  imports:      [ 
    BrowserModule,
    UpgradeModule,
    HttpModule 
  ],
  declarations: [
    AppComponent,
    RepoComponent
  ],
  entryComponents: [
    AppComponent,
    RepoComponent
  ]
})

export class AppModule { 
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}

/*
 * Downgrading component 
 */
angular.module('myApp')
  .directive(
    'appComponent',
    downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
  )
  .directive(
    'repoComponent',
    downgradeComponent({component: RepoComponent}) as angular.IDirectiveFactory
  );
  