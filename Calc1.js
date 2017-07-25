// Define Global Variables
let dnsTotal = 0;
let monthlyDnsTotal = 0;
let monthlyTotal = 0;
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


// Default Price
$(document).ready(() => {
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${monthlyTotal.toFixed(2)}`;
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
  } else { alert('Please enter number of domains'); }
}

// Record Calculation
function recordNumber(num) {
  if (num > 100) {
    const newNum = num - 100;
    total = Math.round(newNum / 100) * 0.5;
    dnsTotal += total;
  } else { dnsTotal += 0; }
}

// GTD Calculation
function gtdNumber(num) {
  if (num == 1) {
    dnsTotal += 5;
  } else if (num > 1 && num < 100) {
    const total = num - 1 + 5;
    dnsTotal += total;
  } else { dnsTotal += 0; }
}

// Geo Proximity Applied
function geoProxAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.06;
    dnsTotal += total;
  } else { dnsTotal += 0; }
}

// Geo Filter Applied
function geoFilterAppNumber(num) {
  if (num > 0.99) {
    const total = num * 0.06;
    dnsTotal += total;
  } else { dnsTotal += 0; }
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

// Add User Accounts
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
  if (num > 0 && num <= 1000) {
    dnsTotal += (num * 0.395);
  } else if (num > 1000) {
    dnsTotal += ((num - 1000) * 0.195) + 395;
  } else {
    dnsTotal += 0;
  }
}

// Geo Filter Queries
function geoFilterQueries(num) {
  if (num > 0 && num <= 1000) {
    dnsTotal += (num * 0.70);
  } else if (num > 1000) {
    dnsTotal += ((num - 1000) * 0.35) + 700;
  } else {
    dnsTotal += 0;
  }
}

// Geo Proximity Queries
function geoProxQueries(num) {
  if (num > 0 && num <= 1000) {
    dnsTotal += (num * 0.6);
  } else if (num > 1000) {
    dnsTotal += ((num - 1000) * .3) + 600;
  } else {
    dnsTotal += 0;
  }
}

// ANAME Queries
function anameQueries(num) {
  if (num > 0 && num <= 1000) {
    dnsTotal += (num * 0.1975) * 0.000002;
  } else if (num > 1000) {
    dnsTotal += (num * 0.0000975) * 0.0000002;
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
  monthlyTotal = monthlyDnsTotal + sonarVal; //  10 is a place holder for the Sonar Total
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${monthlyTotal.toFixed(2)}`;
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
  monthlyTotal = sonarVal - monthlyDnsTotal; //  10 is a place holder for the Sonar Total
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${monthlyTotal.toFixed(2)}`;
  return false;
};

// Plus Minus Symbol
function toggleIcon(e) {
  $(e.target)
        .prev('.panel-heading')
        .find('.more-less')
        .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


/* ------------------------------------------Constellix Sonar------------------------------------------------------*/

// Adding A New Check
let counter = 0;
$('#addCheck').click(() => {
  $('#group1').after(`<div class="jumbotron checkFields">\
                        <button class="btn btn-delete fa fa-times float-right" id="sonarDelete"></button>\
                        <form class="form-horizontal margin-top-50">\
                            <div class="form-group">\
                                <label for="name" class="col-md-6 control-label">
                                    Number Of Checks
                                    <a href="#" data-placement="bottom" title="Number of Checks" data-toggle="popover" data-trigger="hover" data-content="List the number of checks that will have identical settings">\
                                        <i class="fa fa-info-circle" aria-hidden="true"></i>\
                                    </a>\
                                </label>\
                                
                                <div class="col-md-4">\
                                    <input class="form-control col-md-1 " id="checks${counter}" type="number" value="1" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-md-6 control-label">Check Type
                                    <a href="https://constellix.com/sonar/sonarchecks/">\
                                        <i class="fa fa-info-circle" aria-hidden="true"></i>\
                                    </a>\
                                </label>\
                                <div class="col-md-4">\
                                        <select class="form-control sonar" id="checkType${counter}">\
                                            <option>HTTP</option>\
                                            <option>HTTPS</option>\
                                            <option>TCP</option>\
                                            <option>DNS</option>\
                                            <option>Waterfall</option>\
                                        </select>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-md-6 control-label">Check Interval</label>\
                                <div class="col-md-4">\
                                        <select class="form-control " id="interval${counter}" >\
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
                                <label for="name" class="col-md-6 control-label">Check Interval Policy
                                    <a href="#" data-placement="bottom" title="Check Interval Policy" data-toggle="popover" data-trigger="hover" data-content='<strong>Simultaneous:</strong> Run a check from all selcted locations at the same time based off of the "Check Interval Policy" selcted. <br> <strong>Once Per Site:</strong> Run a check from one location at a time based off of the "Check Interval Policy" selected.'>\
                                        <i class="fa fa-info-circle" aria-hidden="true"></i>\
                                    </a>\
                                </label>\
                                <div class="col-md-4">\
                                        <select class="form-control" id="intPolicy${counter}">\
                                            <option>Simultaneous</option>\
                                            <option>Once Per Site</option>\
                                        </select>\
                                </div>\
                            </div>\
                            
                            <div class="form-group">\
                                <label for="name" class="control-label col-xs-6">Number of Checks Per Region:</label>\
                            </div>\
                            </form>\
                            <form class="form-inline row margin-left-50 padding-top-10">\
                            <div class="form-group col-md-8 col-md-offset-2">\
                                <label for="name" class="control-label col-xs-6 col-md-8">North America</label>\
                                <div class="input-group col-xs-6 col-md-4">\
                                    <input class="form-control" id="northAmerica${counter}" type="number" min="1" max="22"></input>\
                                    <div class="input-group-addon">/22</div>\
                                </div>\
                              </div>\
                            </form>\
                            <form class="form-inline row margin-left-50 padding-top-10">\
                            <div class="form-group col-md-8 col-md-offset-2">\
                                <label for="name" class="control-label col-xs-6 col-md-8">Europe</label>\
                                <div class="input-group col-xs-6 col-md-4">\
                                    <input class="form-control" id="europe${counter}" type="number" min="1" max="10"></input>\
                                    <div class="input-group-addon">/9&nbsp;&nbsp;</div>\
                                </div>\
                              </div>\
                            </form>\
                            <form class="form-inline row margin-left-50 padding-top-10">\
                            <div class="form-group col-md-8 col-md-offset-2">\
                                <label for="name" class="control-label col-xs-6 col-md-8">Asia-Pac</label>\
                                <div class="input-group col-xs-6 col-md-4">\
                                    <input class="form-control" id="asiaPac${counter}" type="number" min="1" max="10"></input>\
                                    <div class="input-group-addon">/5&nbsp;&nbsp;</div>\
                                </div>\
                              </div>\
                            </form>\
                            <form class="form-inline row margin-left-50 padding-top-10">\
                            <div class="form-group col-md-8 col-md-offset-2">\
                                <label for="name" class="control-label col-xs-6 col-md-8">Oceania</label>\
                                <div class="input-group col-xs-6 col-md-4">\
                                    <input class="form-control" id="oceania${counter}" type="number" min="1" max="10"></input>\
                                    <div class="input-group-addon">/3&nbsp;&nbsp;</div>\
                                </div>\
                              </div>\
                            </form>\
                           </div> `);
  $('[data-toggle="popover"]').popover({html:true})
  counter++;
  return false;
});
let i = 0;
let sonarVal = 0;
sonarTotal.onclick = function () {
  let checkTotal = 0;
  let checkNumTotal = 0;
  for (i; i < counter; i++) {
    let checkTypeAm = 0;
    let checkTypeAp = 0;
    let checkTypeOc = 0;
    let checkInt = 0;
    const checkNum = document.getElementById(`checks${  i}`);
    const checkType = document.getElementById(`checkType${  i}`);
    const checkInterval = document.getElementById(`interval${  i}`);
    const checkIntPolicy = document.getElementById(`intPolicy${  i}`);
    const northAmerica = document.getElementById(`northAmerica${  i}`);
    const europe = document.getElementById(`europe${  i}`);
    const asiaPac = document.getElementById(`asiaPac${  i}`);
    const oceania = document.getElementById(`oceania${  i}`);

    // Number of checks
    if (checkNum == null) {
      checkNumTotal += 0;
    } else if (checkNum.value === '') {
      alert('Please enter "Number Of Checks"');
    } else {
      checkNumTotal += Number(checkNum.value);
    }

    // Check Type
    if (checkType == null) {
      checkTypeAm = 0;
      checkTypeAp = 0;
      checkTypeOc = 0;
    } else if (checkType.value == 'HTTP') {
      checkTypeAm = 0.00004;
      checkTypeAp = 0.00006;
      checkTypeOc = 0.00008;
    } else if (checkType.value == 'HTTPS') {
      checkTypeAm = 0.00006;
      checkTypeAp = 0.00008;
      checkTypeOc = 0.00010;
    } else if (checkType.value == 'DNS') {
      checkTypeAm = 0.00002;
      checkTypeAp = 0.00003;
      checkTypeOc = 0.00003;
    } else if (checkType.value == 'TCP') {
      checkTypeAm = 0.00002;
      checkTypeAp = 0.00003;
      checkTypeOc = 0.00003;
    } else if (checkType.value == 'Waterfall') {
      checkTypeAm = 0.000020;
      checkTypeAp = 0.00168;
      checkTypeOc = 0.00192;
    }

    // Check Interval
    if (checkInterval == null) {
      checkInt = 0;
    } else if (checkInterval.value == '30 sec') {
      checkInt = 86400;
    } else if (checkInterval.value == '60 sec') {
      checkInt = 42000;
    } else if (checkInterval.value == '5 min') {
      checkInt = 8640;
    } else if (checkInterval.value == '10 min') {
      checkInt = 4320;
    } else if (checkInterval.value == '30 min') {
      checkInt = 1440;
    } else if (checkInterval.value == '12 hrs') {
      checkInt = 60;
    } else if (checkInterval.value == '24 hrs') {
      checkInt = 30;
    }

    // Check Policy
    if (checkIntPolicy == null) {
      checkTotal += 0;
    } else if (checkIntPolicy.value == 'Simultaneous') {
      checkTotal += (((checkTypeAm * Number(europe.value)) * checkInt) + ((checkTypeAm * Number(northAmerica.value)) * checkInt) + ((checkTypeAp * Number(asiaPac.value)) * checkInt) + ((checkTypeOc * Number(oceania.value)) * checkInt)) * checkNumTotal;
    } else if (checkIntPolicy.value == 'Once Per Site') {
      const checkAll = checkInt /  (Number(europe.value) + Number(northAmerica.value) + Number(asiaPac.value) + Number(oceania.value));
      checkTotal += ((Number(europe.value) * checkTypeAm) * checkAll) + ((Number(northAmerica.value) * checkTypeAm) * checkAll) + ((Number(asiaPac.value) * checkTypeAp) * checkAll) + ((Number(oceania.value) * checkTypeOc) * checkAll);
      console.log(checkAll);
      // total / checkInt

     /*const cheAm = northAmerica.value ? 1 : 0;
      const cheEu = europe.value ? 1 : 0;
      const cheAp = asiaPac.value ? 1 : 0;
      const cheOc = oceania.value ? 1 : 0;
      checkTotal = (((checkTypeAm * cheAm) * checkInt) + ((checkTypeAm * cheEu) * checkInt) + ((checkTypeAp * cheAp) * checkInt) + ((checkTypeOc * cheOc) * checkInt)) * checkNumTotal;*/
    }
    checkNumTotal = 0;
  }

  i = 0;
  sonarVal = checkTotal;
  monthlyTotal = monthlyDnsTotal + sonarVal; //  10 is a place holder for the Sonar Total
  document.getElementById('total').innerHTML = `${'Total:' + ' ' + '$'}${monthlyTotal.toFixed(2)}`;

  checkTotal = 0;
  return false;
};
/* sonarTotal.onclick = function(form) {
    for (var i = 1; i <= 3; i++) {
        alert(form[checks+i].value);  // Here's where my problem is..
    }
  }*/

// BUTTON ACTION jQuery
$('#sonarCalc').on('click', '#sonarDelete', function () {
  $(this).parent().remove();
  sonarTotal.click(); 
});


