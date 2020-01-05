import { stringify } from 'qs';
import { cRequest } from '@/utils/request';


export async function queryApartmentTree() {
  return cRequest(`/PlanSummaryTree`);
}

export async function queryCompayInfo(params) {
  return cRequest(`/Dept?${stringify(params)}`);
}

// PlanSummary
export async function queryPlanSummary(params) {
  return cRequest(`/PlanSummary?${stringify(params)}`);
}