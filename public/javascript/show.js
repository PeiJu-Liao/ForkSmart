const progressBar = document.querySelectorAll('.progressbar')
const vitaminToggle = document.querySelectorAll('.show__vitamin-name')
const tabLink = document.querySelectorAll('.nav-link')

progressBar.forEach(bar => {
  bar.style.width = bar.getAttribute('data-done') + '%'
  bar.style.opacity = 1
})

vitaminToggle.forEach(vit => {
  vit.addEventListener('click', () => {
    tabLink.forEach(link => {
      if (link.getAttribute('data-bs-target') === vit.getAttribute('data-name')) {
        link.click()
      }
    })
  })
})