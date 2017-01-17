var domainTotal = document.getElementById('domains');
var recordTotal = document.getElementById('records');
var gtdTotal = document.getElementById('gtd');
var geoProxConfTotal = document.getElementById('geoProxConf');
var geoProxAppTotal = document.getElementById('geoProxApp');
var geoFilterConfTotal = documnet.getElementById('geoFilterConf');
var geoFilterAppTotal = document.getElementById('geoFilterApp');
var anameTotal = document.getElementById('aname');
var poolConfTotal = document.getElementById('poolConf');
var poolAppTotal = document.getElementById('poolApp');
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
        gtdTotal = Math.round(newNum/100 + 1);
   
    } else
        gtdTotal = 0;  
};

//GTD Calculation
function gtdNumber(num) {
    if (num > 0 && num < 1) {
        var gtdTotal = 5; 
    } else if (num > 1 && num < 100) {
        var newNum = num - 1;
        var total = newNum * 1
    }
};

//Geo Proximity Configured
function geoProxConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        geoProxConfTotal = total;
    }
};

//Geo Prosimity Applied
function geoProxAppNumber(num) {
    if (num > .99) {
        var total = num * .05;
        geoProxAppTotal = total;
    }
};

//Geo Filter Configured
function geoFilterConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        geoFilterConfTotal = total;
    }
};

//Geo Filter Applied 
function geoFilterAppNumber(num) {
    if (num > .99) {
        var total = num * .05;
        geoFilterAppTotal = total;
    }
};

//ANAME 
function anameNumber(num) {
    if (num > .99) {
        var total = num * .1;
        anameTotal = total;
    }
};

//Pool Configured 
function poolConfNumber(num) {
    if (num > .99) {
        var total = num * .01;
        poolConfTotal = total;
    }
};

//Pool Applied 
function poolAppNumber(num) {
    if (num > .99) {
        var total = num * .1;
        poolAppTotal = total;
    }
};

// Total Sum
function totalCost (){
    var costTotal = (domainTotal + recordTotal + gtdTotal + geoProxConfTotal + geoProxAppTotal + geoFilterConfTotal + geoFilterAppTotal + anameTotal + poolConfTotal + poolAppTotal).toFixed(2);
    console.log("Total: $" + costTotal);
};

