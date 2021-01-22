// https://github.com/CoderSarkar/assaignment-3

// *******
// *********
// ***********

// calculation of kilometer To meter 

function kilometerToMeter(num){

    if (num <= 0 ){

        num = "Kilometer can't be minus or zero value";
        return num;

    }

    else{
        var result = num*1000;
        return result;
    }
}

var kiloToMeter = kilometerToMeter(15);

console.log(kiloToMeter);


// This is
// budgetCalculator code



function budgetCalculator(watch, phone, laptop){

    if(watch <= 0 || phone <= 0 || laptop <= 0){
        
        var errorMessege = "Please put a valid quantity";
        return errorMessege;
    }

    else{

        // calculation of watch, phone & laptop price

        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        // overall all products price
        
        var totalPrice = watchPrice + phonePrice + laptopPrice;

        return totalPrice;
    }
}
var totalBudget = budgetCalculator(10, 5,10);
console.log(totalBudget);



// This is 
// Hotel Cost calculation code

function hotelCost(num){

    //First Ten days cost calculation

    if(num <= 10){

        var total = num*100;
        return total;
    }

    // Eleven to Tweenty days cost calculation

    else if(num <= 20){

        var firstTenDaysCost  = 10 * 100;
        var secondTenDaysCost = (num-10) * 80;
        var total = firstTenDaysCost + secondTenDaysCost;

        return total;
    }
 
    // After tweenty days cost calculation

    else if(num >= 20){

        var firstTenDaysCost     = 10 * 100;
        var secondTenDaysCost    = 10 * 80;
        var afterTweentyDaysCost = (num-20) * 50;
        
        var total = firstTenDaysCost +secondTenDaysCost + afterTweentyDaysCost;
        return total;
    }
}

//Total hotel cost is here

var totalCost = hotelCost(30);
console.log(totalCost);


// This is 
// The final code 
// Which is Mega Friend 
// Finding the largest name from an array




function megaFriend(arr) {

    var largestName = arr[0];
    for (i = 0; i < arr.length; i++) {
   
        if (arr[i].length > largestName.length) {
        largestName = arr[i];
      }
      
    }
    return largestName;
  }
  
  var megaFriendName = megaFriend(["Ghoseti Beagum", "Golam-Hossen", "Shiraj-Ud-Doula", "Mir-Jafor", "Anowar Hossen"])
  
  
  console.log(megaFriendName);
  
  