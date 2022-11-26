class myDate{
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay = function(){
        return this.day
    }
    getMonth = function(){
        return this.month
    }
    getYear = function(){
        return this.year
    }
    changeDay = function(changeDay){
        this.day = changeDay;
    }
    changeYear = function(changeYear){
        this.year = changeYear;
    }
    changeMonth = function(changeMonth){
        this.month = changeMonth;
    }
}
let loveDate = new myDate(18,1,2020);
let myUniversity = loveDate.getDay();
console.log(myUniversity);
loveDate.changeDay(20);
myUniversity = loveDate.getDay();
console.log(myUniversity);