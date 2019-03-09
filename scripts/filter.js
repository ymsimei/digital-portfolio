function filter(f) {
  if (f == 'all') {
    elements = document.querySelectorAll('.project')
    elements.forEach(function(element) {
      element.style.display = "block"
    })
  } else if (f == 'design') {
    elements = document.querySelectorAll('.design')
    elements.forEach(function(element) {
      element.style.display = "block"
    })
    elements = document.querySelectorAll('.code')
    elements.forEach(function(element) {
      element.style.display = "none"
    })
  } else if (f == 'code') {
    elements = document.querySelectorAll('.code')
    elements.forEach(function(element) {
      element.style.display = "block"
    })
    elements = document.querySelectorAll('.design')
    elements.forEach(function(element) {
      element.style.display = "none"
    })
  }
}
