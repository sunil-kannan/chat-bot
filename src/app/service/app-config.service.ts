import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) { }

  private appConfig: any;

  async loadAppConfig() {
    const data = await this.http.get('./assets/config.json').toPromise();
    this.appConfig = data;
    console.log(this.appConfig)
  }

  getConfig() {
    return this.appConfig;
  }
}
