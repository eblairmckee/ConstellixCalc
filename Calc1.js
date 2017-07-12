// Define Global Variables
const domainTotal = document.getElementById('domains');
const recordTotal = document.getElementById('records');
const gtdTotal = document.getElementById('gtd');
const geoProxAppTotal = document.getElementById('geoProxApp');
const geoFilterAppTotal = document.getElementById('geoFilterApp');
const anameTotal = document.getElementById('aname');
const poolAppTotal = document.getElementById('poolApp');
const userTotal = document.getElementById('users');
const form = document.getElementById('calcform');
const stnrdQryTotal = document.getElementById('standardQ');
const geoFilQryTotal = document.getElementById('geofilterQ');
const geoProxQryTotal = document.getElementById('geoproxQ');
const anameQryTotal = document.getElementById('anameQ');
let dnsTotal = 0;
let monthlyDnsTotal = 0;
let monthlyTotal = 0;

// Default Price
$( document ).ready(function() {
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${  monthlyTotal.toFixed(2)}`;
});

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

// Geo Proximity Applied
function geoProxAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.06;
    dnsTotal += total;
  } else        { dnsTotal += 0; }
}

// Geo Filter Applied
function geoFilterAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.06;
    dnsTotal += total;
  } else    { dnsTotal += 0; }
}

// ANAME
function anameNumber(num) {
  if (num > 0.99) {
    const total = num * 0.1;
    dnsTotal += total;
  } else { 
    dnsTotal += 0; 
  }
}

// Pool Applied
function poolAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.11;
    dnsTotal += total;
  } else {
    dnsTotal += 0; 
  }
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
  } else { 
    dnsTotal += 0; 
  }
}

// Standard Queries
function standardQueries(num) {
  if (num > 0 && num <= 1000000000){
    dnsTotal += (num * .1975) * .000002;
  } else if (num > 1000000000) {
    dnsTotal += (num * .0000975) * .0000002;
  } else {
    dnsTotal += 0;
  }
}

// Geo Filter Queries
function geoFilterQueries(num) {
  if (num > 0 && num <= 1000000000) {
    dnsTotal += (num * .35) * .000002;
  } else if (num > 1000000000) {
    dnsTotal += (num * .000175) * .000002;
  } else {
    dnsTotal += 0;
  }
}

// Geo Proximity Queries
function geoProxQueries(num) {
  if (num > 0 && num <= 1000000000) {
    dnsTotal += (num * .3) * .000002;
  } else if (num > 1000000000) {
    dnsTotal += (num * .00015) * .000002;
  } else {
    dnsTotal += 0;
  }
}

// ANAME Queries
function anameQueries(num) {
   if (num > 0 && num <= 1000000000){
    dnsTotal += (num * .1975) * .000002;
  } else if (num > 1000000000) {
    dnsTotal += (num * .0000975) * .0000002;
  } else {
    dnsTotal += 0;
  }
}

// First Submit Button (DNS Calc)
buttonTotal.onclick = function () {
  domainNumber(domainTotal.value);
  recordNumber(recordTotal.value);
  gtdNumber(gtdTotal.value);
  geoProxAppNumber(geoProxAppTotal.value);
  geoFilterAppNumber(geoFilterAppTotal.value);
  anameNumber(anameTotal.value);
  poolAppNumber(poolAppTotal.value);
  userNumber(userTotal.value);
  standardQueries(stnrdQryTotal.value);
  geoFilterQueries(geoFilQryTotal.value);
  geoProxQueries(geoProxQryTotal.value);
  anameQueries(anameQryTotal.value);
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
  document.getElementById('geoProxApp').value = '';
  document.getElementById('geoFilterApp').value = '';
  document.getElementById('aname').value = '';
  document.getElementById('poolApp').value = '';
  document.getElementById('users').value = '';
  document.getElementById('standardQ').value = '';
  monthlyDnsTotal = 0;
  monthlyTotal = monthlyDnsTotal + 10; //  10 is a place holder for the Sonar Total
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
};
// Adding A New Check
var counter = 0;
$('#addCheck').click(() => {
  $('#group1').after(`<div class="jumbotron checkFields" style="padding-top:10px;padding-left:10px;">\
                        <button class="btn btn-danger glyphicon glyphicon-remove-sign" id="sonarDelete"></button>\
                        <form class="form-horizontal">\
                            <div class="form-group">\
                                <label for="name" class="col-md-3 control-label">Number Of Checks</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-md-1" id="checks${counter}" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-md-3 control-label">SMS Contacts</label>\
                                <div class="col-md-1">\
                                    <input class="form-control col-md-1" id="smsNotify${counter}" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-md-3 control-label">Push Notifications</label>\
                                <div class="col-md-1">\
                                    <input class="form-control col-md-1" id="pushNotify${counter}" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-md-3 control-label">Check Type</label>\
                                <div class="col-md-2">\
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
                                <label for="name" class="col-md-3 control-label">Check Interval</label>\
                                <div class="col-md-2">\
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
                            
                            <div class="form-group">\
                                <label for="name" class="control-label col-md-3">Number Of Checks Per Region:</label>\
                            </div>\
                            </form>\
                            <form class="form-inline">\
                            <div class="form-group">\
                              <div class="col-md-5">\
                                <label for="name" class="control-label">North America</label>\
                              </div>\
                                <div class="input-group col-md-1">\
                                    <input class="form-control" id="pushNotify${counter}" type="number" min="1" max="10"></input>\
                                    <div class="input-group-addon">/30</div>\
                                </div>\
                              </div>\
                            </form>\
                           </div> `);
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

