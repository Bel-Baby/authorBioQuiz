const lightMode = ["#fafafa", "#f5f5f5", "#eceff1", "#cfd8dc"];
const darkMode = ["#202225", "#292b2f", "#2f3136", "#40444b"];
const body = document.getElementsByTagName("body");
const bgSwitch = document.getElementById("bgSwitch");
const submit = document.getElementById("submit");
const questionSlides = document.getElementById('questionSlide');
const questions = [...questionSlides.getElementsByClassName('questions')];
const questionButtons = [...document.getElementsByClassName('questionBtn')];
let slideIndex = 0;
let colorCount = 0;
let intervalID;

/*------------------------------- Theme Changes --------------------------------*/
const lightModeFn = () => {
    let index = 0;

    const changeColor = () => {
        body[0].style.background = lightMode[index];
        body[0].style.color = "black";
        index = (index + 1) % lightMode.length; // Increment index and wrap around to 0 when it reaches the end

        timeoutId = setTimeout(changeColor, 5000);
    };

    changeColor();
}
const darkModeFn = () => {
    let index = 0;

    const changeColor = () => {
        body[0].style.background = darkMode[index];
        body[0].style.color = "azure";
        index = (index + 1) % darkMode.length;

        timeoutId = setTimeout(changeColor, 5000); // Store timeout ID and switch color every 5 second
    };

    changeColor(); // Start color-changing process
}
let timeoutId; // Store timeout ID in variable

const switColors = (isDarkMode) => {
    if (isDarkMode) {
        darkModeFn();
    }
    else {
        lightModeFn();
    }
}

bgSwitch.addEventListener('change', (e) => {
    const isDarkMode = e.target.checked;
    clearTimeout(timeoutId); // Clear timeout if it's running
    switColors(isDarkMode);
});

lightModeFn(); // Start the initial lightModeFn color-changing process


/*---------------------------- Carousel Questions -----------------------------*/

const showSlides = () => {
  questions.forEach(question => question.style.display = 'none');
  questions[slideIndex].style.display = 'block';
}

const nextSlide = () => {
  if (slideIndex === questions.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlides();
}

const previousSlide = () => {
  if (slideIndex === 0) {
    slideIndex = questions.length - 1;
  } else {
    slideIndex--;
  }
  showSlides();
}

questionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    showSlides();
  });
});

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('previous').addEventListener('click', previousSlide);

showSlides();


/*--------------- Check selected radioBtns for correct answers ----------------*/

const correctAnswers = ['Abel', 'Daniel','Roy'];
const markPerCorrectAnswer = 5;

const checkAnswers = () => {
  const selectedAnswers = [];
  const selectedRadioButtons = [...document.querySelectorAll('input:checked')];

  selectedRadioButtons.forEach(radioButton => {
    selectedAnswers.push(radioButton.nextSibling.textContent.trim());
  });

  let totalMarks = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === selectedAnswers[i]) {
      totalMarks += markPerCorrectAnswer;
    }
  }

  console.log(`Total marks: ${totalMarks}`);
}

submit.addEventListener("click", checkAnswers);



// const darkModeFn = () => {
//     intervalID = setTimeout(() => {
//         setInterval(() => {
//             if (colorCount >= darkMode.length) {
//                 colorCount = 0;
//             }
//             body[0].style.backgroundColor = darkMode[colorCount];
//             colorCount++;
//         }, 5000);
//     },1000);
// }

// const lightModeFn = () => {
//     intervalID = setTimeout(() => {
//         setInterval(() => {
//             if (colorCount >= lightMode.length) {
//                 colorCount = 0;
//             }
//             body[0].style.backgroundColor = lightMode[colorCount];
    
//             colorCount++;
//         }, 5000)
//     },1000);
// }

// const switchMode = (isDarkMode) => {

//     if (isDarkMode) {
//         console.log({ mode: isDarkMode })
//         darkModeFn()
//     }
//     else {
//         lightModeFn()

//     };

// }

// bgSwitch.onchange = (e) => {
//     const isDarkMode = e.target.checked;
//     clearInterval(intervalID);

//     switchMode(isDarkMode);
//     console.log({ isDarkMode })

// }

// window.addEventListener("load", () => {

//     switchMode(false);
// })