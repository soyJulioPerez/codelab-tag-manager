import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codelab-tag-manager';

  constructor(
    private router: Router,
    private titleService: Title

  ) {
    /* const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      const title = event.urlAfterRedirects.substring(1);
      console.log(title);
      this.titleService.setTitle(title || 'CodeLab');
      gtag('config', 'G-VGJC6J87F8', {
        'page_path': event.urlAfterRedirects
      });

    }); */
  }
}
