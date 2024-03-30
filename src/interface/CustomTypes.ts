import { Request } from 'express';

export interface IRequestObject {
  type: string;
  description: string;
  url: string;
}

export interface TPaginationRequest extends Request {
  query: {
    limit: string;
    page: string;
    orderBy: string;
    sortBy: string;
    filterBy: string;
    category: string;
    search: string;
    content: string;
    role: string;
    sort: string;
    fields: string;
  };
}
