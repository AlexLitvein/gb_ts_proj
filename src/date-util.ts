export function getMonthLastDate(date: Date) {
  const tmp = new Date(date.getTime());
  tmp.setMonth(tmp.getMonth() + 1, 0);
  return tmp;
}

export function offsetDate(date: Date, day:number, month=0, year=0) {
  const tmp = new Date(date.getTime());
  tmp.setDate(tmp.getDate() + day);
  tmp.setMonth(tmp.getMonth() + month);
  tmp.setFullYear(tmp.getFullYear() + year);
  return tmp;
}

export  function frmtDate(date:Date, delimiter:string){
  const month = date.getMonth() + 1; 
  const day = date.getDate();    
  const year  = date.getFullYear();
  return year + delimiter + ('0' + month).slice(-2) + delimiter + ('0'+ day).slice(-2);
}