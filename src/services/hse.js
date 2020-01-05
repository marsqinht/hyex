import { stringify } from 'qs';
import request, { cRequest }from '@/utils/request';


export async function queryHse(params) {
  return cRequest(`/HSEManage?${stringify(params)}`);
}

