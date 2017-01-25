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
var form = document.getElementById('form');

// Domain Calculation
function domainNumber(num) {
    if (num > 0 && num < 2){
       domainTotal = 5; 
    } else if (num >= 2 && num < 26) {
       var oneDomain = num - 1;
       var total = oneDomain * .5 + 5;
       domainTotal = total;

    } else if (num > 25){
        var oneDomain = num - 1;
        var twentyfiveDomain = oneDomain - 24;
        var total = twentyfiveDomain * .1 + 17;
        domainTotal = total;
    } else 
       alert("Please enter number of domains")
};

// Record Calculation
function recordNumber(num) {
    if (num > 100) {
        var newNum = num - 100;
        total = Math.round(newNum/100) * .5;
        recordTotal = total;
   
    } else
        recordTotal = 0;  
};

//GTD Calculation
function gtdNumber(num) {
    if (num > 0 && num < 1) {
        gtdTotal = 5; 
    } else if (num > 1 && num < 100) {
        var newNum = num - 1;
        var total = newNum * 1
        gtdTotal = total;
    } else
        gtdTotal = 0;
};

//Geo Proximity Configured
function geoProxConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        geoProxConfTotal = total;
    } else
        geoProxConfTotal = 0;
};

//Geo Proximity Applied
function geoProxAppNumber(num) {
    if (num > .99) {
        var total = num * .05;
        geoProxAppTotal = total;
    } else
        geoProxAppTotal = 0;
};

//Geo Filter Configured
function geoFilterConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        geoFilterConfTotal = total;
    } else
        geoFilterConfTotal = 0;
};

//Geo Filter Applied 
function geoFilterAppNumber(num) {
    if (num > .99) {
        var total = num * .05;
        geoFilterAppTotal = total;
    } else
    geoFilterAppTotal = 0;
};

//ANAME 
function anameNumber(num) {
    if (num > .99) {
        var total = num * .1;
        anameTotal = total;
    } else
        anameTotal = 0;
};

//Pool Configured 
function poolConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        poolConfTotal = total;
    } else
        poolConfTotal = 0;
};

//Pool Applied 
function poolAppNumber(num) {
    if (num > .99) {
        var total = num * .1;
        poolAppTotal = total;
    } else
        poolAppTotal = 0;
};

//Additiona User Accounts
function userNumber(num) {
    if (num > 0 && num <= 10) {
        var total = num * 2;
        userTotal = total;
    } else if (num > 10 && num <= 100) {
        var newNum = num - 10;
        var total = newNum * 1 + 20;
        userTotal = total;
    } else if (num > 100) {
        var newNum = num - 100;
        var total = newNum * .5 + 110;
        userTotal = total;
    } else
        userTotal = 0;
};

// Total Sum
form.onsubmit = function(){
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

    var costTotal = (domainTotal + recordTotal + gtdTotal + geoProxConfTotal + geoProxAppTotal + geoFilterConfTotal + geoFilterAppTotal + anameTotal + poolConfTotal + poolAppTotal + userTotal).toFixed(2);
    alert("Total: $" + costTotal);
};

