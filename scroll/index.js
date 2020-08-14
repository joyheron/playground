var link = document.querySelector('.back-link')
if (link) {
  link.addEventListener('click', function(ev) {
    ev.preventDefault()
    window.history.back()
  })
}

