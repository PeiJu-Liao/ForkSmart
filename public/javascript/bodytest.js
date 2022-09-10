const hungrySympton = [
  {
    id: 1,
    sympton: "眼睛乾澀",
    nutrition: ["維生素A"],
    nutrition_en: ["vitaminA"]
  },
  {
    id: 2,
    sympton: "頭髮乾燥分岔",
    nutrition: ["維生素E"],
    nutrition_en: ["vitaminE"]
  },
  {
    id: 3,
    sympton: "免疫力低下",
    nutrition: ["維生素D", "鋅"],
    nutrition_en: ["vitaminE", "zinc"]
  },
  {
    id: 4,
    sympton: "心律不整",
    nutrition: ["鎂"],
    nutrition_en: ["magnesium"]
  },
  {
    id: 5,
    sympton: "夜間視力差",
    nutrition: ["維生素A"],
    nutrition_en: ["vitaminA"]
  },
  {
    id: 6,
    sympton: "失眠",
    nutrition: ["維生素B", "鈣", "鎂"],
    nutrition_en: ["vitaminB", "calcium", "magnesium"]
  },
  {
    id: 7,
    sympton: "性功能低下",
    nutrition: ["維生素E"],
    nutrition_en: ["vitaminE"]
  },
  {
    id: 8,
    sympton: "過度換氣",
    nutrition: ["鎂"],
    nutrition_en: ["magnesium"]
  },
  {
    id: 9,
    sympton: "皮膚乾燥粗糙",
    nutrition: ["維生素A", "維生素D", "維生素E"],
    nutrition_en: ["vitaminA", "vitaminD", "vitaminE"]
  },
  {
    id: 10,
    sympton: "情緒不穩",
    nutrition: ["維生素B"],
    nutrition_en: ["vitaminB"]
  },
  {
    id: 11,
    sympton: "色斑",
    nutrition: ["維生素E"],
    nutrition_en: ["vitaminE"]
  },
  {
    id: 12,
    sympton: "呼吸喘",
    nutrition: ["鐵"],
    nutrition_en: ["iron"]
  },
  {
    id: 13,
    sympton: "疲倦",
    nutrition: ["維生素B", "鐵"],
    nutrition_en: ["vitaminB", "iron"]
  },
  {
    id: 14,
    sympton: "水腫",
    nutrition: ["維生素E"],
    nutrition_en: ["vitaminE"]
  },
  {
    id: 15,
    sympton: "肌肉筋攣",
    nutrition: ["鎂", "鈣"],
    nutrition_en: ["magnesium", "calcium"]
  },
  {
    id: 16,
    sympton: "手腳冰冷",
    nutrition: ["鐵"],
    nutrition_en: ["iron"]
  },
  {
    id: 17,
    sympton: "肌肉痠痛",
    nutrition: ["鎂", "鈣"],
    nutrition_en: ["magnesium", "calcium"]
  },
  {
    id: 18,
    sympton: "下肢水腫",
    nutrition: ["維生素B"],
    nutrition_en: ["vitaminB"]
  },
  {
    id: 19,
    sympton: "指甲斷裂",
    nutrition: ["鈣"],
    nutrition_en: ["calcium"]
  },
  {
    id: 20,
    sympton: "指甲白斑",
    nutrition: ["鋅"],
    nutrition_en: ["zinc"]
  },
  {
    id: 21,
    sympton: "肌肉無力",
    nutrition: ["維生素D"],
    nutrition_en: ["vitaminD"]
  },
  {
    id: 22,
    sympton: "便祕",
    nutrition: ["維生素B"],
    nutrition_en: ["vitaminB"]
  },
  {
    id: 23,
    sympton: "血壓高",
    nutrition: ["鈣", "鎂"],
    nutrition_en: ["calcium", "magnesium"]
  },
  {
    id: 24,
    sympton: "味覺不敏感",
    nutrition: ["鋅"],
    nutrition_en: ["zinc"]
  },
  {
    id: 25,
    sympton: "嘴唇乾裂",
    nutrition: ["維生素B"],
    nutrition_en: ["vitaminB"]
  },
  {
    id: 26,
    sympton: "濕疹",
    nutrition: ["維生素B"],
    nutrition_en: ["vitaminB"]
  },
  {
    id: 27,
    sympton: "臉色蒼白",
    nutrition: ["鐵"],
    nutrition_en: ["iron"]
  },
  {
    id: 28,
    sympton: "食欲差",
    nutrition: ["鋅"],
    nutrition_en: ["zinc"]
  },
  {
    id: 29,
    sympton: "掉髮",
    nutrition: ["維生素B", "鐵", "鋅"],
    nutrition_en: ["vitaminB", "iron", "zinc"]
  },
  {
    id: 30,
    sympton: "低血鈣",
    nutrition: ["維生素D"],
    nutrition_en: ["vitaminD"]
  },
  {
    id: 31,
    sympton: "心悸",
    nutrition: ["鐵"],
    nutrition_en: ["iron"]
  },
  {
    id: 32,
    sympton: "學習力降低",
    nutrition: ["碘"],
    nutrition_en: ["iodine"]
  }
]

const symptonResetBtn = document.querySelector('.hiddenhungry__resetbtn')
const bodytest = document.querySelector('.bodytest__title')
const pages = document.querySelectorAll('.part')
const btnControl = document.querySelector('.btnControl')
const nextBtn = document.querySelector('.btn_next')
const prevBtn = document.querySelector('.btn_prev')

const symptomInputCheck = document.querySelectorAll('.form-check-input')
symptonResetBtn.addEventListener('click', (e) => {
  symptomInputCheck.forEach(item => {
    item.checked = false
  })
})

// let page = 0

// function handleBtnControl(e) {
//   const nowPage = pages[page]
//   if (e.target.matches('.btn__primary') && e.target.innerHTML === '下一步') {
//     console.log(pages[page])
//     const nextPage = pages[page + 1]
//     pages[page].classList.toggle('transform-hidden')
//     pages[page].classList.add('position-absolute')
//     pages[page + 1].classList.toggle('transform-hidden')
//     pages[page + 1].classList.remove('position-absolute')
//     page += 1
//   } else {
//     if (e.target.matches('.btn_prev')) {
//       pages[page].classList.toggle('transform-hidden')
//       pages[page].classList.add('position-absolute')
//       pages[page - 1].classList.toggle('transform-hidden')
//       pages[page - 1].classList.remove('position-absolute')
//       page -= 1
//     }
//   }
//   setBtnDisabled()
// }

// function setBtnDisabled() {
//   if (page === 0) {
//     prevBtn.classList.add('disabled')
//     bodytest.innerHTML = '健康體檢BMI'
//   } else {
//     prevBtn.classList.remove('disabled')
//     // bodytest.innerHTML = '隱性飢餓檢測'
//   }

//   if (page === 1) {
//     nextBtn.innerHTML = '體態檢驗Go'
//     // nextBtn.getAttribute('type') = 'submit'
//     nextBtn.setAttribute('type', 'submit')
//     bodytest.innerHTML = '心情日記'
//   } else {
//     nextBtn.innerHTML = '下一步'
//     nextBtn.removeAttribute('type')
//   }
// }

// btnControl.addEventListener('click', handleBtnControl)

// BMI Calculator
function bmiCalc() {
  let height = document.querySelector('.height').value / 100
  let weight = document.querySelector('weight').value
  // bmi = 體重(kg) / 身高*身高(m)
  let bmi = (weight / Math.pow(height, 2)).toFixed(2)
  console.log(bmi)
}