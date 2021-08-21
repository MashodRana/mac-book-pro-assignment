
// Global variables
const _8GBMemoryPrice = 0;
const _16GBMemoryPrice = 180;
const _256GBStoragePrice = 0;
const _512GBStoragePrice = 100;
const _1TBStoragePrice = 180;
const deliveryCharge = 20;

let memoryCost = 0;
let storageCost = 0;
let deliveryCost = 0;
let totalCost = 0;
let isPromoUsed = false;
const promoCode = 'stevekaku';


// -------------------------------------------------------
//                  Helper functions
// --------------------------------------------------------

function updateCost(idPrefix, cost){
    // This function will update all cost realted element.
    const elemId = idPrefix+'-cost';
    const elem = document.getElementById(elemId);
    elem.innerText = cost;
}


function getCostAsInteger(idPrefix){
    // This function extract the inner text of an element and covert the text into integer
    return parseInt(document.getElementById(idPrefix+'-cost').innerText);
}


function updateTotalCost() {
    // This function calculate total cost and update the total cost of the element.

    // Total cost calculation
    const total = getCostAsInteger('main') + getCostAsInteger('memory') + getCostAsInteger('storage') + getCostAsInteger('delivery');

    // Cost updating.
    document.getElementById('total-cost').innerText = total;
}


function calculateFinalCost(isPromo){
    // This function calculate final cost after applying promo code and also update the final cost.

    const elem = document.getElementById('final-cost');
    const totalCost = getCostAsInteger('total');

    if(isPromo){
        // Applying promo code and updating.
        elem.innerText = totalCost-totalCost*0.20;
    }
    else{
        // No promo code;
        elem.innerText = totalCost;
    }
}


//-------------------------------------------------------------
//               Page interactions controlling
//-------------------------------------------------------------

// Initial Cost calculation and updating.
updateTotalCost(); // Calculate and update total cost
calculateFinalCost(isPromoUsed); // calculate and update final cost with consideration of promo code.


// Various cost updating and calculation with button clicking.

// Memory button click handling
document.getElementById('8gb-memory').addEventListener('click',function(){
    // 8gb Memory button
    updateCost('memory', _8GBMemoryPrice);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
})

document.getElementById('16gb-memory').addEventListener('click',function(){
    // 16GB Memory button
    updateCost('memory', _16GBMemoryPrice);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
})


// Storages button click handling
document.getElementById('256gb-ssd').addEventListener('click',function(){
    // 256GB-SSD storage button
    updateCost('storage', _256GBStoragePrice);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
});

document.getElementById('512gb-ssd').addEventListener('click',function(){
    // 512GB-SSD storage button
    updateCost('storage', _512GBStoragePrice);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
});

document.getElementById('1tb-ssd').addEventListener('click',function(){
    // 1TB-SSD storage button
    updateCost('storage', _1TBStoragePrice);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
})

// Delivery cost buttons click controlling.
document.getElementById('free-delivery').addEventListener('click',function(){
    // Free delivery button
    updateCost('delivery', 0);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
})

document.getElementById('premium-delivery').addEventListener('click',function(){
    // Premium delivery button
    updateCost('delivery', deliveryCharge);
    updateTotalCost();
    calculateFinalCost(isPromoUsed);
})


// Promo code applying 
document.getElementById('promo-button').addEventListener('click', function(){

    const userPromoCode = document.getElementById('promo-field').value;

    // Check whether the promo code is used or not.
    if(userPromoCode===promoCode && !isPromoUsed){
        isPromoUsed = true;
    }
    else if(userPromoCode===promoCode && isPromoUsed){
        alert('Promo code already have been used!!!');
        return;
    }
    else{
        alert('May be wrong or expired!!!');
    }

    calculateFinalCost(isPromoUsed);
});