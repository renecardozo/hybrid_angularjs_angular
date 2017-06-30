import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { AppComponent }  from './app.component';
import * as _angular_ from 'angular';

declare global {
  const angular: typeof _angular_;
}

@NgModule({
  imports:      [ BrowserModule,UpgradeModule ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
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
  );