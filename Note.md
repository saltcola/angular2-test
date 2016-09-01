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
###1.  [NgFor](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html)

###2.  [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
  The constructor method is a special method for creating and initializing an object created with a class.

##Step 3.  3-Way data binding
###1.  [mongoDB](https://docs.mongodb.com/?_ga=1.89267163.1171644026.1472217911)

###2.  [minimongo](https://atmospherejs.com/meteor/minimongo)

##Step 4.  Adding/removing objects and Angular event handling (Forms)
###1.  Component Architecture
  In Angular 2, we build a tree of components with the root __App__ component and child components stemming out of it down to the leaves.

###2.  [OnInit](https://angular.io/docs/ts/latest/api/core/index/OnInit-class.html)
   It brings the ngOnInit method. It initialize the directive/component after Angular initializes the data-bound input properties. Angular will find and call methods like ngOnInit(), with or without the interfaces. Nonetheless, we strongly recommend adding interfaces to TypeScript directive classes in order to benefit from strong typing and editor tooling.

###3.  [Model-Driven Forms](http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html) and ['@angular/forms'](https://angular.io/docs/ts/latest/guide/forms.html)
  1.  [disableDeprecatedForms]()
  Since there was a breaking change in forms syntax, we should disable the ability of use deprecated API. We can achieve this by using disableDeprecatedForms function.
  2.  [provideForms]()
  3.  [FormGroup]()
  4.  [FormControl]()
  5.  [formControlName]()
  6.  [REACTIVE_FORM_DIRECTIVES]()
  7.  [Validators](), [Validators.required]()

###4.  Event Handlers
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
###1. TypeScript
  TypeScript is a rather new language that has been growing in popularity since it's creation 3 years ago. TypeScript has one of the fullest implementations of ES2015 features on the market: including some experimental features, pseudo type-checking and a rich toolset developed by Microsoft and the TypeScript community. It has support already in all major IDEs including Visual Studio, WebStorm, Sublime, Atom, etc.

  One of the biggest issues in JavaScript is making code less bug-prone and more suitable for big projects. In the OOP world, well-known solutions include modularity and strict type-checking. While OOP is available in JavaScript in some way, it turned out to be very hard to create good type-checking. One always needs to impose a certain number of rules to follow to make a JavaScript compiler more effective. For many years, we’ve seen around a number of solutions including the Closure Compiler and GWT from Google, a bunch of C#-to-JavaScript compilers and others.

  This was, for sure, one of the problems the TypeScript team were striving to solve: to create a language that would inherit the flexibility of JavaScript while, at the same time, having effective and optional type-checking with minimum effort required from the user.

###2. Type Declaration Files
  As you may have noticed, Angular2-Meteor package itself installs a number of type declaration (.d.ts) files into the typings folder. These are files of a special kind where you describe the interfaces for your classes along with signatures of the methods and types of the parameters they take, so that TypeScript will be able to refer to these files to verify the correctness of your class's API. Of course, the flexibility is still there so if you don’t want to declare types you can skip them right away.

Keep in mind, type-checking is not delivered in the outputted JavaScript. It is only extra sugar for your development environment, and adds no weight to the outputted .js file.

Some of the typings files have names angular2.d.ts and meteor.d.ts, which, as you can guess, are used to verify that API of Meteor and Angular 2 are being used correctly in your code

But as you remember, we've mentioned so far only one declaration file angular2-meteor.d.ts and used it in the TypeScript config (on the first step), that's thanks to a special TypeScript syntax construction that can link together one declaration files with other declaration files as well as TypeScript files. If you look inside of angular2-meteor.d.ts you'll see Angular 2 and Meteor declaration files are linked there by:

```js
/// <reference path="../angular2/angular2.d.ts" />
/// <reference path="../meteor/meteor.d.ts" />
```

###3. Interfaces

