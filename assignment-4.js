function perfectFriend(arr){
    if(arr.length === 0){
        return "Please Enter a valid array.";
    }
    for (let i = 0 ; i< arr.length; i++){
        const name = arr[i];
        if(name.length === 5){
            return name;
        }
    }
}
const friends = [ "abcsde", "acaef", "abc", "acwcjj" ," ssskss"];
console.log(perfectFriend(friends));