import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs';
import { PageContentService } from 'src/app/service/page-content.service';


@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent {
  public animes: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  constructor(private contentService: PageContentService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.contentService.searchInfo(value!))
      ).subscribe((results) => this.animes = results)
  }
}
