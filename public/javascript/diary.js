console.log(`Here is diary.js`)

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  language: "zh-TW",
});