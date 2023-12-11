import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitText from 'gsap/dist/SplitText';
import * as L from 'leaflet';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  private map: L.Map | undefined;
  constructor(private el: ElementRef) {
  }
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    console.log('GSAP Version:', gsap.version);
    console.log('ScrollTrigger:', gsap.registerPlugin(ScrollTrigger));
    this.scrollEffect();
    this.initMap();
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
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling,
      },
    });

    gsap.from('.fade-in_membership_heading', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.membership_container'),
        start: 'top 80%', // Adjust as needed,
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling
      },
    });

    gsap.from('.fade-in_membership_item', {
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.membership_container'),
        start: 'top 80%', // Adjust as needed,
        end: 'top 40%',
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

  private initMap(): void {
    const myIcon = L.icon({
      iconUrl: 'myIcon.png',
      // ...
    });
    // Create a map and set the initial view
    this.map = L.map('map').setView([28.517479098394748, 77.19832845577525], 25);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap',
    }).addTo(this.map);

    // Add a marker
    const marker = L.marker([28.517479098394748, 77.19832845577525]).addTo(this.map)
      .bindPopup('Mio Coworks')
      .openPopup();

    // Handle map click event
    this.map.on('click', (event: L.LeafletMouseEvent) => {
      // Redirect to Google Maps with the clicked coordinates
      const lat = event.latlng.lat;
      const lng = event.latlng.lng;
      this.redirectToGoogleMaps(lat, lng);
    });
  }

  private redirectToGoogleMaps(lat: number, lng: number): void {
    // Construct the Google Maps URL with the clicked coordinates
    const googleMapsUrl =
      'https://www.google.com/maps/place/Mio+Coworks/@28.5174985,77.198358,20z/data=!4m14!1m7!3m6!1s0x390ce18d9bffd5a7:0x1d047cd16cc6fe00!2sMio+Coworks!8m2!3d28.5174594!4d77.1983305!16s%2Fg%2F11vllzbb6h!3m5!1s0x390ce18d9bffd5a7:0x1d047cd16cc6fe00!8m2!3d28.5174594!4d77.1983305!16s%2Fg%2F11vllzbb6h?entry=ttu';

    // Open the URL in a new tab/window
    window.open(googleMapsUrl, '_blank');
  }
}
