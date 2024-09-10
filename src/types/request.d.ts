type UnknownParams = Record<string, string> | undefined;

interface Params extends UnknownParams {
  limit?: string;
  order?: string;
  page?: string;
}

interface BaseResponseApi {
  total: number;
  limit: number;
  page: number;
}
