
let count = 0;

const valueSpan = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');


buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        counter(this.textContent);
    });
});

function counter(state) {
    if(state == 'increase'){
        count ++;
        valueSpan.textContent = count;
        valueSpan.style.color = 'green';
    } else if(state == 'decrease'){
        count --;
        valueSpan.textContent = count;
        if(valueSpan.textContent < 0) {
            valueSpan.style.color = 'red';
        }
    } else if(state == 'reset') {
        count = 0;
        valueSpan.textContent = count;
        valueSpan.style.color = "#102a42";
    }
}