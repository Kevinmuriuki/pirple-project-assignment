/**
   * There are many types of functions eg: Function declaration, Function expression, and immediately function expressions
   * 
   * 1. Function declaration
   * function updateMessage(newsLetter, discount) {
   *  return (discount/100) * newsLetter;
   * }
   * 
   * 2. Function expression
   * const offer = function updateMessage(newsLetter, discount) {
     return (discount/100) * newsLetter;
     }
   *
   * 3. Immediatel invoked Function expression
   * const offer = (function() {
   *  const newsLetter = 50;
   *  const discount =  50;
   *  return (discoutn/100) * newsLetter;
   * }())
   */

  var newsLetter = 50;
  var discount = 50;
  
  const offer = (function() {
    return (discount/100) * newsLetter;
  }());
  
  const msg = `Sign up to receive our newsletter for ${offer}% off!`;
  
  const elMsg = document.getElementById('message');
  elMsg.textContent = msg;
  
    /**
     * OBJECTS
     * in an object variables are known as properties and functions as methods. 
     * Ways in which you  can create an Object
     * 1. Objects Literal
     * const hotel = {
         name: 'Quay',
         rooms: 40,
         booked: 33,
         gym: ['twin', 'double', 'suit'],
         checkAvailabillity: function() {
         return this.rooms - this.booked;
         }
       }
     *
     * 2. CONSTRUCTOR NOTATION
     * This method allows you to create many objects as youlike
     * function hotel(name, rooms, booked, gym) {
     *   this.name = name;
     *   this.rooms =rooms;
     *   this.booked = booked;
     *   this.gyme = gyme;
     *   this.checkAvailability = function() {
     *     return this.rooms - thi.booked;
     *   }
     * }
     */
  
    function Hotel(name, rooms, booked, gyme) {
      this.name = name;
      this.rooms =rooms;
      this.booked = booked;
      this.gyme = gyme;
      this.checkAvailabillity = function() {
        return this.rooms - this.booked;
      }
    }
  
  const hotel1 = new Hotel('Park', 120, 70);
  
  
  
  const elName = document.getElementById('hotelName');
  elName.textContent = hotel1.name;
  
  const elRooms = document.getElementById('rooms');
  elRooms.textContent = `${hotel1.rooms} rooms in total.`;
  
  const elCheckAvailabillity = document.getElementById('func');
  elCheckAvailabillity.textContent = hotel1.checkAvailabillity();
  
  let hotel2 = new Hotel('Continental', 86, 69);
  
  const elRoomsInH2 = document.getElementById('hotelName');
  elRoomsInH2.textContent = hotel2.name; 
  
  
  const el = document.getElementById('func');
  el.textContent = hotel2.checkAvailabillity(); 
  
  /**
   * Built in Objects
   * Browsers come with built in objects that represents things such as browser window and the current web page shown in that window. they act as toolkits for creating intaractive web page
   * there are three groups of built in Objects
   * 1. Browser object model
   * it creates a model of the browser tab or window 
   * the top most is the window
   * window
   *  |-document
   *  |-history
   *  |-location
   *  |-navigation
   *  |-screen
   * 
   * 2. the DOM
   * 4. Global JavaScript Object
   * They are a group diffrent objects that relate to different parts of JavaScript language. their names starts with a capital letter
   * types ofbasic data types built in objects
   *  a. String
   *  b. Number
   *  c. Boolean
   * types of real time built in objects
   *  a. Date 
   *  b. Math
   *  c. Rejex  for matching a perttern within string or text
   */
  
   //Browser object model
  const msg2 = `
    <h2>Browser Window methods</h2>
    <h2>browser window</h2>
    <p>width: ${window.innerHeight}</p>
    <p>height: ${window.innerHeight}</p>
    <h2>history</h2>
    <p>items: ${window.history.length}</p>
    <h2>screen</h2>
    <p>width: ${window.screen.width}</p>
    <p>height: ${window.screen.height}</p>
  `;
  
  //adding and storing info in the browser
  const info = document.getElementById('info1');
  info.innerHTML = msg2;
  
  const myButton = document.querySelector('button');
  const myHeading = document.querySelector('h3');
  
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(myName == '') {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'JavaScript is cool, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName(); 
  }else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `JavaScript is cool, ${storedName}`
  }
  
  
  myButton.onclick = function() {
    setUserName();
  }
  //document object model
  const msg3 = `
    <h2>DOM Methods</h2>
    <p><b>Page title:</b> ${document.title}</p>
    <p><b>Page address:</b> ${document.URL}</p>
    <p><b>Last modified:</b> ${document.lastModified}</p>
  `;
  
  const footer = document.getElementById('footer');
  footer.innerHTML = msg3;
  
  //global javascipt object
  //Strings
  const saying = 'Home sweet home';
  const msg4 = `
    <h2>Sting Methods</h2>
    <h2>string length</h2>
    <p>${saying.length}</p>
    <h2>uppercase</h2>
    <p>${saying.toUpperCase()}</p>
    <h2>lowercase</h2>
    <p>${saying.toLowerCase()}</p>
    <h2>Character Index: 12</h2>
    <p>${saying.charAt(12)}</p>
    <h2>first ee</h2>
    <p>${saying.indexOf('ee')}</p>
    <h2>last e</h2>
    <p>${saying.lastIndexOf('e')}</p>
    <h2>character index: 8-14</h2>
    <p>${saying.substring(8, 14)}</p>
    <h2>replace</h2>
    <p>${saying.replace('me', 'w')}</p>
  `;
  
  var elInfo2 = document.getElementById('info2');
  elInfo2.innerHTML = msg4;
  
  //Numbers
  
  const number = 13.8765432100;
  const numberMsg = `
    <h2>Number Methods</h2>
    <h2>Original No.</h2>
    <p>${number}</p>
    <h2>3 Decimal Places</h2>
    <p>${number.toFixed(3)}</p>
    <h2>3 Digits</h2>
    <p>${number.toPrecision(3)}</p>
  `;
  
  const elNumber = document.getElementById('info3');
  elNumber.innerHTML = numberMsg;
  
  // Math Objects
  let randomNum = Math.ceil(Math.random() * 10) + 1;
  
  for(let i=0; i<=10; i++) {
    
    setInterval(randomNum, 3000);
  }
  
  const elRandomNum = document.getElementById('info4');
  elRandomNum.innerHTML = `
  <h2>Random Number</h2>
  <p>${randomNum}</p>`;
  
  //Date Object
  
  function printTime() {
    const day = new Date();
    let hours = day.getHours();
    let mins = day.getMinutes();
    let secs = day.getSeconds();
  
    const time = document.getElementById('time');
    time.innerHTML = `<span>${hours}</span>:<span>${mins}</span>:<span>${secs}</span>`;
  }
  
  function myFunction(x) {
    if (x.matches) {
      let myTime = document.getElementById('time');
      myTime.style.display = 'none';
    }else if(!x.matches) {
      setInterval(printTime, 1000);
    }
  }
  
  
  
  const x = window.matchMedia("(max-width: 500px)");
  myFunction(x);
  x.addListener(myFunction);
s  