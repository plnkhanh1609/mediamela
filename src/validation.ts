export const setupValidation = () => {
  (<any>window)._FORM_ = {};
  (<any>window)._FORMSTATUS_ = {};
  (<any>window)._SELECT_ = {};
  Array.from(document.getElementsByTagName('form')).forEach((el) => {
    (<any>window)._FORM_[el.name] = {};
    (<any>window)._FORMSTATUS_[el.name] = false;
    (<any>window)._SELECT_[el.name] = {};
    el.addEventListener('submit',(event) => {event.preventDefault(); submitForm(el);})

    Array.from(['input', 'textarea']).forEach((tag) => Array.from(el.querySelectorAll(tag) as NodeListOf<HTMLInputElement>).forEach((element) => {
      element.addEventListener('blur', () => showMessage(element as HTMLInputElement, tag, 'blur', el.name),false);
    }));
    Array.from([ '.pretty > input', 'select']).forEach((tag) => Array.from(el.querySelectorAll(tag) as NodeListOf<HTMLInputElement>).forEach((element) => {
      if (element.type.indexOf('select') > -1) (<any>window)._SELECT_[el.name][element.name] = new Choices(element, { removeItemButton: true});
      element.addEventListener('change', () => showMessage(element as HTMLInputElement, tag, 'change', el.name),false);
    }));
  })
};
const submitForm = (el: HTMLFormElement) => {
  Array.from(['input', 'textarea']).forEach((tag) => el.querySelectorAll('.group > ' + tag).forEach((element) => {
    showMessage(element as HTMLInputElement, tag, 'blur', el.name);
  }));
  Array.from([ '.pretty > input','select']).forEach((tag) => el.querySelectorAll(tag).forEach((element) => {
    showMessage(element as HTMLInputElement, tag, 'change', el.name, true);
  }));
  (<any>window)._FORMSTATUS_[el.name] = el.querySelectorAll('.group.error').length === 0;
  return true;
}
const showMessage = (el: HTMLInputElement, tag: string, event: string, nameForm: string, isSubmit = false) => {
  const parentElement = el.closest('.group');

  if (parentElement) {
    if (!isSubmit)  {
      if (tag === 'select') (<any>window)._FORM_[nameForm][el.name] = el.type.indexOf('multiple') > -1 ? ((<any>window)._SELECT_[nameForm][el.name].getValue()).map((i: any) => i.value) : ((<any>window)._SELECT_[nameForm][el.name].getValue()).value;
      else (<any>window)._FORM_[nameForm][el.name.replace('[]', '')] = el.name.indexOf('[]') === -1 ? el.value : [].filter.call(document.getElementsByName(el.name), (c: HTMLInputElement) => c.checked).map((c: HTMLInputElement) => c.value);
    }

    const message = getMessage(el, nameForm, isSubmit);
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power1.inOut' } });
    const error = parentElement.querySelector('p');
    if (message) {
      if (error) error.innerHTML = message;
      else {
        if (tag === 'select') (<any>window)._SELECT_[nameForm][el.name].destroy();
        const oldInput = parentElement.querySelectorAll(tag) as NodeListOf<HTMLInputElement>;
        parentElement.innerHTML += `<p class="error">${message}</p>`;
        const p = parentElement.querySelector('p');
        tl.from(p, { marginTop: '-15', opacity: '0', fontSize: '10' });

        parentElement.classList.add('error');
        Array.from(parentElement.querySelectorAll(tag) as NodeListOf<HTMLInputElement>).forEach((input, index) => {
          if (tag === 'select') { (<any>window)._SELECT_[nameForm][input.name] = new Choices(input, { removeItemButton: true}); }
          input.checked = oldInput[index].checked;
          input.value = oldInput[index].value;
          input.addEventListener(event, () => showMessage(input, tag, event, nameForm), false);
        })
      }

    } else {
      const oldInput = parentElement.querySelectorAll(tag) as NodeListOf<HTMLInputElement>;
      parentElement.classList.remove('error');
      if (error) tl.to(error, { marginTop: '-15', opacity: '0', fontSize: '10' });
      setTimeout(() => {
        parentElement.querySelector('p')?.remove();
        Array.from(parentElement.querySelectorAll(tag) as NodeListOf<HTMLInputElement>).forEach((input, index) => {
          input.checked = oldInput[index].checked;
          input.addEventListener(event, () => showMessage(input, tag, event, nameForm), false);
        })
      }, 300)
    }
  }
}

const getMessage = ({value, required, type, name, dataset}: HTMLInputElement, nameForm: string ,isSubmit: boolean) => {
  if (isSubmit || type === 'checkbox' && name.indexOf('[]') > -1) value = (<any>window)._FORM_[nameForm][name.replace('[]', '')];
  if ((!value && required && name.indexOf('[]') === -1)) return 'Xin vui lòng nhập nội dung';
  else if (value && type === 'email' && !regexEmail.test(value.trim())) return 'Xin vui lòng nhập địa chỉ email hợp lệ!'
  if ((type === 'checkbox' && name.indexOf('[]') > -1) && dataset.hasOwnProperty('mincheck') && (!value || value.length < parseInt(dataset['mincheck']!))) return 'Xin vui lòng chọn ít nhất ' + dataset['mincheck'];
  return '';
}
const regexEmail =
  /^(([^<>()[\]\\.,;:$%^&*\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

