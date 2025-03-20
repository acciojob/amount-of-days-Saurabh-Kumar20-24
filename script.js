//your JS code here. If requi
function daysOfYear(year){
	if((year%4==0 && year%100!=0)|| year%400==0){
		return 365;
	}else{
		return 366;
	}
}

let year=prompt("enter year")

alert(daysOfYear());