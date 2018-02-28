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

//   transition('home => movie', slideRight),
    //   transition('movie => home', slideLeft),
    //   transition('search => movie', slideRight),
    //   transition('movie => search', slideLeft),
    //   transition('search => home', slideLeft),
        // state('right', style({})),
        // transition('* => right', slideRight),
        // state('back', style({})),
        // transition('* => back', slideLeft),

        // trigger('slideRight', [
        //   state(`next${new RegExp('[0-9]*')}`, style({})),
        //     transition('* => *', slideRight),
        // ]),
        // trigger('slideLeft', [
        //   state(`back${new RegExp('[0-9]*')}`, style({})),
        //     transition('* => *', slideLeft),
        // ])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideRight', [
      // state(`next${new RegExp('[0-9]*')}`, style({})),
      transition('* => *', slideRight),
    ]),
    trigger('slideLeft', [
      // state(`back${new RegExp('[0-9]*')}`, style({})),
      transition('* => *', slideLeft),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  private currentComponent: string;
  private currentComponentRight: string;
  private currentComponentLeft: string;
  private isBack: boolean;
  private animationRight: string;
  private animationLeft: string;
  private num: number;
  private numRight: number;
  private numLeft: number;
  private random: number;

  constructor(private location: PlatformLocation, private router: Router, private changeDetectorRef: ChangeDetectorRef) {

    this.currentComponent = '';
    this.currentComponentRight = '';
    this.currentComponentLeft = '';
    this.changeDetectorRef = changeDetectorRef;
    this.numRight = 0;
    this.numLeft = 0;
    this.random = Math.floor(Math.random() * 6) + 1;

    this.location.onPopState(() => {

        console.log('pressed back!');
        this.isBack = true;
    });

   }

  // getSlideRight(outlet) {
  //   if (outlet.activated && outlet.activatedRoute.component.name !== this.currentComponent) {
  //       this.currentComponent = outlet.activatedRoute.component.name;
  //       console.log(this.currentComponent);
  //       if (this.isBack) {
  //           this.isBack = false;
  //           this.animation = 'back';
  //       } else {
  //           this.animation = 'next';
  //       }
  //       this.num++;

  //       if (this.currentComponent === 'SearchComponent') {
  //           this.animation = 'back';
  //       }
  //   }

  //   // let animation = outlet.activatedRouteData.animation;
  //   console.log(this.animation);
  //   // console.log(this.router.navigations.value.source);
  //   return this.animation + this.num;
  // }

  getSlideRight(outlet) {
    if (outlet.activated && outlet.activatedRoute.component.name !== this.currentComponentRight) {
      this.currentComponentRight = outlet.activatedRoute.component.name;
      console.log(this.currentComponentRight);
      // if (this.isBack) {
      //     this.isBack = false;
      //     this.animation = 'back';
      // } else {
      //     this.animation = 'next';
      // }
      this.numRight++;

      if (this.currentComponentRight !== 'SearchComponent') {
          this.animationRight = 'next' + this.numRight;
      } else {
        this.animationRight = null;
      }
    }

    // let animation = outlet.activatedRouteData.animation;
    console.log(this.animationRight);
    // console.log(this.router.navigations.value.source);
    return this.animationRight; // + this.num;
  }

  getSlideLeft(outlet) {
    if (outlet.activated && outlet.activatedRoute.component.name !== this.currentComponentLeft) {
        this.currentComponentLeft = outlet.activatedRoute.component.name;
        console.log(this.currentComponentLeft);
        // if (this.isBack) {
        //     this.isBack = false;
        //     this.animation = 'back';
        // } else {
        //     this.animation = 'next';
        // }
        this.numLeft++;

        if (this.currentComponentLeft === 'SearchComponent') {
            this.animationLeft = 'back' + this.numLeft;
        } else {
          this.animationLeft = null;
        }
    }

    // let animation = outlet.activatedRouteData.animation;
    console.log(this.animationLeft);
    // console.log(this.router.navigations.value.source);
    return this.animationLeft; // + this.num;
  }

}
