import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoryDTO } from '../../models/category.dto';
import { CategoryService } from '../../services/domain/category.service';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoryDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryService: CategoryService
    ) {
  }

  ionViewDidLoad() {
    this.categoryService.findAll()
    .subscribe(res => {
      this.items = res;
    },
    error => {});
  }


  showProducts(category_id : string){
    this.navCtrl.push('ProductsPage',{category_id: category_id});
  }

}
