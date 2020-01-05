import { stringify } from 'qs';
import request, { cRequest } from '@/utils/request';

export async function toEdit(params) {
  return cRequest(`/Edit?${stringify(params)}`);
}