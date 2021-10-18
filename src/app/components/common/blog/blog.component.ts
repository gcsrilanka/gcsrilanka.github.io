import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  finalIndex;
  galleryImages = [
    {path: '../../../../assets/img/gallery/1.jpg'},
    {path: '../../../../assets/img/gallery/2.jpg'},
    {path: '../../../../assets/img/gallery/3.jpg'},
    {path: '../../../../assets/img/gallery/4.jpg'},
    {path: '../../../../assets/img/gallery/5.jpg'},
    {path: '../../../../assets/img/gallery/6.jpg'},
    {path: '../../../../assets/img/gallery/7.jpg'},
    {path: '../../../../assets/img/gallery/8.jpg'},
  ]
  constructor(private gallery: Gallery) { }

  showGallery(index: number) {
    let prop = {
        images: [
          {path: '../../../../assets/img/gallery/1.jpg'},
          {path: '../../../../assets/img/gallery/2.jpg'},
          {path: '../../../../assets/img/gallery/3.jpg'},
          {path: '../../../../assets/img/gallery/4.jpg'},
          {path: '../../../../assets/img/gallery/5.jpg'},
          {path: '../../../../assets/img/gallery/6.jpg'},
          {path: '../../../../assets/img/gallery/7.jpg'},
          {path: '../../../../assets/img/gallery/8.jpg'},
        ],
        index
    };
    this.gallery.load(prop);
}

  ngOnInit() {
  }

}
