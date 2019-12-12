import { stringify } from 'qs';
import { cRequest } from '@/utils/request';

export async function queryDepartmentTree() {
  return cRequest(`/Department`);
}

export async function queryHumanfo(params) {
  return cRequest(`/HumanList?${stringify(params)}`);
}
export async function queryDetail(params) {
  return cRequest(`/Human?${stringify(params)}`);
}
