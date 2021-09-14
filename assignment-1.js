function seerToMon(seer){
    //40 seer = 1 mon
    if(seer < 0){
        return "Wrong input";
    }
    const mon = seer / 40;
    return mon;
}
console.log(seerToMon(-22));
console.log(seerToMon(22));