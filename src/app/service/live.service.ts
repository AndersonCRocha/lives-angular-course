import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { HttpParamsBuilder } from '../shared/builders/http-params.builder'
import { Page } from '../shared/domain/interface/page.interface'
import Live from '../shared/domain/model/live.model'

@Injectable()
export class LiveService {
  constructor(private httpClient: HttpClient) {}

  public getLivesByFlag(flag: string): Observable<Page<unknown>> {
    return this.httpClient.get<Page<unknown>>(`${environment.apiUrl}/lives`, {
      params: new HttpParamsBuilder({ flag }).getHttpParams(),
    })
  }

  public getLivesFakeApi(): Observable<Page<Live>> {
    return this.httpClient.get<Page<Live>>('https://api.mocki.io/v2/46638204')
  }
}
