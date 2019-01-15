var table,iMonth,iYear,check = true;
var arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var listDate = ["Sun","Mon","Tue","Web","Thu","Fri","Sat"];
checkAcount();
function checkAcount(){
  checkUser();
  checkPass();
  checkEmail();
}
function checkPass(){
  var pass = document.getElementById("pass");
  var check_pass = document.getElementById("check__pass-js");
  pass.onblur = function () {
    if(pass.value.trim().length < 8)
      check_pass.innerText = "Password length min 8 letter";
    else {
      check_pass.innerText = "";
    }
  }
}
function checkUser(){
  var user = document.getElementById("user");
  var check_user = document.getElementById("check__user-js");
  user.onblur = function () {
    if(user.value.trim().length < 8)
      check_user.innerText = "Username length min 8 letter";
    else {
      check_user.innerText = "";
    }    
  }
}
function checkEmail() {
  var email = document.getElementById("email");
  var check_email = document.getElementById("check__email-js");
  email.onblur = function () {
    if(email.value.trim().length < 8)
      check_email.innerText = "Email length min 8 letter";
    else if(!validateEmail(email.value))
      check_email.innerText = "Email format is incorrect"
    else {
      check_email.innerText = "";
    }
  }
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validateDate(date) {
  var value = date.value.split("/");
  var dateSlected = new Date(value[2],value[1] -1,value[0]);
  var dateNow = new Date();
  return Math.round((dateSlected.getTime() - dateNow.getTime()) / 1000 / 60 / 60 / 24);
}
function checkBirthDay() {
  var date = document.getElementById("value-js");
  var check_date = document.getElementById("check__date-js");
  var result = validateDate(date);
  if(result > 0){
    check_date.innerText = "";
  }
  else {
    check_date.innerText = "The date must be greater than the current date";
  }
  
} 
var table,iMonth,iYear,check = true;
var arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var listDate = ["Sun","Mon","Tue","Web","Thu","Fri","Sat"];
/**
 * Initialization value Calendar
 */
function initCalendar() {
  var calendar = document.getElementById("calendar");
  calendar.innerHTML = " ";
    if(check){
    check = false;
    table = document.createElement("TABLE");
    var mselect = document.createElement("SELECT");
    var yselect = document.createElement("SELECT");
    var tr = document.createElement("TR");
    table.setAttribute("id","table-js");
    tr.setAttribute("id","nav-js");
    iMonth = 0;
    iYear = 1950;
    table.appendChild(tr);
    for(var i = 0 ; i < 6 ; i++){
      var th = document.createElement("TH");
      switch(i){
        case 0 :{
          th.setAttribute("id","back__Year-js");
          th.setAttribute("onclick","backYear()");
          th.innerHTML = "&#8647;";
          break;
        }
        case 1: {
          th.setAttribute("id","back__Month-js");
          th.setAttribute("onclick","backMonth()");
          th.innerHTML = "&#8592;";
          break;
        }
        case 2: {
          th.setAttribute("colspan","2");
          th = createSelectMonth(th,mselect,arrMonth);
          break;
        }
        case 3: {
          th = createSelectYear(th,yselect);
          break;
        }
        case 4: {
          th.setAttribute("id","forward__Month-js");
          th.setAttribute("onclick","forwardMonth()");
          th.innerHTML = "&#8594;";
          break;
        }
        case 5: {
          th.setAttribute("id","forward__Year-js");
          th.setAttribute("onclick","forwardYear()");
          th.innerHTML = "&#8649;";
          break;
        }
      }
      tr.appendChild(th);
    }
    var tr = document.createElement("TR");
    tr.setAttribute("id","head-js");
    table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
      var th = document.createElement("TH");
      th.innerHTML = listDate[j];
      th.setAttribute("id","head-js"+j);
      tr.appendChild(th);
    }
    iMonth = mselect.options[mselect.selectedIndex].value;
    iYear = yselect.options[yselect.selectedIndex].value;
    createCalendar(table);
    calendar.appendChild(table);
  }
  else {
    check = true;
  }
}
/**
 * Create days in Month Calendar
 * @param {table} table 
 */
