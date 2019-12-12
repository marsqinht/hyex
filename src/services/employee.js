import { stringify } from 'qs';
import { cRequest } from '@/utils/request';


export async function queryDepartmentTree() {
  return cRequest(`/Department`);
}

export async function queryHumanfo(params) {
  return cRequest(`/Human?${stringify(params)}`);
}

