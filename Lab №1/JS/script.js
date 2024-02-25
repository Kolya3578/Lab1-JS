function calculate(input) {
   document.form.textview.value = document.form.textview.value + input;
}

function clean() {
   document.form.textview.value = "";
}

function back() {
   let exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0, exp.length-1);
}

function equal() {
   let exp = document.form.textview.value;
   if(exp) {
      document.form.textview.value = eval(exp);
   }
}








// onkeydown = "return checkPhoneKey(event.key)";
// onclick = "return checkPhoneKey(event.key)";

// function checkPhoneKey(key) {
//    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
//       key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
// }

