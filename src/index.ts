import { renderSearchFormBlock, findHandler } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getTodosByCount, renderTodosBlock} from './place-holder.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Vasa', '/img/avatar.png', 0);
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  );

  getTodosByCount(10).then((json) => renderTodosBlock(json));
  
  document.getElementById('find_bttn').addEventListener('click', findHandler );
})