TypeScript's type-checking bases on the "shapes" that types have. And interfaces are TypeScript's means to describe these type "shapes", which is sometimes called "duck typing". More on that you can read [here](http://www.typescriptlang.org/docs/handbook/interfaces.html).

##Step 8. User accounts, authentication and permissions

###1. Removing Insecure

###2. User Accounts
  1.  [Meteor accounts](https://www.meteor.com/accounts) `meteor add accounts-password`
  2.  [angular2-meteor-accounts-ui]() `meteor npm install --save angular2-meteor-accounts-ui`
  3.  [allow](http://docs.meteor.com/api/collections.html#Mongo-Collection-allow)
  4.  [Meteor.user()](http://docs.meteor.com/api/accounts.html#Meteor-user) and [Meteor.userId()](http://docs.meteor.com/?__hstc=219992390.628935fcb581e9e68b0a248f0a72d0a6.1471531140200.1472223168425.1472225055370.7&__hssc=219992390.2.1472225055370&__hsfp=3312583871#/full/meteor_users)

###3. Object.assign()
`Object.assign({}, this.addForm.value, { owner: Meteor.userId() })` Insert `{owner: Meteor.userId()}` to `this.addForm.value`.

###4. canActivate
CanActivate is a one of three guard types in the new router. It decides if a route can be activated.

  We created a new provider called `CanActivateForLoggedIn` that contains a boolean value with login state. As you can see we specified only the name of that provider inside canActive property.

  Guards can receive more than one provider.

###5.  InjectUser
If you place @InjectUser above the CarpoolsFormComponent it will inject a new user property:

###6. Routing Permissions

##Step 9.  Privacy and publish-subscribe functions

###1. [Meteor.publish](http://docs.meteor.com/#/full/meteor_publish)
###2. [Meteor.subscribe](http://docs.meteor.com/#/full/meteor_subscribe)
###3. [MeteorComponent]()
  MeteorComponent has two public methods: `subscribe` and `autorun`. If you inherit a component of this class and make use of these methods, you won't need to worry about cleanups: MeteorComponent will do them for you under the hood when it's needed.

  These methods also have a convenient boolean parameter called `autoBind`, which goes lastly. As its name suggests, we can tell subscribe to run the subscription callback in the change detection zone by setting the parameter to true.

###4.  Subscribe with Params
###5.  buildQuery and buildQuery.call(this) // `isAvailable.call(this)`

###6.  Search

##Step 10.   [Deploying your app](http://guide.meteor.com/deployment.html#deployment-options)

##Step 11.   [Running your app on Android or iOS with PhoneGap](http://www.angular-meteor.com/tutorials/socially/angular2/running-your-app-on-android-or-ios-with-phoneGap)

##Step 12.   Search, sort, pagination and reactive vars
###1.  Pagination
###2.  [Mongo Collection query options](http://docs.meteor.com/#/full/find)
###3.  Reactive variables
We'll need to re-subscribe with new options each time the page number changes. Thanks to Meteor, we can easily update subscriptions with the help of Meteor's reactive variables and MeteorComponent's reactive API. 
###4.  this.autorun
###5.  Pagination UI

As this paragraph name suggests, the next logical thing to do would be to implement a pagination UI, which consists of, at least, a list of page links at the bottom of every page, so that the user can switch pages by clicking on these links.

Creating a pagination component is not a trivial task and not one of the primary goals of this tutorial, so we are going to make use of an already existing package with Angular 2 pagination components. Run the following line to add this package:

`$ meteor npm install ng2-pagination --save`

This package's pagination mark-up follows the structure of the Bootstrap pagination component, so you can change its look simply by using proper CSS styles. It's worth noting, though, that this package has been created with the only this tutorial in mind. It misses a lot of features that would be quite useful in the real world, for example, custom templates.
Ng2-Pagination consists of three main parts:

-  pagination controls that render a list of links
-  a pagination service to manipulate logic programmatically
-  a pagination pipe component, which can be added in any component template, with the main goal to transform a list of items according to the current state of the pagination service and show current page of items on UI

###6.  PaginationService and PaginationControlsCmp
###7.  pageChange events
###8.  Generating Mock Data [anti:fake](https://atmospherejs.com/anti/fake)

###9.  [tmeasday:publish-counts](https://github.com/percolatestudio/publish-counts)

##Step 13. Using and creating AngularJS filters
###1.  $nin, $ne
Notice that we've made use of a special Mongo selector $nin, meaning "not in", to sift out users that have already been invited to this carpool so far. We used $ne to select ids that are "not equal" to the user's id.

###2.  Implementing Pipes
