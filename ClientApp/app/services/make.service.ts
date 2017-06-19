import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MakeService {

  constructor(private _http: Http, @Inject('ORIGIN_URL') private _originUrl: string) {
  }

  getMakes() {
    return this._http.get(this._originUrl + '/api/makes').map(res => res.json());
  }

}
