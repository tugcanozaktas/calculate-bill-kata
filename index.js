
function calculateBill(price, vat, tip){
    if(!(Number.isInteger(price))){
        return "error";
    }
    if( !(Number.isInteger(vat)) ){
        return "error";
    }
    if( !(Number.isInteger(tip)) ){
        return "error";
    }

    const total = price + vat + tip;
    return "£"+total.toString();
}


































module.exports = calculateBill;