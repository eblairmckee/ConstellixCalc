// Define Global Variables
var domainTotal = document.getElementById('domains');
var recordTotal = document.getElementById('records');
var gtdTotal = document.getElementById('gtd');
var geoProxConfTotal = document.getElementById('geoProxConf');
var geoProxAppTotal = document.getElementById('geoProxApp');
var geoFilterConfTotal = document.getElementById('geoFilterConf');
var geoFilterAppTotal = document.getElementById('geoFilterApp');
var anameTotal = document.getElementById('aname');
var poolConfTotal = document.getElementById('poolConf');
var poolAppTotal = document.getElementById('poolApp');
var userTotal = document.getElementById('users');
var form = document.getElementById('calcform');
var monthlyTotal = 0;

// Domain Calculation
function domainNumber(num) {
    if (num > 0 && num < 2){
       monthlyTotal += 5; 
    } else if (num >= 2 && num < 26) {
       var oneDomain = num - 1;
       var total = oneDomain * .5 + 5;
       monthlyTotal += total;
    } else if (num > 25){
        var oneDomain = num - 1;
        var twentyfiveDomain = oneDomain - 24;
        var total = twentyfiveDomain * .1 + 17;
        monthlyTotal += total;
    } else 
       alert("Please enter number of domains");
};

// Record Calculation
function recordNumber(num) {
    if (num > 100) {
        var newNum = num - 100;
        total = Math.round(newNum/100) * .5;
         monthlyTotal += total;
   
    } else
        monthlyTotal += 0;  
};

//GTD Calculation
function gtdNumber(num) {
    if (num == 1) {
        monthlyTotal += 5; 
    } else if (num > 1 && num < 100) {
        var total = num - 1 + 5;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Geo Proximity Configured
function geoProxConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Geo Proximity Applied
function geoProxAppNumber(num) {
    if (num > .99) {
        var total = num * .05;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Geo Filter Configured
function geoFilterConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Geo Filter Applied 
function geoFilterAppNumber(num) {
    if (num > .99) {
        var total = num * .05;
        monthlyTotal += total;
    } else
    monthlyTotal += 0;
};

//ANAME 
function anameNumber(num) {
    if (num > .99) {
        var total = num * .1;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Pool Configured 
function poolConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Pool Applied 
function poolAppNumber(num) {
    if (num > .99) {
        var total = num * .1;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

//Additiona User Accounts
function userNumber(num) {
    if (num > 0 && num <= 10) {
        var total = num * 2;
        monthlyTotal += total;
    } else if (num > 10 && num <= 100) {
        var newNum = num - 10;
        var total = newNum * 1 + 20;
        monthlyTotal += total;
    } else if (num > 100) {
        var total = (num - 100) * .5 + 110;
        monthlyTotal += total;
    } else
        monthlyTotal += 0;
};

// First Submit Button (DNS Calc)
buttonTotal.onclick = function(){
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
    console.log(monthlyTotal);
    document.getElementById("total").innerHTML = "Total:" + " " + "$" + monthlyTotal.toFixed(2);
    monthlyTotal = 0;
    return false;
};

// First Clear Button
clearButton.onclick = function(){
  document.getElementById("domains").value="";
  return false;
};

// Second Clear Button 
/*buttonClear.onclick = function(){
  document.getElementById("sonarNode").value="";
  return false;
};*/

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


/*------------------------------------------Constellix Sonar------------------------------------------------------*/
/*var counter = 0;
addCheck.onclick = function() {
    var y = document.createElement('div');
    var r = document.createElement('input')
    var a = document.createElement('button')
    y.setAttribute("class", "form-group");
    r.setAttribute("class" , "form-control");
    r.setAttribute("id" , "user" + ++counter);
    r.setAttribute("type", "number");
    r.setAttribute("min", "1");
    r.setAttribute("placeholser","Number of checks");
    a.setAttribute("id", "sonarDelete");
    a.setAttribute("class", "btn btn-danger glyphicon glyphicon-remove-sign");
    y.appendChild(r);
    y.appendChild(a);
    document.getElementById("sonarCalc").appendChild(y);
    //document.getElementById("sonarCalc").appendChild(r);
    return false;
}*/

$('#addCheck').click(function() {
    $('#group1').after('<div class="form-group container">\
                            <div class="container">\
                                <label for="sonarCheck" class="consrol-label">Checks</label>\
                            <div class="row">\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="user" type="number" min="1" placeholder="Number Of Checks"></input>\
                                </div>\
                            </div>\
                            </div>\
                            <div class="form-check col-xs-8"><label class="form-check-label"><input type="checkbox" class="form-check-input">Check me out</label>\
                                <label class="form-check-label"><input type="checkbox" class="form-check-input">Check me out</label>\
                                <label class="form-check-label"><input type="checkbox" class="form-check-input">Check me out</label>\
                                <label class="form-check-label"><input type="checkbox" class="form-check-input">Check me out</label>\
                                <label class="form-check-label"><input type="checkbox" class="form-check-input">Check me out</label>\
                                <label class="form-check-label"><input type="checkbox" class="form-check-input">Check me out</label>\
                            </div>\
                                <button class="btn btn-danger glyphicon glyphicon-remove-sign col-xs-1" id="sonarDelete"></button>\
                         </div>');
                            return false;
});
$('#sonarCalc').on('click','#sonarDelete',function() {
    $(this).parent().remove();
});