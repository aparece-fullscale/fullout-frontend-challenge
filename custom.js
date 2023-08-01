// Add any JavaScript you need here
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const button = document.getElementById("button");

setMaxLength(day, 2);
setMaxLength(month, 2);
setMaxLength(year, 4);

button.addEventListener("click", () => {
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  const date = {
    day,
    month,
    year,
  };

  let hasInvalidValue = false;

  // check for empty values
    for (const key in date) {
        if (date[key].value === "") {
            hasInvalidValue = true;
            date[key].classList.add("error-input");
            date[key].parentNode.querySelector("label").classList.add("error-label");
            date[key].parentNode.querySelector("small").style.display = "block";
        } else {
            date[key].classList.remove("error-input");
            date[key].parentNode.querySelector("label").classList.remove("error-label");
            date[key].parentNode.querySelector("small").style.display = "none"; 
        }
    }

    // check for invalid values
    for (const key in date) {
        switch (key) {
            case "day":
                if (date[key].value > 31 || date[key].value < 1) {
                    hasInvalidValue = true;
                    date[key].classList.add("error-input");
                    date[key].parentNode.querySelector("label").classList.add("error-label");
                    date[key].parentNode.querySelector("small").style.display = "block";
                    date[key].parentNode.querySelector("small").innerHTML = "Invalid day";
                }
                break;
            case "month":
                if (date[key].value > 12 || date[key].value < 1) {
                    hasInvalidValue = true;
                    date[key].classList.add("error-input");
                    date[key].parentNode.querySelector("label").classList.add("error-label");
                    date[key].parentNode.querySelector("small").style.display = "block";
                    date[key].parentNode.querySelector("small").innerHTML = "Invalid month";
                }
                break;
            case "year":
                if (date[key].value > (new Date()).getFullYear()) {
                    hasInvalidValue = true;
                    date[key].classList.add("error-input");
                    date[key].parentNode.querySelector("label").classList.add("error-label");
                    date[key].parentNode.querySelector("small").style.display = "block";
                    date[key].parentNode.querySelector("small").innerHTML = "Invalid year";
                }
                break;
            default:
                break;
        }
    }

    console.log(hasInvalidValue);
    if (hasInvalidValue) {
        return;
    }

  getAge(dayValue, monthValue, yearValue);
});

/** ====================================================================================================
 * METHODS 
 =======================================================================================================*/

function getAge(day, month, year) {
  const birthDate = new Date(year, month - 1, day);

  const currentDate = new Date();

  const difference = currentDate - birthDate;

  const yearResult = new Date(difference).getFullYear() - 1970;

  const monthResult = new Date(difference).getMonth();

  const dayResult = new Date(difference).getDate() - 1;

  const ageResult = [yearResult, monthResult, dayResult];

  const results = Array.from(document.getElementsByClassName("result"));

  results.forEach((result, index) => {
    result.innerHTML = ageResult[index];
  });
}

// set max length of the input value
function setMaxLength(input, maxLength) {
  input.addEventListener("input", () => {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  });
}
