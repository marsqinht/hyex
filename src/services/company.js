import { stringify } from 'qs';
import { cRequest } from '@/utils/request';


export async function queryApartmentTree() {
  return cRequest(`/DeptTree`);
}

export async function queryCompayInfo(params) {
  return cRequest(`/Dept?${stringify(params)}`);
}

