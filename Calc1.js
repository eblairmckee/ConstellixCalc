var domainTotal = 0;
var recordTotal = 0;
var gtdTotal = 0;

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

// Total Sum
function totalCost (){
    var costTotal = (domainTotal + recordTotal + gtdTotal).toFixed(2);
    console.log("Total: $" + costTotal);
};

