// upgrade-adapter.ts
// Angular 2 Vendor Import
import {UpgradeAdapter} from '@angular/upgrade';
import {NgModule, forwardRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Instantiate an adapter with the AppModule
// Use forwardRef to pass AppModule reference at runtime
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  declarations: [],
  providers: [],
  imports: [BrowserModule]
})
export class AppModule {
}

// Import the upgradeAdapter singleton
import {upgradeAdapter} from './upgrade-adapter';

// Name the application
const APPNAME = 'angular-upgrade-example';

// Register classic Angular 1 modules
angular.module(APPNAME, []);

// Bootstrap Angular 2 - *note* this is asynchronous
upgradeAdapter.bootstrap(document.body, [APPNAME], {strictDi: true});

// Angular 1 Vendor Import
import * as angular from 'angular';

// Import the upgradeAdapter singleton
import {upgradeAdapter} from './upgrade-adapter';

// Angular 2 component from above
import {A2DowngradeComponent} from './components/a2-downgrade';

// Register classic Angular 1 modules
angular
  .module(APPNAME)
  .directive('a2Downgrade',
    upgradeAdapter.downgradeNg2Component(A2DowngradeComponent));

// upgradable-component.js
angular.module('app').component('a1Upgradable', {
  controller: Upgradable,
  template: `<span>{{ a1Upgradable.message }}</span>`
});

class Upgradable {
  message = 'I am an Angular 1 Directive';
}
