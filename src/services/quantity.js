import { stringify } from 'qs';
import { cRequest } from '@/utils/request';

export async function queryZhiliangManage(params) {
  return cRequest(`/Manage?${stringify(params)}`);
}

export async function queryStandard(params) {
  return cRequest(`/Standard?${stringify(params)}`);
}

// 现行标准目录
export async function queryCurrentList(params) {
  return cRequest(`/CurrentList?${stringify(params)}`);
}
// 技术管理
export async function querySkillManage(params) {
  return cRequest(`/SkillManage?${stringify(params)}`);
}
export async function queryHSEManage(params) {
  return cRequest(`/HSEManage?${stringify(params)}`);
}
