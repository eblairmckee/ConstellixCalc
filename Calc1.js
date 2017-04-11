// Define Global Variables
const domainTotal = document.getElementById('domains');
const recordTotal = document.getElementById('records');
const gtdTotal = document.getElementById('gtd');
const geoProxConfTotal = document.getElementById('geoProxConf');
const geoProxAppTotal = document.getElementById('geoProxApp');
const geoFilterConfTotal = document.getElementById('geoFilterConf');
const geoFilterAppTotal = document.getElementById('geoFilterApp');
const anameTotal = document.getElementById('aname');
const poolConfTotal = document.getElementById('poolConf');
const poolAppTotal = document.getElementById('poolApp');
const userTotal = document.getElementById('users');
const form = document.getElementById('calcform');
let dnsTotal = 0;
let monthlyDnsTotal = 0;
let monthlyTotal = 0;


// Domain Calculation
function domainNumber(num) {
  if (num > 0 && num < 2) {
    dnsTotal += 5;
  } else if (num >= 2 && num < 26) {
    const oneDomain = num - 1;
    const total = oneDomain * 0.5 + 5;
    dnsTotal += total;
  } else if (num > 25) {
    const oneDomain = num - 1;
    const twentyfiveDomain = oneDomain - 24;
    const total = twentyfiveDomain * 0.1 + 17;
    dnsTotal += total;
  } else       { alert('Please enter number of domains'); }
}

