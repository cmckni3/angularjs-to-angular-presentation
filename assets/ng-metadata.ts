// main.js
angular.element(document).ready(function(){
  angular.bootstrap(document,['hero']);
});

// hero.js
angular.module('hero',[]);

// hero.service.js
angular.module('hero')
  .service('heroSvc', HeroService);

HeroService.$inject = ['$http'];
function HeroService($http){ this.$http = $http; }
HeroService.prototype.fetchAll = function(){
  return this.$http.get('/api/heroes');
}

// hero.component.js
angular.module('hero')
  .directive('hero',heroCmp);

function heroCmp(){
  return {
    scope: {},
    bindToController: {
      name: '=',
      onCall: '&'
    },
    controller: HeroController,
    controllerAs: '$ctrl',
    link: function(scope,element,attrs,ctrl){
      ctrl.init();
    },
    transclude: true,
    templateUrl: 'hero.html'
  };
}

HeroController.$inject = ['log','heroSvc'];
function HeroController($log, heroSvc){
  this.init = function(){ /* your init logic */ };
}

// main.ts
import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// app.module.ts
import { NgModule } from 'ng-metadata/core';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [AppComponent, HeroComponent],
  providers: [HeroService]
})
export class AppModule {}

// app.component.ts
import { Component } from 'ng-metadata/core';

@Component({
  selector: 'my-app',
  template: `<hero [name]="$ctrl.name" (call)="$ctrl.onCall($event)"></hero>`
})
export class AppComponent {
  name = 'Martin';
  onCall(){ /*...*/ }
}

// hero.service.ts
import { Injectable, Inject } from 'ng-metadata/core';

@Injectable()
export class HeroService {
  constructor(@Inject('$http') private $http: ng.IHttpService){}
  fetchAll(){
      return this.$http.get('/api/heroes');
  }
}

// hero.component.ts
import { Component, Inject, Input, Output, EventEmitter, OnInit } from 'ng-metadata/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero',
  moduleId: module.id,
  templateUrl: './hero.component.html',
  legacy:{ transclude: true }
})
export class HeroComponent implements OnInit {

  // one way binding determined by parent template
  @Input() name: string;
  @Output() call = new EventEmitter<void>();

  constructor(
    // we need to inject via @Inject because angular 1 doesn't give us proper types
    @Inject('$log') private $log: ng.ILogService,
    // here we are injecting by Type which is possible thanks to reflect-metadata and TypeScript and because our service
    // is defined as a class
    private heroSvc: HeroService
  ){}

  ngOnInit(){ /* your init logic */ }

}
