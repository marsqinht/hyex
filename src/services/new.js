import { stringify } from 'qs';
import request, { cRequest }from '@/utils/request';


export async function queryNews(params) {
  return cRequest(`/News?${stringify(params)}`);
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
