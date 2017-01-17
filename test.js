var domainTotal = 0;
var recordTotal = 0;

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

function recordNumber(num) {
    if (num > 100) {
        var newNum = num - 100;
        gtdTotal = Math.round(newNum/100 + 1);
   
    } else
        gtdTotal = 0;  
};

function totalCost (){
    var costTotal = (domainTotal + recordTotal + gtdTotal + geoProxConfTotal + geoProxAppTotal + geoFilterConfTotal + geoFilterAppTotal + anameTotal + poolConfTotal + poolAppTotal).toFixed(2);
    console.log("Total: $" + costTotal);
};
