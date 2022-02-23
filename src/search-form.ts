import { renderBlock } from './lib.js'
import {offsetDate, getMonthLastDate, frmtDate} from './date-util.js'
interface Place{  
}

interface SearchCallback {
  (formData: SearchFormData): unknown
}

interface SearchFormData{
  sity: string
  dataIn: Date
  dataOut: Date
  price: number
}

const searchCb = (query: SearchFormData)=>{
  const flag = !!Math.round(Math.random()); 
  const res: Place[] = [];
  return flag ? res : 'error'; 
}

const search=(formData: SearchFormData, cb: SearchCallback)=>{
  setTimeout(()=>{       
    const res = cb(formData);
    if(Array.isArray(res)){  
      res.forEach(el=>console.log(el));      
    } else {
      console.log(res);
    }    
  }, 2);
}

export function onSybmit() {
  const formCtrls=document.forms[0];
  if(formCtrls){
    const formData =  {
      sity: formCtrls['city'].value,
      dataIn: formCtrls['checkin'].value,
      dataOut: formCtrls['checkout'].value,
      price: formCtrls['price'].value,
    }  
    search(formData, searchCb);
  }  
}

export function renderSearchFormBlock (dateIn?:Date, dateOut?:Date) {
  let defaultDataIn = dateIn || new Date(Date.now()); 
  defaultDataIn = offsetDate(defaultDataIn, 1);
  const defaultDataOut = offsetDate(defaultDataIn, 2) ;
  const maxDataOut =  getMonthLastDate( offsetDate(defaultDataIn, 0, 1)) ;
  const minDateInStr = frmtDate(defaultDataIn, '-');
  const maxDateOutStr = frmtDate(dateOut || maxDataOut, '-');
  
  renderBlock(
    'search-form-block',
    `
    <form >
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" name="city" disabled value="Санкт-Петербург" />
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
            <input id="check-in-date" type="date" value="${frmtDate(defaultDataIn, '-')}" min="${minDateInStr}" max="${maxDateOutStr}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${frmtDate(defaultDataOut, '-')}" min="${minDateInStr}" max="${maxDateOutStr}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="99" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="sybmit" id="find_bttn">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
