import { IResponse } from './CustomResponse';

export interface IErrorResponse extends IResponse {
  stack?: string;
}
