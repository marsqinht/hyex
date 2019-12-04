import { stringify } from 'qs';
import { cRequest } from '@/utils/request';


export async function queryPartyWork(params) {
  return cRequest(`/PartyWork?${stringify(params)}`);
}

export async function queryParyConstruct(params) {
  return cRequest(`/Project?${stringify(params)}`);
}

export async function querySystem(params) {
  return cRequest(`/Compile?${stringify(params)}`);
}

