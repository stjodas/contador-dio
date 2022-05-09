let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');

btnAdd.addEventListener('click', increment);
btnSub.addEventListener('click', decrement);

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    btnSub.style.visibility="visible";

    if(count >= 0) {
        CURRENT_NUMBER.style.color = "black";
        if(count == 10){
                btnAdd.style.visibility = "hidden";
        }        
    }
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    btnAdd.style.visibility = "visible";

    if(count < 0) {
        CURRENT_NUMBER.style.color = "red";
        if(count == -10) { 
                btnSub.style.visibility = "hidden";
        }
    }
}
