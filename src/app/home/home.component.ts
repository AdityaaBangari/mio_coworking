import {Component, ElementRef, OnInit} from '@angular/core';
declare var $: any; // Declare jQuery to use it in Angular
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.scrollEffect();
  }

  scrollEffect() {
    gsap.from('.fade-in', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.intro-section_container'),
        start: 'top 80%', // Adjust as needed
        scrub: true // Set to true for a smoother effect during scrolling
      },
    });

    gsap.from('.fade-in_find_us1', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.find_us_container1'),
        start: 'top 80%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.fade-in_find_us_image', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.find_us_container2'),
        start: 'top 80%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.fade-in_find_us2', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.find_us_container1'),
        start: 'top 80%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });

    gsap.from('.fade-in_membership_heading', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.membership_container'),
        start: 'top 80%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });

    gsap.from('.fade-in_membership_item', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.membership_container'),
        start: 'top 80%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });

    gsap.from('.fade-in_our_approach_heading', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_heading_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.fade-in_our_approach_carousel_prev', {
      x: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_heading_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.fade-in_our_approach_carousel_next', {
      x: -100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_heading_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.fade-in_our_approach_item', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_carousel_item_container'),
        start: 'top 80%',
        end: 'top 30%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.our_standard_heading', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.our_standard_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
    gsap.from('.our_standard_item_heading', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.our_standard_item_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });
  }
}
