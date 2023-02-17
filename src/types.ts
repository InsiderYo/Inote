export interface IResponse<T = void> {
  status: number;
  data?: T;
}
