import { renderBlock } from './lib.js'

export function renderSearchFormBlock (dateIn:Date, dateOut:Date) {
 
  function frmtDate(date:Date, delimiter:string){
    const month = date.getMonth() + 1; 
    const day = date.getDate();    
    const year  = date.getFullYear();
    return year + delimiter + ('0' + month).slice(-2) + delimiter + ('0'+ day).slice(-2);
  }

  const minDateInStr = frmtDate(new Date(Date.now()), '-');  // before
  dateIn.setDate(dateIn.getDate()+1);
  
  const maxDateOutStr = frmtDate(dateOut, '-'); // before
  dateOut.setDate(dateOut.getDate()+2);
  
  
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${frmtDate(dateIn, '-')}" min="${minDateInStr}" max="${maxDateOutStr}" name="checkout" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${frmtDate(dateOut, '-')}" min="${minDateInStr}" max="${maxDateOutStr}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