function createCalendar(table) {
  var count = 1;
  var date = datesInMonth();
  var day = daysInWeek(count);
  for(var i = 0 ; i < 6 ; i++){
    var tr = document.createElement("TR");
    tr.setAttribute("id",i);
    table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
      var td = document.createElement("TD");
      td.setAttribute("id",j);
      if(j == day && count <= date){
        td.innerHTML = count;
        td.setAttribute("class","day-js");
        td.onclick = function () {
          addDay(this.innerHTML);
          calendar.innerHTML = " ";
        }
        day = daysInWeek(++count);
      }
      else
        td.setAttribute("class","notday-js")
      tr.appendChild(td);
    }
  }  
  calendar.appendChild(table);
}
/**
 * Get value dates in month
 */
function datesInMonth() {
  return 32 - new Date(iYear, iMonth, 32).getDate();// return number of days in the month
}
/**
 * Get value day in week
 * @param {value day selected} idate 
 */
function daysInWeek(idate) {
  return new Date(iYear, iMonth,idate).getDay();
}
/**
 * Return selected date value
 * @param {Selected date value} idate 
 */
function addDay(idate){
  var text = document.getElementById("value-js");
  check = true;
  text.value = idate.padStart(2, '0') + "/" + (parseInt(iMonth)+1+"").padStart(2,'0') + "/" + iYear;
  checkBirthDay();
}
/**
 * 
 * @param {Index Element} th 
 * @param {*} select 
 */
function createSelectMonth(th,select){
  var nowMonth = new Date().getMonth;
  select.setAttribute("onchange","selectedMonth(event)")
  while(iMonth < 12){
    var month = document.createElement("OPTION");
    if(nowMonth == iMonth)
      month.setAttribute("selected","selected");
    month.setAttribute("value",iMonth);
    month.innerHTML = arrMonth[iMonth++];
    select.appendChild(month);
  }
  select.setAttribute("id","months-js")
  th.appendChild(select);
  return th;
}
/**
 * 
 * @param {*} th 
 * @param {*} select 
 */
function createSelectYear(th,select){
  var nowYear = new Date().getFullYear();
  select.setAttribute("onchange","selectedYear(event)")
  while(iYear < 2051){
    var year = document.createElement("OPTION");
    if(nowYear == iYear)
      year.setAttribute("selected","selected");
    year.innerHTML = iYear++;
    select.appendChild(year);
  }
  select.setAttribute("id","years-js");
  th.appendChild(select);
  return th;
}
/**
 * Create new Calendar with value selected 
 * @param {*} table 
 */
function newCalendar (table){
  removeChildTable(table);
  createCalendar(table);
}

/**
 * Remove day in calender
 * @param {Elenment table} table 
 */
function removeChildTable(table) {
  for(var irow = 0 ; irow < 6 ; irow++)
    table.removeChild(table.childNodes[2]);
}
/**
 * 
 * @param {value Month Selected} evt 
 */
function selectedMonth(evt){
  iMonth = evt.target.value;
  newCalendar(table);
}
/**
 * 
 * @param {value Year selected} evt 
 */
function selectedYear(evt) {
  iYear = evt.target.value
  newCalendar(table);
}
/**
 * Change value Year
 */
function changeYear(){
  var  select = document.getElementById("years-js");
  select.selectedIndex = iYear - 1950;
}
/**
 * Change value Month
 */
function changeMonth() {
  var  select = document.getElementById("months-js");
  if(iMonth > 11) {
    iMonth -= 12;
    ++iYear
    changeYear();
  }
  if(iMonth < 0) {
    iMonth = 11;
    --iYear;
    changeYear();
  }
  select.selectedIndex = iMonth;
}
/**
 * reduce value Year
 */
function backYear() {
  iYear--;
  changeYear();
  newCalendar(table);
}
/**
 * reduce value Month
 */
function backMonth() {
  iMonth--;
  changeMonth();
  newCalendar(table);
}
/**
 * increase value Month
 */
function forwardMonth() {
  iMonth++;
  changeMonth();
  newCalendar(table);
}
/**
 * 
  increase value Year
 */
function forwardYear() {
  iYear++;
  changeYear();
  newCalendar(table);
}