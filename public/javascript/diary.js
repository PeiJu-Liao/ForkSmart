console.log(`Here is diary.js`)

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  language: "zh-TW",
});

let iconToggle = document.querySelectorAll('.moodToggle')

const toggleAction = (e) => {
  let target = e.target
  if (target.closest('.mood')) {
    const moodPopUp = target.nextElementSibling;

    if (moodPopUp.classList.contains('d-none')) {
      const allPopUp = document.querySelectorAll('.mood__record').forEach(item => {
        item.classList.add('d-none')
      })
    }

    moodPopUp.classList.toggle('d-none')
  }
}

iconToggle.forEach(icon => {
  icon.addEventListener('click', toggleAction)
})

let bmi = document.querySelectorAll('.bmi')
let fatty = document.querySelectorAll('.fatty')
let bodyfat = document.querySelectorAll('.bodyfat')
const bmiCalc = () => {
  bmi.forEach(bmi => {
    // NOTE: BMI: 體重/(身高**2)
    const weight = Number(bmi.previousElementSibling.innerText)
    const height = Number(bmi.parentElement.children[2].innerText) / 100
    bmi.innerHTML = (weight / (height * height)).toFixed(2)
  })
}

const fattyTest = () => {
  fatty.forEach(fatty => {
    const bmi = Number(fatty.previousElementSibling.innerText)
    if (bmi < 18.5) {
      return fatty.innerHTML = "過輕"
    } else if (bmi >= 18.5 && bmi < 24) {
      return fatty.innerHTML = "正常"
    } else if (bmi >= 24 && bmi < 27) {
      return fatty.innerHTML = "過重"
    } else if (bmi >= 27 && bmi < 30) {
      return fatty.innerHTML = "輕度肥胖"
    } else if (bmi >= 30 && bmi < 35) {
      return fatty.innerHTML = "中度肥胖"
    } else {
      return fatty.innerHTML = "重度肥胖"
    }
  })
}

// NOTE: 體指率(公式計算法) : 1.2 x BMI + 0.23 x 年齡 - 5.4 - 10.8 x 性別(男生:1 / 女生:0)
const bodyfatTest = () => {
  bodyfat.forEach(bodyfat => {
    const bmi = Number(bodyfat.parentElement.children[4].innerText)
    const gender = bodyfat.parentElement.firstElementChild.innerText
    const age = Number(bodyfat.parentElement.children[1].innerText)
    if (gender === '女') {
      return bodyfat.innerHTML = ((1.2 * bmi) + (0.23 * age) - 5.4 - (10.8 * 0)).toFixed(2)
    } else {
      return bodyfat.innerHTML = ((1.2 * bmi) + (0.23 * age) - 5.4 - (10.8 * 1)).toFixed(2)
    }
  })
}

bmiCalc()
fattyTest()
bodyfatTest()