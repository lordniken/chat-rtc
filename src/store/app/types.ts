export enum AppTypes {
  API_REQUEST = '@app/API_REQUEST',
  API_RESPONSE = '@app/API_RESPONSE',
  WS_CONNECT = '@chat/WS_CONNECT',
  WS_CLOSE = '@chat/WS_CLOSE'
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

export interface IApiRequest {
  url: string;
  method: ApiMethods;
  body?: string | FormData | undefined;
  headers?: {};
}