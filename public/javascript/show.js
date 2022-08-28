console.log(`Here is show.js`)

const progressBar = document.querySelectorAll('.progressbar')

progressBar.forEach(bar => {
  bar.style.width = bar.getAttribute('data-done') + '%'
  bar.style.opacity = 1
})