import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryScale } from 'chart.js';
import { baseColors } from 'ng2-charts';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { environments } from 'src/environments/enviroments';


@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewsComponent implements OnInit,
  OnDestroy {
  public editorContent: any = "";
  isSubmitted = false;
  newsCategory: any[] = [];
  newsForm: FormGroup;
  selectedImage: any;
  singleNewsData: any = {};
  imageUrl: string = "";

  constructor(private breadcrumsService: BreadcrumsService,
    private router: Router,
    private commonHttpService: CommonHttpService,
    private notifyService: NotifyService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer:DomSanitizer) {
    this.newsForm = new FormGroup({
      category: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
    });
    this.setEditNewsByIdFromResolver();
  }
  setEditNewsByIdFromResolver() {
    this.activatedRoute.data.subscribe((result: any) => {
      this.singleNewsData = result.newsData.data;
    });
  }
  ngOnInit(): void {
    this.breadcrumsService.setBreadcrums(BREADCRUMS.news.create)
    this.categoryList();
    this.prePopulateNews();
  };

  categoryList() {
    this.commonHttpService.get(`${environments.baseUrl}news/getAllcategory`).subscribe((result: any) => {
      this.newsCategory = result.data
    });
  };

  onSubmit() {
    this.isSubmitted = true;
    if (this.newsForm.valid) {
      const formNewsData = this.newsForm.value;
      const formData = new FormData();
      formData.append('title', formNewsData.title)
      formData.append('author', formNewsData.author)
      formData.append('categoryId', formNewsData.category)
      formData.append('description', this.editorContent);
      if (this.selectedImage) {
        formData.append('image', this.selectedImage);
      } else {
        formData.append('image', 'null');
      }
      if (Object.keys(this.singleNewsData).length == 0) {
        this.commonHttpService.post(`${environments.baseUrl}news/createNews`, formData).subscribe((result: any) => {
          this.router.navigate(['/landing/news-manegment']);
        })
      };
      if (Object.keys(this.singleNewsData).length > 0) {
        this.commonHttpService.put(`${environments.baseUrl}news/updateNewsById/${this.singleNewsData._id}`, formData).subscribe((result: any) => {
          this.router.navigate(['/landing/news-manegment']);
        })
      }
    }


  };

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedImage = file;
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      const maxSizeInMB = 1;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        this.notifyService.showError('Only PNG, JPEG, and JPG are allowed.', 'Please pass valid image');
        return;
      }
      if (file.size > maxSizeInBytes) {
        this.notifyService.showError('File size should not exceed 1MB.', 'Please pass the valid file size.');
        return;
      }

      //show preview of selected image


      // Image preview logic
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  prePopulateNews() {
    const news = this.singleNewsData
    this.newsForm.patchValue({
      category: news.category._id,
      title: news.title,
      author: news.author
    })
    //sanitize description before binding to template
    // this.editorContent = news.description;
    this.editorContent = this.domSanitizer.bypassSecurityTrustHtml(news.description);
    this.imageUrl = news.image;
  }

  get newsData() {
    return this.newsForm
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([])
  }

}
