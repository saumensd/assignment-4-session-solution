function totalSales(shirt, pant, shoe){
    if(shirt < 0 || pant <0 || shoe < 0){
        return "Quantity can't be negative."
    }
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const total = shirt * shirtPrice + pant * pantPrice + shoe * shoePrice;
    return total;
}
console.log(totalSales(1,1,1));
console.log(totalSales(1,-1,1));
console.log(totalSales(5,10,15));
console.log(totalSales(15,10,5));