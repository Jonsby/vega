import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class FeatureService {

  constructor(private _http: Http, @Inject('ORIGIN_URL') private _originUrl: string) {
  }

  getFeatures() {
    return this._http.get(this._originUrl + '/api/features').map(res => res.json());
  }
}
