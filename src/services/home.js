import { stringify } from 'qs';
import request, { cRequest } from '@/utils/request';

export async function queryBirthday() {
  return cRequest(`/Birthday`);
}
