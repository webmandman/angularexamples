import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmartyResponse, Address } from '@examples/types';

export const smartyConfig = {
  url : 'https://us-street.api.smartystreets.com/street-address',
  key : '99911215218918272635'
};

@Injectable({
  providedIn: 'root'
})

export class SmartyService {

  constructor(
    private http: HttpClient
  ) {}

  public getSingleAddress(address: Address): Observable<SmartyResponse[]> {
    const options = {
      params: new HttpParams()
        .set('key', smartyConfig.key)
        .set('street', address.address)
        .set('street2', address.address2)
        .set('city', address.city)
        .set('state', address.state)
        .set('zipcode', address.zipcode)
    };
    return this.http.get<SmartyResponse[]>(smartyConfig.url, options);
  }

  public isValidAddress(res: SmartyResponse[]): boolean{
    if (
      res.length &&
      res[0].analysis.active === 'Y' &&
      res[0].analysis.dpv_match_code === 'Y'
    ){
      return true;
    }else{
      return false;
    }
  }
}
