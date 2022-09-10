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