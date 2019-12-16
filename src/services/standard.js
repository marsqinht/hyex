import { stringify } from 'qs';
import { cRequest } from '@/utils/request';

export async function queryDocContents() {
  return cRequest(`/DocTree`);
}

export async function queryDocs(params) {
  return cRequest(`/Doc?${stringify(params)}`);
}