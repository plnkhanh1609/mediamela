import './index.less'
// vanilla-lazyload 17
new LazyLoad({callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// swiper 10
import {setupSwiper } from './swiper.ts';
setupSwiper();

import {setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));

Array.from(document.getElementsByClassName('handle-dialog')).forEach((el) => el.addEventListener('click', () =>  {
  const temp = document.getElementById("template-1");
  if (temp) {
    const a = document.importNode(temp, true);
    a.innerHTML = a.innerHTML.replace(/{{test}}/g, 'TEST')
    Message.html(a.innerHTML);
  }
}))

// glightbox 3
GLightbox({});

// echarts 5
import { setupEchart } from './echart.ts'
setupEchart();

// inputmask 5
Inputmask().mask(document.querySelectorAll("input"));


// sweetalert2 11
import { Message } from './message.ts'
document.getElementById('success')!.addEventListener('click', () => Message.success({text: 'Success'}))
document.getElementById('warning')!.addEventListener('click', () => Message.warning({text: 'Warning'}))
document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({text: 'Confirm'}))
document.getElementById('error')!.addEventListener('click', () => Message.error({text: 'Error'}))


import { setupCounter } from './counter.ts'
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import { API } from './api.ts'

const test = await API.post('/authentication/jwt/login', {
  deviceName:
    "Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420",
  deviceNo: "Macintosh",
  deviceType: "BROWSER",
  password: "123123",
  remember: false,
  username: "0123456789",
});
console.log(test);
