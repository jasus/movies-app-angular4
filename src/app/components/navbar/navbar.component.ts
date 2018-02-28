import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  public goToSearch() {
    this.router.navigate(['/search']);
  }

  public goToHome() {
    // this.location.back();
    this.router.navigate(['/home']);
  }

  public goToMovie() {
    // this.location.back();
    this.router.navigate(['/movie']);
  }

}
