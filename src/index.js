// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var currencyObject = {};
    if(currency === 0) return currencyObject;
    if(currency > 10000){
        currencyObject["error"] = "You are rich, my friend! We don't have so much coins for exchange";
        return currencyObject;
    }
    var H = 50,
        Q = 25,
        D = 10,
        N = 5,
        P = 1;
    var i = H;
    var tmp = currency;
        while(tmp >= i)
        {
           if ("H" in currencyObject) {currencyObject["H"] ++;}
           else {currencyObject["H"] = 1;}
           tmp-= i;
        }
        i = Q;
        while(tmp >= i)
        {
           if ("Q" in currencyObject) currencyObject["Q"] ++;
           else currencyObject["Q"] = 1;
           tmp-= i;
        }
        i = D;
        while(tmp >= i)
        {
           if ("D" in currencyObject) currencyObject["D"] ++;
           else currencyObject["D"] = 1;
           tmp-= i;
        }
        i = N;
        while(tmp >= i)
        {
           if ("N" in currencyObject) currencyObject["N"] ++;
           else currencyObject["N"] = 1;
           tmp-= i;
        }
        i = P;
        while(tmp >= i)
        {
           if ("P" in currencyObject) currencyObject["P"] ++;
           else currencyObject["P"] = 1;
           tmp-= i;
        }
        return currencyObject;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
