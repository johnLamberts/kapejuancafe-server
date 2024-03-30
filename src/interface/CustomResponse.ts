export interface IResponse<T = null> {
  data: T;
  success: boolean;
  error: boolean;
  message: string;
  status: number;
}
