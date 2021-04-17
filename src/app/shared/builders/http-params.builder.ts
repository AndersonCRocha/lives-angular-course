import { HttpParams } from '@angular/common/http'

export class HttpParamsBuilder {
  private httpParams = new HttpParams()

  constructor(objectParams: unknown) {
    this.withObjectParams(objectParams)
  }

  private withObjectParams(objectParams: unknown): HttpParamsBuilder {
    Object.keys(objectParams).forEach((property: string) => {
      this.httpParams = this.httpParams.set(
        property,
        String(objectParams[property])
      )
    })
    return this
  }

  public getHttpParams(): HttpParams {
    const httpParams = this.httpParams
    this.httpParams = new HttpParams()
    return httpParams
  }
}
