import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import SplitType from 'split-type';
// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {PageScrollService } from 'ngx-page-scroll-core';
declare var gsap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer: any;
  private map: L.Map | undefined;
  showCredit = false;
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    console.log('Website made with passion by Aditya Bangari');
    this.onLandingAnimation();
    this.startVideo();
    this.scrollEffect();
    this.initMap();
    // this.playVideo();
  }

  scrollEffect() {
    gsap.from('.fade-in', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.intro-section_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1,
    });
    gsap.from('.intro_section_imageright', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.intro-section_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      x: 100, // Initial position below the viewport
      // opacity: 0,
      duration: 1,
    });
    gsap.from('.intro_section_imageleft', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.intro-section_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      x: -100, // Initial position below the viewport
      // opacity: 0,
      duration: 1,
    });

    gsap.from('.fade-in_find_us1', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.find_us_container1'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling,
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });

    gsap.from('.fade-in_membership_heading', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.membership_container'),
        start: 'top 80%', // Adjust as needed,
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });

    gsap.from('.fade-in_membership_item', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.membership_container'),
        start: 'top 80%', // Adjust as needed,
        end: 'top 40%',
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });

    gsap.from('.fade-in_our_approach_heading', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_heading_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });
    gsap.from('.fade-in_our_approach_carousel_prev', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_heading_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      x: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });
    gsap.from('.fade-in_our_approach_carousel_next', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_heading_container'),
        start: 'top 80%', // Adjust as needed
        end: 'top 40%', // Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      x: -100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });
    gsap.from('.fade-in_our_approach_item', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.approach_carousel_item_container'),
        start: 'top 80%',
        end: 'top 30%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });
    gsap.from('.our_standard_heading', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.our_standard_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });
    gsap.from('.our_standard_imageleft', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.our_standard_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      x: -100, // Initial position below the viewport
      // opacity: 0,
      duration: 1
    });
    gsap.from('.our_standard_imageright', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.our_standard_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      x: 100, // Initial position below the viewport
      // opacity: 0,
      duration: 1
    });
    gsap.from('.our_standard_item_heading', {
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.our_standard_item_container'),
        start: 'top 80%',
        end: 'top 40%', // Adjust as needed// Adjust as needed
        scrub: true, // Set to true for a smoother effect during scrolling
      },
      y: 100, // Initial position below the viewport
      opacity: 0,
      duration: 1
    });
  }

  initMap(): void {
    const markerIcon = L.icon({
      iconUrl: '/assets/images/marker-icon-2x.png',
      iconSize: [25, 41], // Adjust the size based on your icon
      iconAnchor: [12, 41], // Adjust the anchor point based on your icon
      popupAnchor: [1, -34], // Adjust the popup anchor point based on your icon
      // Other options...
    });

    // Create a map and set the initial view
    this.map = L.map('map').setView([28.517479098394748, 77.19832845577525], 25);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap',
    }).addTo(this.map);

    // Add a marker with the custom icon
    const marker = L.marker([28.517479098394748, 77.19832845577525], { icon: markerIcon }).addTo(this.map)
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

  redirectToGoogleMaps(lat: number, lng: number): void {
    // Construct the Google Maps URL with the clicked coordinates
    const googleMapsUrl =
      'https://www.google.com/maps/place/Mio+Coworks/@28.5174985,77.198358,20z/data=!4m14!1m7!3m6!1s0x390ce18d9bffd5a7:0x1d047cd16cc6fe00!2sMio+Coworks!8m2!3d28.5174594!4d77.1983305!16s%2Fg%2F11vllzbb6h!3m5!1s0x390ce18d9bffd5a7:0x1d047cd16cc6fe00!8m2!3d28.5174594!4d77.1983305!16s%2Fg%2F11vllzbb6h?entry=ttu';

    // Open the URL in a new tab/window
    window.open(googleMapsUrl, '_blank');
  }

  scrollToAboutUs() {
    gsap.to(window, {
      duration: 1,
      scrollTo: {y: "#introsection", offsetY: 50}, // Adjust offsetY as needed
    });
  }

  scrollToFooter() {
    gsap.to(window, {
      duration: 1,
      scrollTo: {y: "#footer", offsetY: 50}, // Adjust offsetY as needed
    });
  }

  onLandingAnimation() {
    const mio = this.el.nativeElement.querySelectorAll('.title');
    const mio_sub = this.el.nativeElement.querySelectorAll('.title_2');
    const timeline = gsap.timeline();
    timeline.from('.mio_nav', {
      x: 1000, // Start off the screen to the left
      opacity: 0, // Initially invisible
      duration: 1.5,
      ease: "expo.inOut",
    }, '<')
    timeline.from('.main', {
      x: -1000, // Start off the screen to the left
      opacity: 0, // Initially invisible
      duration: 1.5,
      ease: "expo.inOut",
    }, '<')
    timeline.from('.plant-2', {
      x: 500, // Start off the screen to the left
      // opacity: 0, // Initially invisible
      duration: .3,
      ease: "expo.inOut",
    }, '>')
    timeline.from('.plant-1', {
      x: -500, // Start off the screen to the left
      // opacity: 0, // Initially invisible
      duration: .3,
      ease: "expo.inOut",
    }, '>')
    timeline.from('.lady', {
      x: -500, // Start off the screen to the left
      opacity: 0, // Initially invisible
      duration: 1,
      ease: "expo.inOut",
    })
    mio.forEach((element: any) => {
      const ourText = new SplitType(element as HTMLElement, {types: 'chars'});
      const chars = ourText.chars;

      // Add animation to the timeline for .title
      timeline.fromTo(
        chars,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          // delay: .2,
          ease: 'power4.out',
        } // Use '<' to position the animation at the start of the timeline
      );
    });

    mio_sub.forEach((element: any) => {
      const ourText = new SplitType(element as HTMLElement, {types: 'chars'});
      const chars = ourText.chars;

      // Add animation to the timeline for .title_2
      timeline.fromTo(
        chars,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
        } // Use '<' to position the animation at the start of the timeline
      );
    });

    // You can optionally return the timeline if you need to control it externally
    return timeline;
  }

  startVideo() {
    // Trigger video playback programmatically
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  }
  toggleVisibility() {
    this.showCredit = true;

    // Set a timer to reset showCredit to false after 6 seconds
    setTimeout(() => {
      this.showCredit = false;
    }, 6000); // 6000 milliseconds = 6 seconds
  }
}
