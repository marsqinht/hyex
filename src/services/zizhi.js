import { stringify } from 'qs';
import { cRequest } from '@/utils/request';

export async function queryZizhiTree() {
  return cRequest(`/QualificationTree`);
};

export async function queryZhiwuTree() {
  return cRequest(`/EngageTree`);
};
export async function queryQualificationList(params) {
  return cRequest(`/Qualification?${stringify(params)}`);
}

export async function queryEngageList(params) {
  return cRequest(`/Engage?${stringify(params)}`);
}
