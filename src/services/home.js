import { stringify } from 'qs';
import request, { cRequest } from '@/utils/request';

export async function queryBirthday() {
  return cRequest(`/Birthday`);
}

export async function queryLoginManage(params) {
  return cRequest(`/LoginManage?${stringify(params)}`);
}

export async function queryHSEManage(params) {
  return cRequest(`/HSEManage?${stringify(params)}`);
}

export async function queryLeave() {
  return cRequest('/Leave');
}
export async function queryLeaderShare(params) {
  return cRequest(`/LeaderShare?${stringify(params)}`);
}

export async function queryCurrentList() {
  return cRequest('/CurrentList');
}

// 会议信息
export async function queryMeetingApply() {
  return cRequest('/MeetingApply');
}

export async function queryMenu() {
  return cRequest('/Menu');
}

// 登录 login
export async function doLogin(params) {
  return cRequest(`/Login?${stringify(params)}`);
}