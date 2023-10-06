import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor(private albumService: AlbumService,private router : Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.albumService.getAllCategory().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.error('Error fetching albums: ', error);
      }
    );
  }

  onCategoryClick(category: any) {
    this.router.navigate(['/category-list'], { queryParams: { categoryName: category.name } });
  }
}
