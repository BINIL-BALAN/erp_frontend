export type CountryType = { iso2: string; iso3: string; country: string };
export type ApiResponseType<T> = {
  response: T | null;
  responseStatus: boolean;
  statusCode: number | string;
  responseMessage: string;
};
export type StateType = {
  name: string;
  state_code: string;
};
