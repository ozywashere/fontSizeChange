const btns = document.querySelectorAll('.btn')
const h1 = document.querySelector('.title')
const p = document.querySelector('.text')
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btns.forEach((btn) => btn.classList.remove('active'))
    btn.classList.add('active')
    console.log(btn.classList)
    const styles = btn.classList
    if (styles.contains('btn-1')) {
      h1.style.fontSize = '2rem'
      p.style.fontSize = '1.2rem'
    } else if (styles.contains('btn-2')) {
      h1.style.fontSize = '3rem'
      p.style.fontSize = '1.6rem'
    } else if (styles.contains('btn-3')) {
      h1.style.fontSize = '4rem'
      p.style.fontSize = '2.4rem'
    } else {
      h1.style.fontSize = '1.6'
      p.style.fontSize = '.825rem'
    }
  })
})
