import { stringify } from 'qs';
import { cRequest } from '@/utils/request';


export async function queryCarsTree() {
  return cRequest(`/CarsTree`);
}

export async function queryCarsInfo(params) {
  return cRequest(`/Cars?${stringify(params)}`);
}

