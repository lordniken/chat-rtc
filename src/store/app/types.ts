export enum AppTypes {
  API_REQUEST = '@app/API_REQUEST',
  API_REQUEST_SUCCESS = '@app/API_REQUEST_SUCCESS'
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

export interface IApiRequest {
  url: string;
  method: ApiMethods;
  body: string;
}