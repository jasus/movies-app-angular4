import { Component, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

const slideLeft = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0 , transform: 'translate3d(0%,0,0)' }), {optional: true}),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }), {optional: true}),
  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional: true})
  ])
];

const slideRight = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0 , transform: 'translate3d(0%,0,0)'}), {optional: true}),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(100%,0,0)'}), {optional: true}),

  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(-100%,0,0)' })), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional: true})
  ])
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* => reset', slideRight),
      transition('* => next', slideRight),
      transition('* => back', slideLeft),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  private currentComponent: string;
  private isBack: boolean;
  private animation: string;

  constructor(private location: PlatformLocation, private router: Router) {

    this.currentComponent = '';
    this.isBack = false;
    this.animation = 'reset';

    this.location.onPopState(() => {

        console.log('pressed back!');
        this.animation = 'back';
        this.isBack = true;
    });

   }

  public routerAnimation(outlet) {
    if(outlet.activated && outlet.activatedRoute.component.name !== this.currentComponent){
      this.currentComponent = outlet.activatedRoute.component.name;
      if(!this.isBack){
        this.animation = 'next';
      }
      if(this.currentComponent === 'SearchComponent'){
        this.animation = 'back';
      }
    }
    console.log(this.animation);
    return this.animation;
  }

  public routerAnimationDone(){
    this.animation = 'reset';
  }


}