// Record Calculation
function recordNumber(num) {
  if (num > 100) {
    const newNum = num - 100;
    total = Math.round(newNum / 100) * 0.5;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// GTD Calculation
function gtdNumber(num) {
  if (num == 1) {
    dnsTotal += 5;
  } else if (num > 1 && num < 100) {
    const total = num - 1 + 5;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Geo Proximity Configured
function geoProxConfNumber(num) {
  if (num > 0.99) {
    const total = num * 0.01;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Geo Proximity Applied
function geoProxAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.05;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Geo Filter Configured
function geoFilterConfNumber(num) {
  if (num > 0.99) {
    const total = num * 0.01;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Geo Filter Applied
function geoFilterAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.05;
    dnsTotal += total;
  } else    { dnsTotal += 0; }
}

// ANAME
function anameNumber(num) {
  if (num > 0.99) {
    const total = num * 0.1;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Pool Configured
function poolConfNumber(num) {
  if (num > 0.99) {
    const total = num * 0.01;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Pool Applied
function poolAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.1;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Additiona User Accounts
function userNumber(num) {
  if (num > 0 && num <= 10) {
    const total = num * 2;
    dnsTotal += total;
  } else if (num > 10 && num <= 100) {
    const newNum = num - 10;
    const total = newNum * 1 + 20;
    dnsTotal += total;
  } else if (num > 100) {
    const total = (num - 100) * 0.5 + 110;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}


// First Submit Button (DNS Calc)
buttonTotal.onclick = function () {
  domainNumber(domainTotal.value);
  recordNumber(recordTotal.value);
  gtdNumber(gtdTotal.value);
  geoProxConfNumber(geoProxConfTotal.value);
  geoProxAppNumber(geoProxAppTotal.value);
  geoFilterConfNumber(geoFilterConfTotal.value);
  geoFilterAppNumber(geoFilterAppTotal.value);
  anameNumber(anameTotal.value);
  poolConfNumber(poolConfTotal.value);
  poolAppNumber(poolAppTotal.value);
  userNumber(userTotal.value);
  monthlyDnsTotal = dnsTotal;
  monthlyTotal = monthlyDnsTotal + 10; //  10 is a place holder for the Sonar Total
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${  monthlyTotal.toFixed(2)}`;
  dnsTotal = 0;
  return false;
};

// First Clear Button
clearButton.onclick = function () {
  document.getElementById('domains').value = '';
  document.getElementById('records').value = '';
  document.getElementById('gtd').value = '';
  document.getElementById('geoProxConf').value = '';
  document.getElementById('geoProxApp').value = '';
  document.getElementById('geoFilterConf').value = '';
  document.getElementById('geoFilterApp').value = '';
  document.getElementById('aname').value = '';
  document.getElementById('poolConf').value = '';
  document.getElementById('poolApp').value = '';
  document.getElementById('users').value = '';
  monthlyTotal -= monthlyDnsTotal;
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${  monthlyTotal.toFixed(2)}`;
  return false;
};

// Plus Minus Symbol
function toggleIcon(e) {
  $(e.target)
        .prev('.panel-heading')
        .find('.more-less')
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


/* ------------------------------------------Constellix Sonar------------------------------------------------------*/
/* var counter = 0;
var checkInput = null;
addCheck.onclick = function() {
    var formTag = document.createElement('form');
    var divA = document.createElement('div');
    var deleteButton = document.createElement('button');
    var divChecksA = document.createElement('div');
    var labelChecks = document.createElement('label');
    var labelChecksText = document.createTextNode("Number Of Checks");
    var divChecksB = document.createElement('div');
    var inputChecks = document.createElement('input');
    formTag.setAttribute("class", "form-horizontal");
    divA.setAttribute("class" , "jumbotron");
    divA.setAttribute("style" , "padding-top:10px;padding-left:10px;");
    deleteButton.setAttribute("id", "sonarDelete");
    deleteButton.setAttribute("class", "btn btn-danger glyphicon glyphicon-remove-sign");
    divChecksA.setAttribute("class" , "form-group");
    labelChecks.setAttribute("for" , "name");
    labelChecks.setAttribute("class" , "col-sm-3 control-label");
    divChecksB.setAttribute("class" , "col-xs-1");
    inputChecks.setAttribute("class" , "form-control col-xs-1");
    inputChecks.setAttribute("id" , "checks" + ++counter);
    inputChecks.setAttribute("type" , "number");
    inputChecks.setAttribute("min" , "1");
    formTag.appendChild(divA);
    divA.appendChild(deleteButton);
    divA.appendChild(divChecksA);
    divChecksA.appendChild(labelChecks);
    labelChecks.appendChild(labelChecksText);
    divChecksA.appendChild(divChecksB);
    divChecksB.appendChild(inputChecks);
    document.getElementById("sonarCalc").appendChild(formTag);
    checkInput = inputChecks;
    return false;
};*/

// Submit Button -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
i = 0;
let checkTotal;
let smsTotal;
let pushTotal;
let typeTotal;
let intervalTotal;
let policyTotal;

sonarTotal.onclick = function () {
  while (i <= counter - 1) {
    

  // Number Of Checks
    checkElement = document.getElementById(`checks${i}`);
    if (checkElement != null) {
      checkTotal = checkElement.value;
    } else {
      checkTotal = null;
    }
  // SMS Contacts
    smsElement = document.getElementById(`smsNotify${i}`);
    if (smsElement != null) {
      smsValue = smsElement.value * 0.01;
      smsTotal = smsValue;
    } else {
      smsTotal = null;
    }
  // Push Notifications
    pushElement = document.getElementById(`pushNotify${i}`);
    if (pushElement != null) {
      pushValue = pushElement.value * 0.001;
      pushTotal = pushValue;
    } else {
      pushTotal = null;
    }
  // Check Type
    typeElement = document.getElementById(`checkType${i}`);
    if (typeElement != null) {
      typeTotal = typeElement.value;
    } else {
      typeTotal = null;
    }
  // Check Interval
    intervalElement = document.getElementById(`interval${i}`);
    if (intervalElement != null) {
      intervalTotal = intervalElement.value;
    } else {
      intervalTotal = null;
    }

      // Check Interval Policy
    policyElement = document.getElementById(`intPolicy${i}`);
    mon1 = document.getElementById(`northAmE${ i}`).checked ? 1 : 0;
    mon2 = document.getElementById(`northAmW${ i}`).checked ? 1 : 0;
    mon3 = document.getElementById(`northAmC${ i}`).checked ? 1 : 0;
    mon4 = document.getElementById(`europe${ i}`).checked ? 1 : 0;
    mon5 = document.getElementById(`asiaPac${i}`).checked ? 1 : 0;
    mon6 = document.getElementById(`oceania${i}`).checked ? 1 : 0;
    let policySelection;
    if (policyElement != null) {
      policySelection = policyElement.value;
      console.log(policySelection);
    } else {
      policyTotal = null;
    }

    if (policySelection == 'Simultaneous') {
      policyTotal = 1;
    } else if (policySelection == 'Once Per Site') {
      policyTotal = eval('mon1 + mon2 + mon3 + mon4 + mon5 + mon6');
    }


      // Check Interval Variables

    if (intervalTotal == null) {
      intervalTotal = 0;
    } else if (intervalTotal === '30 sec') {
      intervalTotal = 86.4;
    } else if (intervalTotal === '60 sec') {
      intervalTotal = 43.2;
    } else if (intervalTotal === '5 min') {
      intervalTotal = 8.64;
    } else if (intervalTotal === '10 min') {
      intervalTotal = 4.32;
    } else if (intervalTotal === '30 min') {
      intervalTotal = 1.44;
    } else if (intervalTotal === '12 hrs') {
      intervalTotal = 0.06;
    } else if (intervalTotal === '24 hrs') {
      intervalTotal = 0.03;
      }

    // Check Type Variables
    if (typeTotal == null) {
      typeTotal = 0;
    } else if (typeTotal == 'DNS' || typeTotal == 'FTP' || typeTotal == 'SSH' || typeTotal == 'HTTP' || typeTotal == 'SMTP' || typeTotal == 'TCP') {
      mon1 = document.getElementById(`northAmE${i}`).checked ? 0.04 : 0;
      mon2 = document.getElementById(`northAmW${i}`).checked ? 0.04 : 0;
      mon3 = document.getElementById(`northAmC${i}`).checked ? 0.04 : 0;
      mon4 = document.getElementById(`europe${i}`).checked ? 0.04 : 0;
      mon5 = document.getElementById(`asiaPac${i}`).checked ? 0.08 : 0;
      mon6 = document.getElementById(`oceania${i}`).checked ? 0.12 : 0;
      typeTotal = eval('(((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)) / policyTotal');
    } else if (typeTotal == 'HTTPS') {
      mon1 = document.getElementById(`northAmE${i}`).checked ? 0.08 : 0;
      mon2 = document.getElementById(`northAmW${i}`).checked ? 0.08 : 0;
      mon3 = document.getElementById(`NorthAmC${i}`).checked ? 0.08 : 0;
      mon4 = document.getElementById(`europe${i}`).checked ? 0.08 : 0;
      mon5 = document.getElementById(`asiaPac${i}`).checked ? 0.16 : 0;
      mon6 = document.getElementById(`oceania${i}`).checked ? 0.24 : 0;
      typeTotal = eval('((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)');
    } else if (typeTotal == 'HTTP Waterfall') {
      mon1 = document.getElementById(`northAmE${i}`).checked ? 50 : 0;
      mon2 = document.getElementById(`northAmW${i}`).checked ? 50 : 0;
      mon3 = document.getElementById(`NorthAmC${i}`).checked ? 50 : 0;
      mon4 = document.getElementById(`europe${i}`).checked ? 50 : 0;
      mon5 = document.getElementById(`asiaPac${i}`).checked ? 100 : 0;
      mon6 = document.getElementById(`oceania${i}`).checked ? 150 : 0;
      typeTotal = eval('((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)');
    } else if (typeTotal == 'HTTPS Waterfall') {
      mon1 = document.getElementById(`northAmE${i}`).checked ? 60 : 0;
      mon2 = document.getElementById(`northAmW${i}`).checked ? 60 : 0;
      mon3 = document.getElementById(`NorthAmC${ i}`).checked ? 60 : 0;
      mon4 = document.getElementById(`europe${i}`).checked ? 60 : 0;
      mon5 = document.getElementById(`asiaPac${i}`).checked ? 160 : 0;
      mon6 = document.getElementById(`oceania${i}`).checked ? 160 : 0;
      typeTotal = eval('((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)');
    }

    //console.log(typeTotal.toFixed(2));
    //console.log(intervalTotal);
    //console.log(pushTotal);
    //console.log(checkTotal);
    //console.log(smsTotal);
    //console.log(policyTotal);
// Adds +1 to i
    i++;
  }
// Returns i to 0
  i = 0;
  return false;
};


// counter for ID
// divA.setAttribute("style" , "user" + ++counter);

// Adding A New Check
var counter = 0;
$('#addCheck').click(() => {
  $('#group1').after(`<form class="form-horizontal">\
                        <div class="jumbotron checkFields" style="padding-top:10px;padding-left:10px;">\
                        <button class="btn btn-danger glyphicon glyphicon-remove-sign" id="sonarDelete"></button>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Number Of Checks</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="checks${counter}" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">SMS Contacts</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="smsNotify${counter}" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Push Notifications</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="pushNotify${counter}" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Check Type</label>\
                                <div class="col-sm-2">\
                                        <select class="form-control" id="checkType${counter}">\
                                            <option>HTTP</option>\
                                            <option>HTTPS</option>\
                                            <option>TCP</option>\
                                            <option>DNS</option>\
                                            <option>HTTP Waterfall</option>\
                                            <option>HTTPS Waterfall</option>\
                                        </select>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Check Interval</label>\
                                <div class="col-sm-2">\
                                        <select class="form-control" id="interval${counter}" >\
                                            <option>30 sec</option>\
                                            <option>60 sec</option>\
                                            <option>5 min</option>\
                                            <option>10 min</option>\
                                            <option>30 min</option>\
                                            <option>12 hrs</option>\
                                            <option>24 hrs</option>\
                                        </select>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Check Interval Policy</label>\
                                <div class="col-sm-2">\
                                        <select class="form-control" id="intPolicy${counter}">\
                                            <option>Simultaneous</option>\
                                            <option>Once Per Site</option>\
                                        </select>\
                                </div>\
                            </div>\
                             <div class="row">\
                              <label for="name" class="col-xs-3 control-label">Check Interval Policy</label>\
                               <div class="button-group">\
                               <dif class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>Asia-Pac</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" id="northAmE${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Banglore, India</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="northAmW${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Hong Kong</a></li>\
                                  <li><a href="#" class="small" data-value="option3" id="northAmC${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Singapore, Singapore</a></li>\
                                  <li><a href="#" class="small" data-value="option4" id="europe${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Tokyp Japan</a></li>\
                                  <li><a href="#" class="small" data-value="option5" id="asiaPac${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Chennai, India</a></li>\
                                 </ul>\
                                 </dif>\
                               </div>\
                               <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>Oceania</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 1</a></li>\
                                  <li><a href="#" class="small" data-value="option2" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 2</a></li>\
                                  <li><a href="#" class="small" data-value="option3" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 3</a></li>\
                                  <li><a href="#" class="small" data-value="option4" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 4</a></li>\
                                  <li><a href="#" class="small" data-value="option5" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 5</a></li>\
                                  <li><a href="#" class="small" data-value="option6" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 6</a></li>\
                                 </ul>\
                                 </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>Europe</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 1</a></li>\
                                  <li><a href="#" class="small" data-value="option2" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 2</a></li>\
                                  <li><a href="#" class="small" data-value="option3" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 3</a></li>\
                                  <li><a href="#" class="small" data-value="option4" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 4</a></li>\
                                  <li><a href="#" class="small" data-value="option5" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 5</a></li>\
                                  <li><a href="#" class="small" data-value="option6" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 6</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>US East</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 1</a></li>\
                                  <li><a href="#" class="small" data-value="option2" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 2</a></li>\
                                  <li><a href="#" class="small" data-value="option3" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 3</a></li>\
                                  <li><a href="#" class="small" data-value="option4" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 4</a></li>\
                                  <li><a href="#" class="small" data-value="option5" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 5</a></li>\
                                  <li><a href="#" class="small" data-value="option6" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 6</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>US West</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 1</a></li>\
                                  <li><a href="#" class="small" data-value="option2" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 2</a></li>\
                                  <li><a href="#" class="small" data-value="option3" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 3</a></li>\
                                  <li><a href="#" class="small" data-value="option4" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 4</a></li>\
                                  <li><a href="#" class="small" data-value="option5" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 5</a></li>\
                                  <li><a href="#" class="small" data-value="option6" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 6</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>US Central</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 1</a></li>\
                                  <li><a href="#" class="small" data-value="option2" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 2</a></li>\
                                  <li><a href="#" class="small" data-value="option3" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 3</a></li>\
                                  <li><a href="#" class="small" data-value="option4" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 4</a></li>\
                                  <li><a href="#" class="small" data-value="option5" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 5</a></li>\
                                  <li><a href="#" class="small" data-value="option6" tabIndex="-1"><input type="checkbox"/>&nbsp;Option 6</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                              </div>\
                             </div>\
                            </div>\
                         </form>`);
  counter++;
  return false;
});


/* sonarTotal.onclick = function(form) {
    for (var i = 1; i <= 3; i++) {
        alert(form[checks+i].value);  // Here's where my problem is..
    }
}*/

// BUTTON ACTION jQuery
$('#sonarCalc').on('click', '#sonarDelete', function () {
  $(this).parent().remove();
});

