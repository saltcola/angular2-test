# Notes For Building Project PickMeUp

[TOC]

##Step 1. Bootstrapping
###1.  [Meteor](https://www.meteor.com) :
  Meteor is an open source platform for web, mobile, and desktop. If you use mac, you can use `$ curl https://install.meteor.com/ | sh` to install.

###2.  [Angular2-boilerplate](https://github.com/bsliran/angular2-meteor-base):
  This template helps us to build the base of application by using meteor and angular2 and other tools like __Typescript__. Also this base template has a package.json that includes all the dependencies for `$ meteor npm install`.

###3.  [npm](https://www.npmjs.com) :
Npm stands for Node Packages Manager, which manages your dependencies and external packages. 

Meteor supports NPM packages (starting from 1.3), and when we created our project - a file named package.json was created - this file contains the project's npm dependencies and some other metadata.  

To install the current project dependencies, type in the command line `npm install`.

We also used Meteor packages `meteor add ...`. Meteor packages have some abilities that npm packages don't have yet so we will use some packages from there as well.

###4.  [ES6](https://github.com/lukehoban/es6features) Modules and [CommonJS](http://requirejs.org/docs/commonjs.html):

Meteor supports [ES6 modules](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import) out of the box.

This feature provides the ability to use import / export statements and gives you a full control for modules loading and dependencies.

You can read more about how modules work and how it's based on CommonJS [on the Meteor docs](http://docs.meteor.com/packages/modules.html).

###5.  [Component](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html) (from '@angular/core')
###6.  [angular2-meteor-auto-bootstrap](https://www.npmjs.com/package/angular2-meteor-auto-bootstrap):
   This package handle the automatic bootstrap for Angular2-Meteor applications.

##Step 2.  Dynamic Template
###[NgFor](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html)

###[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
  The constructor method is a special method for creating and initializing an object created with a class.

##Step 3.  3-Way data binding
###[mongoDB](https://docs.mongodb.com/?_ga=1.89267163.1171644026.1472217911)

###[minimongo](https://atmospherejs.com/meteor/minimongo)

##Step 4.  Adding/removing objects and Angular event handling (Forms)
###Component Architecture
  In Angular 2, we build a tree of components with the root __App__ component and child components stemming out of it down to the leaves.

###[OnInit](https://angular.io/docs/ts/latest/api/core/index/OnInit-class.html)
   It brings the ngOnInit method. It initialize the directive/component after Angular initializes the data-bound input properties. Angular will find and call methods like ngOnInit(), with or without the interfaces. Nonetheless, we strongly recommend adding interfaces to TypeScript directive classes in order to benefit from strong typing and editor tooling.

###[Model-Driven Forms](http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html) and ['@angular/forms'](https://angular.io/docs/ts/latest/guide/forms.html)
  1.  [disableDeprecatedForms]()
  Since there was a breaking change in forms syntax, we should disable the ability of use deprecated API. We can achieve this by using disableDeprecatedForms function.
  2.  [provideForms]()
  3.  [FormGroup]()
  4.  [FormControl]()
  5.  [formControlName]()
  6.  [REACTIVE_FORM_DIRECTIVES]()
  7.  [Validators](), [Validators.required]()

###Event Handlers
  1.  ngSubmit
  2.  click

##Step 5.  Routing & Multiple Views (['@angular/router'](https://angular.io/docs/ts/latest/guide/router.html))
###1.  RouterConfig
  We need to create an array of route definitions. The RouterConfig interface comes with help. This way we can be sure that properties of that object are correctly used.
###2.  provideRouter
###3.  ROUTER_DIRECTIVES
###4.  routerLink
###5.  ActivatedRoute
###6.  [Dependency Injection](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html)
###7.  [Class MetaData](http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html)
###8.  [Tracker.autorun](http://docs.meteor.com/api/tracker.html#Tracker-autorun)
###9.  [NgZone](https://angular.io/docs/js/latest/api/core/index/NgZone-class.html)

##Step 6.  Bind one object
###1.  Two-Way Data Binding
  1.  *ngIf
  2.  ngModel
  ngModel binds a HTML form to the component's model, which can be an object of any type, in comparison to the Model-Driven binding where the FormGroup instance is used.

    The syntax looks a bit different, using both square and rounded brackets: ` [(ngModel)]="carpool.Time"`. ngModel binds to the party properties and fills out the inputs, and vice versa.

##Step 7. Folder structure



