
var milli = 0, sec = 0, min = 0, count = 0;
var Interval;
var milli_element = document.getElementById("milliseconds");
var sec_element = document.getElementById("seconds");
var min_element = document.getElementById("minutes");

function start_func(){

	clearInterval();
	Interval = setInterval(startTimer, 100);
}

function stop_func(){
	clearInterval(Interval);
}

function reset_func(){
	var div_element = document.getElementById("lap");
	div_element.innerHTML = " ";
	milli = sec = min = count = 0;
	milli_element.innerHTML = '0' + milli;
	sec_element.innerHTML = '0' + sec;
	min_element.innerHTML = '0' + min;
	clearInterval(Interval);	
}

function lap_func() {
	var para = document.createElement("p");
	var node = document.createTextNode(min_element.textContent + ":" + sec_element.textContent + ":" +
		milli_element.textContent);
	para.appendChild(node);

	var div_element = document.getElementById("lap");
	div_element.appendChild(para);
}

function startTimer(){

	milli++;
	if(milli <= 9)
	{
		milli_element.innerHTML = '0' + milli;
	}
	if (milli > 9) 
	{
		milli_element.innerHTML = milli;
	}
	if(milli > 99)
	{
		sec++;
		milli = 0;
		milli_element.innerHTML = '0' + milli;
		if(sec <= 9)
		{
			sec_element.innerHTML = '0' + sec;
		}

		if(sec > 9)
		{
			sec_element.innerHTML = sec;
		}

		if(sec > 59)
		{
			sec = 0;
			min++;
			sec_element.innerHTML = '0' + sec;
			if(min < 10)
			{
				min_element.innerHTML = '0' + min;
			}
			else
			{
				min_element.innerHTML = min;
			}
		}
	}
}