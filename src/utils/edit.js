import Cookies from 'js-cookie';
import router from 'umi/router';
import { doLogin } from '../services/home';

export async function goToEdit(fromname, redirect = window.location.href) {
  // alert(1)
  try {
    const userInfo = JSON.parse(Cookies.get('userInfo') || '{}')
    if(userInfo.Code) {
      const { data, success } = await doLogin({
        code: userInfo.Code,
        fromname
      })
      if(success) {
        window.open(data.url);
      }
    } else {
      router.push(`/Login?redirect=${encodeURIComponent(redirect)}`)
    }
    
  } catch (error) {
    
  }
}
  