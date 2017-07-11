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
    mon1 = document.getElementById(`asia-pac1${ i}`).checked ? 1 : 0;
    mon2 = document.getElementById(`asia-pac2${ i}`).checked ? 1 : 0;
    mon3 = document.getElementById(`asia-pac3${ i}`).checked ? 1 : 0;
    mon4 = document.getElementById(`asia-pac4${ i}`).checked ? 1 : 0;
    mon5 = document.getElementById(`asia-pac5${ i}`).checked ? 1 : 0;
    mon6 = document.getElementById(`oceania1${i}`).checked ? 1 : 0;
    mon7 = document.getElementById(`oceania2${i}`).checked ? 1 : 0;
    mon8 = document.getElementById(`oceania3${i}`).checked ? 1 : 0;
    mon9 = document.getElementById(`europe1${ i}`).checked ? 1 : 0;
    mon10 = document.getElementById(`europe2${ i}`).checked ? 1 : 0;
    mon11 = document.getElementById(`europe3${ i}`).checked ? 1 : 0;
    mon12 = document.getElementById(`europe4${ i}`).checked ? 1 : 0;
    mon13 = document.getElementById(`europe5${ i}`).checked ? 1 : 0;
    mon14 = document.getElementById(`europe6${ i}`).checked ? 1 : 0;
    mon15 = document.getElementById(`europe7${ i}`).checked ? 1 : 0;
    mon16 = document.getElementById(`europe8${ i}`).checked ? 1 : 0;
    mon17 = document.getElementById(`europe9${ i}`).checked ? 1 : 0;
    mon18 = document.getElementById(`useast1${i}`).checked ? 1 : 0;
    mon19 = document.getElementById(`useast2${i}`).checked ? 1 : 0;
    mon20 = document.getElementById(`useast3${i}`).checked ? 1 : 0;
    mon21 = document.getElementById(`useast4${i}`).checked ? 1 : 0;
    mon22 = document.getElementById(`useast5${i}`).checked ? 1 : 0;
    mon23 = document.getElementById(`useast6${i}`).checked ? 1 : 0;
    mon24 = document.getElementById(`uswest1${ i}`).checked ? 1 : 0;
    mon25 = document.getElementById(`uswest2${ i}`).checked ? 1 : 0;
    mon26 = document.getElementById(`uswest3${ i}`).checked ? 1 : 0;
    mon27 = document.getElementById(`uswest4${ i}`).checked ? 1 : 0;
    mon28 = document.getElementById(`uswest5${ i}`).checked ? 1 : 0;
    mon29 = document.getElementById(`uscentral1${ i}`).checked ? 1 : 0;
    mon30 = document.getElementById(`uscentral2${ i}`).checked ? 1 : 0;
   
    let policySelection;
    if (policyElement != null) {
      policySelection = policyElement.value;
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
      mon1 = document.getElementById(`asia-pac1${ i}`).checked ? 0.08 : 0;
      mon2 = document.getElementById(`asia-pac2${ i}`).checked ? 0.08 : 0;
      mon3 = document.getElementById(`asia-pac3${ i}`).checked ? 0.08 : 0;
      mon4 = document.getElementById(`asia-pac4${ i}`).checked ? 0.08 : 0;
      mon5 = document.getElementById(`asia-pac5${ i}`).checked ? 0.08 : 0;
      mon6 = document.getElementById(`oceania1${i}`).checked ? 0.12 : 0;
      mon7 = document.getElementById(`oceania2${i}`).checked ? 0.12 : 0;
      mon8 = document.getElementById(`oceania3${i}`).checked ? 0.12 : 0;
      mon9 = document.getElementById(`europe1${ i}`).checked ? 0.04 : 0;
      mon10 = document.getElementById(`europe2${ i}`).checked ? 0.04 : 0;
      mon11 = document.getElementById(`europe3${ i}`).checked ? 0.04 : 0;
      mon12 = document.getElementById(`europe4${ i}`).checked ? 0.04 : 0;
      mon13 = document.getElementById(`europe5${ i}`).checked ? 0.04 : 0;
      mon14 = document.getElementById(`europe6${ i}`).checked ? 0.04 : 0;
      mon15 = document.getElementById(`europe7${ i}`).checked ? 0.04 : 0;
      mon16 = document.getElementById(`europe8${ i}`).checked ? 0.04 : 0;
      mon17 = document.getElementById(`europe9${ i}`).checked ? 0.04 : 0;
      mon18 = document.getElementById(`useast1${i}`).checked ? 0.04 : 0;
      mon19 = document.getElementById(`useast2${i}`).checked ? 0.04 : 0;
      mon20 = document.getElementById(`useast3${i}`).checked ? 0.04 : 0;
      mon21 = document.getElementById(`useast4${i}`).checked ? 0.04 : 0;
      mon22 = document.getElementById(`useast5${i}`).checked ? 0.04 : 0;
      mon23 = document.getElementById(`useast6${i}`).checked ? 0.04 : 0;
      mon24 = document.getElementById(`uswest1${ i}`).checked ? 0.04 : 0;
      mon25 = document.getElementById(`uswest2${ i}`).checked ? 0.04 : 0;
      mon26 = document.getElementById(`uswest3${ i}`).checked ? 0.04 : 0;
      mon27 = document.getElementById(`uswest4${ i}`).checked ? 0.04 : 0;
      mon28 = document.getElementById(`uswest5${ i}`).checked ? 0.04 : 0;
      mon29 = document.getElementById(`uscentral1${ i}`).checked ? 0.04 : 0;
      mon30 = document.getElementById(`uscentral2${ i}`).checked ? 0.04 : 0;
      typeTotal = eval('(((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)) / policyTotal');
    } else if (typeTotal == 'HTTPS') {
      mon1 = document.getElementById(`asia-pac1${ i}`).checked ? 0.16 : 0;
      mon2 = document.getElementById(`asia-pac2${ i}`).checked ? 0.16 : 0;
      mon3 = document.getElementById(`asia-pac3${ i}`).checked ? 0.16 : 0;
      mon4 = document.getElementById(`asia-pac4${ i}`).checked ? 0.16 : 0;
      mon5 = document.getElementById(`asia-pac5${ i}`).checked ? 0.16 : 0;
      mon6 = document.getElementById(`oceania1${i}`).checked ? 0.24 : 0;
      mon7 = document.getElementById(`oceania2${i}`).checked ? 0.24 : 0;
      mon8 = document.getElementById(`oceania3${i}`).checked ? 0.24 : 0;
      mon9 = document.getElementById(`europe1${ i}`).checked ? 0.8 : 0;
      mon10 = document.getElementById(`europe2${ i}`).checked ? 0.8 : 0;
      mon11 = document.getElementById(`europe3${ i}`).checked ? 0.8 : 0;
      mon12 = document.getElementById(`europe4${ i}`).checked ? 0.8 : 0;
      mon13 = document.getElementById(`europe5${ i}`).checked ? 0.8 : 0;
      mon14 = document.getElementById(`europe6${ i}`).checked ? 0.8 : 0;
      mon15 = document.getElementById(`europe7${ i}`).checked ? 0.8 : 0;
      mon16 = document.getElementById(`europe8${ i}`).checked ? 0.8 : 0;
      mon17 = document.getElementById(`europe9${ i}`).checked ? 0.8 : 0;
      mon18 = document.getElementById(`useast1${i}`).checked ? 0.8 : 0;
      mon19 = document.getElementById(`useast2${i}`).checked ? 0.8 : 0;
      mon20 = document.getElementById(`useast3${i}`).checked ? 0.8 : 0;
      mon21 = document.getElementById(`useast4${i}`).checked ? 0.8 : 0;
      mon22 = document.getElementById(`useast5${i}`).checked ? 0.8 : 0;
      mon23 = document.getElementById(`useast6${i}`).checked ? 0.8 : 0;
      mon24 = document.getElementById(`uswest1${ i}`).checked ? 0.8 : 0;
      mon25 = document.getElementById(`uswest2${ i}`).checked ? 0.8 : 0;
      mon26 = document.getElementById(`uswest3${ i}`).checked ? 0.8 : 0;
      mon27 = document.getElementById(`uswest4${ i}`).checked ? 0.8 : 0;
      mon28 = document.getElementById(`uswest5${ i}`).checked ? 0.8 : 0;
      mon29 = document.getElementById(`uscentral1${ i}`).checked ? 0.8 : 0;
      mon30 = document.getElementById(`uscentral2${ i}`).checked ? 0.8 : 0;
      const apTotal = mon1 + mon2 + mon3 + mon4 + mon5;
      const ocTotal = mon6 + mon7 + mon8;
      typeTotal = eval('((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)');
    } else if (typeTotal == 'HTTP Waterfall') {
      mon1 = document.getElementById(`asia-pac1${ i}`).checked ? 100 : 0;
      mon2 = document.getElementById(`asia-pac2${ i}`).checked ? 100 : 0;
      mon3 = document.getElementById(`asia-pac3${ i}`).checked ? 100 : 0;
      mon4 = document.getElementById(`asia-pac4${ i}`).checked ? 100 : 0;
      mon5 = document.getElementById(`asia-pac5${ i}`).checked ? 100 : 0;
      mon6 = document.getElementById(`oceania1${i}`).checked ? 150 : 0;
      mon7 = document.getElementById(`oceania2${i}`).checked ? 150 : 0;
      mon8 = document.getElementById(`oceania3${i}`).checked ? 150 : 0;
      mon9 = document.getElementById(`europe1${ i}`).checked ? 50 : 0;
      mon10 = document.getElementById(`europe2${ i}`).checked ? 50 : 0;
      mon11 = document.getElementById(`europe3${ i}`).checked ? 50 : 0;
      mon12 = document.getElementById(`europe4${ i}`).checked ? 50 : 0;
      mon13 = document.getElementById(`europe5${ i}`).checked ? 50 : 0;
      mon14 = document.getElementById(`europe6${ i}`).checked ? 50 : 0;
      mon15 = document.getElementById(`europe7${ i}`).checked ? 50 : 0;
      mon16 = document.getElementById(`europe8${ i}`).checked ? 50 : 0;
      mon17 = document.getElementById(`europe9${ i}`).checked ? 50 : 0;
      mon18 = document.getElementById(`useast1${i}`).checked ? 50 : 0;
      mon19 = document.getElementById(`useast2${i}`).checked ? 50 : 0;
      mon20 = document.getElementById(`useast3${i}`).checked ? 50 : 0;
      mon21 = document.getElementById(`useast4${i}`).checked ? 50 : 0;
      mon22 = document.getElementById(`useast5${i}`).checked ? 50 : 0;
      mon23 = document.getElementById(`useast6${i}`).checked ? 50 : 0;
      mon24 = document.getElementById(`uswest1${ i}`).checked ? 50 : 0;
      mon25 = document.getElementById(`uswest2${ i}`).checked ? 50 : 0;
      mon26 = document.getElementById(`uswest3${ i}`).checked ? 50 : 0;
      mon27 = document.getElementById(`uswest4${ i}`).checked ? 50 : 0;
      mon28 = document.getElementById(`uswest5${ i}`).checked ? 50 : 0;
      mon29 = document.getElementById(`uscentral1${ i}`).checked ? 50 : 0;
      mon30 = document.getElementById(`uscentral2${ i}`).checked ? 50 : 0;
      typeTotal = eval('((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)');
    } else if (typeTotal == 'HTTPS Waterfall') {
      mon1 = document.getElementById(`asia-pac1${ i}`).checked ? 160 : 0;
      mon2 = document.getElementById(`asia-pac2${ i}`).checked ? 160 : 0;
      mon3 = document.getElementById(`asia-pac3${ i}`).checked ? 160 : 0;
      mon4 = document.getElementById(`asia-pac4${ i}`).checked ? 160 : 0;
      mon5 = document.getElementById(`asia-pac5${ i}`).checked ? 160 : 0;
      mon6 = document.getElementById(`oceania1${i}`).checked ? 160 : 0;
      mon7 = document.getElementById(`oceania2${i}`).checked ? 160 : 0;
      mon8 = document.getElementById(`oceania3${i}`).checked ? 160 : 0;
      mon9 = document.getElementById(`europe1${ i}`).checked ? 60 : 0;
      mon10 = document.getElementById(`europe2${ i}`).checked ? 60 : 0;
      mon11 = document.getElementById(`europe3${ i}`).checked ? 60 : 0;
      mon12 = document.getElementById(`europe4${ i}`).checked ? 60 : 0;
      mon13 = document.getElementById(`europe5${ i}`).checked ? 60 : 0;
      mon14 = document.getElementById(`europe6${ i}`).checked ? 60 : 0;
      mon15 = document.getElementById(`europe7${ i}`).checked ? 60 : 0;
      mon16 = document.getElementById(`europe8${ i}`).checked ? 60 : 0;
      mon17 = document.getElementById(`europe9${ i}`).checked ? 60 : 0;
      mon18 = document.getElementById(`useast1${i}`).checked ? 60 : 0;
      mon19 = document.getElementById(`useast2${i}`).checked ? 60 : 0;
      mon20 = document.getElementById(`useast3${i}`).checked ? 60 : 0;
      mon21 = document.getElementById(`useast4${i}`).checked ? 60 : 0;
      mon22 = document.getElementById(`useast5${i}`).checked ? 60 : 0;
      mon23 = document.getElementById(`useast6${i}`).checked ? 60 : 0;
      mon24 = document.getElementById(`uswest1${ i}`).checked ? 60 : 0;
      mon25 = document.getElementById(`uswest2${ i}`).checked ? 60 : 0;
      mon26 = document.getElementById(`uswest3${ i}`).checked ? 60 : 0;
      mon27 = document.getElementById(`uswest4${ i}`).checked ? 60 : 0;
      mon28 = document.getElementById(`uswest5${ i}`).checked ? 60 : 0;
      mon29 = document.getElementById(`uscentral1${ i}`).checked ? 60 : 0;
      mon30 = document.getElementById(`uscentral2${ i}`).checked ? 60 : 0;
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
                                  <li><a href="#" class="small" data-value="option1" id="asia-pac1${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Banglore, India</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="asia-pac2${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Hong Kong</a></li>\
                                  <li><a href="#" class="small" data-value="option3" id="asia-pac3${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Singapore, Singapore</a></li>\
                                  <li><a href="#" class="small" data-value="option4" id="asia-pac4${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Tokyp Japan</a></li>\
                                  <li><a href="#" class="small" data-value="option5" id="asia-pac5${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Chennai, India</a></li>\
                                 </ul>\
                                 </dif>\
                               </div>\
                               <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>Oceania</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" id="oceania1${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Adelaide, Australia</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="oceania2${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Aydney, Australia</a></li>\
                                  <li><a href="#" class="small" data-value="option3" id="oceania3${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Auckland, New Zealand</a></li>\
                                 </ul>\
                                 </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>Europe</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" id="europe1${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Frankfurt,Germany</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="europe2${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Milan, Italy</a></li>\
                                  <li><a href="#" class="small" data-value="option3" id="europe3${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Paris, France</a></li>\
                                  <li><a href="#" class="small" data-value="option4" id="europe4${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Amsterdam, Netherlands-1</a></li>\
                                  <li><a href="#" class="small" data-value="option5" id="europe5${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Amsterdam, Netherlands-2</a></li>\
                                  <li><a href="#" class="small" data-value="option6" id="europe6${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;London, Great Britain-1</a></li>\
                                  <li><a href="#" class="small" data-value="option6" id="europe7${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;London, Great Britain-2</a></li>\
                                  <li><a href="#" class="small" data-value="option6" id="europe8${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Vienna, Austria</a></li>\
                                  <li><a href="#" class="small" data-value="option6" id="europe9${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Copenhagen, Denmark</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>US East</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" id="useast1${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Toronto, Canada</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="useast2${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Atlanta, GA</a></li>\
                                  <li><a href="#" class="small" data-value="option3" id="useast3${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Washington, DC</a></li>\
                                  <li><a href="#" class="small" data-value="option4" id="useast4${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Newark, NJ</a></li>\
                                  <li><a href="#" class="small" data-value="option5" id="useast5${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;New York, NY-1</a></li>\
                                  <li><a href="#" class="small" data-value="option6" id="useast6${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;New York, NY-2</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>US West</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" id="uswest1${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Los Angeles, CA</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="uswest2${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Fremont, CA</a></li>\
                                  <li><a href="#" class="small" data-value="option3" id="uswest3${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;San Jose, CA</a></li>\
                                  <li><a href="#" class="small" data-value="option4" id="uswest4${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;San Francisco, CA</a></li>\
                                  <li><a href="#" class="small" data-value="option5" id="uswest5${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Seattle, WA</a></li>\
                                 </ul>\
                                </div>\
                               </div>\
                                <div class="button-group">\
                               <div class="col-xs-2">\
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\
                                <span>US Central</span>\
                                 <span class="caret"></span></button>\
                                 <ul class="dropdown-menu">\
                                  <li><a href="#" class="small" data-value="option1" id="uscentral1${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Chicago, IL</a></li>\
                                  <li><a href="#" class="small" data-value="option2" id="uscentral2${counter}" tabIndex="-1"><input type="checkbox"/>&nbsp;Dallas, TX</a></li>\
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

