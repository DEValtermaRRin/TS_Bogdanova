import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

let dateIn: string, dateOut: string;
const userInDate = document.querySelector('#check-in-date') as HTMLInputElement;
const userOutDate = document.querySelector(
  '#check-out-date',
) as HTMLInputElement;

userInDate?.addEventListener('change', () => {
  dateIn = userInDate.value;
});
userOutDate?.addEventListener('change', () => {
  dateOut = userOutDate.value;
});

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(0, 'Wade Warren', './img/avatar.png');
  renderSearchFormBlock(dateIn, dateOut);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    },
  );
});
