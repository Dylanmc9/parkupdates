import { Component } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  posts$: Observable<any[]>;
  
  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }

}
