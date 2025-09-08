import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  postApi: string = 'https://jsonplaceholder.typicode.com/albums'
  finalData: any[] = [];

  constructor() {
    this.getDataFromApi(this.postApi);

  }
  async getDataFromApi(apiUrl: string) {
    try {
      const apiDataList = await fetch(apiUrl);
      const data = await apiDataList.json()
      this.finalData = data
    } catch (erro) {

    }
  }

}