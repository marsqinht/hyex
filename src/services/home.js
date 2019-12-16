import { stringify } from 'qs';
import request, { cRequest } from '@/utils/request';

export async function queryBirthday() {
  return cRequest(`/Birthday`);
}

export async function queryLoginManage() {
  return cRequest('/LoginManage');
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
