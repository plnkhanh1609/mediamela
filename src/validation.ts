export const setupValidation = () => {
  (<any>window)._FORM_ = {}
  Array.from(document.getElementsByTagName('form')).forEach((el) => {
    (<any>window)._FORM_[el.name] = {};
    el.addEventListener('submit',(event) => {event.preventDefault(); submitForm(el);})

    Array.from(['input', 'textarea']).forEach((tag) => el.querySelectorAll('.group > ' + tag).forEach((element) => {
      element.addEventListener('blur', () => showMessage(element as HTMLInputElement, tag, 'blur', el.name),false);
    }));
    Array.from([ '.pretty > input']).forEach((tag) => el.querySelectorAll(tag).forEach((element) => {
      element.addEventListener('change', () => showMessage(element as HTMLInputElement, tag, 'change', el.name),false);
    }));
    // Array.from(['select']).forEach((tag) => el.querySelectorAll(tag).forEach((element) => {
    //   element.addEventListener('hideDropdown', () => showMessage(element as HTMLInputElement, tag, 'hideDropdown'),false);
    // }));
  })
};
const submitForm = (el: HTMLFormElement) => {
  console.log((<any>window)._FORM_[el.name]);
  // Array.from(['input', 'textarea']).forEach((tag) => el.querySelectorAll('.group > ' + tag).forEach((element) => {
  //   showMessage(element as HTMLInputElement, tag, 'blur', el.name);
  // }));
  Array.from([ '.pretty > input']).forEach((tag) => el.querySelectorAll(tag).forEach((element) => {
    showMessage(element as HTMLInputElement, tag, 'change', el.name, true);
  }));
  return true;
}
const showMessage = (el: HTMLInputElement, tag: string, event: string, nameForm: string, isSubmit = false) => {
  const parentElement = el.closest('.group');

  if (parentElement) {
    if (!isSubmit) (<any>window)._FORM_[nameForm][el.name.replace('[]', '')] = el.name.indexOf('[]') === -1 ? el.value : [].filter.call(document.getElementsByName(el.name), (c: HTMLInputElement) => c.checked).map((c: HTMLInputElement) => c.value);

    const message = getMessage(el, nameForm, isSubmit);
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power1.inOut' } });
    const error = parentElement.querySelector('p');
    if (message) {
      if (error) error.innerHTML = message;
      else {
        parentElement.innerHTML += `<p class="error">${message}</p>`;
        const p = parentElement.querySelector('p');
        tl.from(p, { marginTop: '-20', opacity: '0', fontSize: '10' });

        parentElement.classList.add('error');
        const input = parentElement.querySelector(tag) as HTMLInputElement;
        if (input) {
          input.addEventListener(event, () => showMessage(input, tag, event, nameForm),false);
        }
      }

    } else {
      parentElement.classList.remove('error');
      const input = parentElement.querySelector(tag) as HTMLInputElement;
      if (input) {
        input.addEventListener(event, () => showMessage(input, tag, event, nameForm),false);
      }
      if (error) tl.to(error, { marginTop: '-20', opacity: '0', fontSize: '10' });
      setTimeout(() => parentElement.querySelector('p')?.remove(), 4000)
    }
  }
}

const getMessage = ({value, required, type, name, dataset}: HTMLInputElement, nameForm: string ,isSubmit: boolean) => {
  if (isSubmit || type === 'checkbox' && name.indexOf('[]') > -1) value = (<any>window)._FORM_[nameForm][name.replace('[]', '')];
  if ((!value && required && name.indexOf('[]') === -1)) return 'Xin vui lòng nhập texxt';
  else if (value && type === 'email' && !regexEmail.test(value.trim())) return 'Xin vui lòng nhập địa chỉ email hợp lệ!'
  if ((type === 'checkbox' && name.indexOf('[]') > -1) && dataset.hasOwnProperty('mincheck') && (!value || value.length < parseInt(dataset['mincheck']!))) return 'Xin vui lòng chọn ít nhất ' + dataset['mincheck'];
  return '';
}
const regexEmail =
  /^(([^<>()[\]\\.,;:$%^&*\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
new Choices('.js-choice');

