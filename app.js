// set initial count
let count = 0

// select value and values
const value = document.getElementById('value')

const btns = document.querySelectorAll(".btn")
// use the forEach to loop through allthe btn
btns.forEach((btn) => {
  //add eventlistener to all the buttons
  btn.addEventListener("click", (e) => {
    // use the event object to get the current target being click and their classlist

    const styles = e.currentTarget.classList
    if (styles.contains("decrease") ) {
      count-- 
    }else if (styles.contains("increase")) {
      count++
    }else{
      count = 0
    }
    if (count > 0) {
      value.style.color = "green"
    }
    if (count > 0) {
      value.style.color = "green"
    }
    if (count < 0) {
      value.style.color = "red"
    }
    if (count === 0) {
      value.style.color = "#222"
    }
    value.textContent = count
  })
});
