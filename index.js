const container = document.querySelector('.container')

const answer = Math.round(Math.random())
container.textContent = answer ? 'YES' : 'NO'

gtag('event', 'answer', {
  value: answer
})
