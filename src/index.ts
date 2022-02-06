import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

function getMonthLastDate(date:Date){
  const tmp=new Date(date.getTime());
  tmp.setMonth(tmp.getMonth()+1, 0);
  return tmp;
}

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Vasa', '/img/avatar.png', 0)
  const now = new Date(Date.now());
  renderSearchFormBlock(now, getMonthLastDate(now));
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
