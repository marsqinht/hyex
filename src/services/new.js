import { stringify } from 'qs';
import request from '@/utils/request';


export async function queryNews(params) {
  return request(`http://dev.p3china.com:16003/PowerService/News?${stringify(params)}`);
}

export async function removeRule(params) {
return request('/api/rule', {
  method: 'POST',
  data: {
    ...params,
    method: 'delete',
  }
})
}
