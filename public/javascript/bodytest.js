const hungrySympton = [
  {
    id: 1,
    sympton: "眼睛乾澀",
  },
  {
    id: 2,
    sympton: "頭髮乾燥分岔"
  },
  {
    id: 3,
    sympton: "免疫力低下",
  },
  {
    id: 4,
    sympton: "心律不整",
  },
  {
    id: 5,
    sympton: "夜間視力差",
  },
  {
    id: 6,
    sympton: "失眠",
  },
  {
    id: 7,
    sympton: "性功能低下",
  },
  {
    id: 8,
    sympton: "過度換氣",
  },
  {
    id: 9,
    sympton: "皮膚乾燥粗糙"
  },
  {
    id: 10,
    sympton: "情緒不穩",
  },
  {
    id: 11,
    sympton: "色斑",
  },
  {
    id: 12,
    sympton: "呼吸喘",
  },
  {
    id: 13,
    sympton: "疲倦",
  },
  {
    id: 14,
    sympton: "水腫",
  },
  {
    id: 15,
    sympton: "肌肉筋攣",
  },
  {
    id: 16,
    sympton: "手腳冰冷",
  },
  {
    id: 17,
    sympton: "肌肉痠痛",
  },
  {
    id: 18,
    sympton: "下肢水腫",
  },
  {
    id: 19,
    sympton: "指甲斷裂",
  },
  {
    id: 20,
    sympton: "指甲白斑",
  },
  {
    id: 21,
    sympton: "肌肉無力",
  },
  {
    id: 22,
    sympton: "便祕",
  },
  {
    id: 23,
    sympton: "血壓高",
  },
  {
    id: 24,
    sympton: "味覺不敏感",
  },
  {
    id: 25,
    sympton: "嘴唇乾裂",
  },
  {
    id: 26,
    sympton: "濕疹",
  },
  {
    id: 27,
    sympton: "臉色蒼白",
  },
  {
    id: 28,
    sympton: "食欲差",
  },
  {
    id: 29,
    sympton: "掉髮",
  },
  {
    id: 30,
    sympton: "低血鈣",
  },
  {
    id: 31,
    sympton: "心悸",
  },
  {
    id: 32,
    sympton: "學習力降低",
  }
]
const hiddenHungryWrap = document.querySelector('.hiddenhungry__wrap')
const symptonResetBtn = document.querySelector('.hiddenhungry__resetbtn')

hungrySympton.forEach(item => {
  hiddenHungryWrap.innerHTML += `
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" value="" id="hh${item.id}" name="sympton">
          <label class="form-check-label" for="hh${item.id}">
                ${item.sympton}
          </label>
          </div>
      </div>
  `
})

const symptomInputCheck = document.querySelectorAll('.form-check-input')
symptonResetBtn.addEventListener('click', (e) => {
  symptomInputCheck.forEach(item => {
    item.checked = false
  })
})

