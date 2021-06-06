import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-detail-card',
  templateUrl: './brand-detail-card.component.html',
  styleUrls: ['./brand-detail-card.component.css']
})
export class BrandDetailCardComponent implements OnInit {

  @Input('imageInfo') imageInfo = '';
  @Input('titleInfo') titleInfo = '';
  @Input('subTitleInfo') subTitleInfo = '';

  constructor() { }

  ngOnInit(): void {
  }

}
