function deliveryCost(num) {
    const first100 = 100;
    const second100 = 80;
    const rest = 50;

    if (num > 0 && num <= 100) {
        return num * first100;
    }
    else if (num > 100 && num <= 200) {
        const first100Cost = 100 * first100;
        const restProduct = (num - 100) * second100;
        return first100Cost + restProduct;
    }
    else if (num > 200) {
        const first100Cost = 100 * first100;
        const second100Cost = 100 * second100;
        const restProduct = (num - 200) * rest;
        return first100Cost + second100Cost + restProduct;
    }
    else {
        return "Invalid input";
    }

}
console.log(deliveryCost(101));
console.log(deliveryCost(200));
console.log(deliveryCost(201));
console.log(deliveryCost(-201));