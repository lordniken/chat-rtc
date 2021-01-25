export enum AppTypes {
  API_REQUEST = '@app/API_REQUEST',
  API_RESPONSE = '@app/API_RESPONSE'
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

export interface IApiRequest {
  url: string;
  method: ApiMethods;
  body?: string | undefined;
  headers?: {};
}