
let avg = 0; let avgc = 0
const s = document.getElementById('shape')
s.style.backgroundColor = 'blue'
function chang () {
  const r = Math.floor((Math.random() * 100) + 25)

  const r1 = Math.floor((Math.random() * 100) + 30)

  const r21 = Math.floor((Math.random() * 100) + 0)
  const r22 = Math.floor((Math.random() * 100) + 0)
  //   const r23 = Math.floor((Math.random() * 100) + 0)
  //   const r24 = Math.floor((Math.random() * 100) + 0)

  const r3 = (Math.random() * 450) + 0
  const r4 = (Math.random() * 1400) + 0
  s.style.width = r + 'px'
  s.style.height = r1 + 'px'
  s.style.borderTopLeftRadius = r21 + 'px'
  s.style.borderTopRightRadius = r22 + 'px'
  s.style.borderBottomRightRadius = r21 + 'px'
  s.style.borderBottomLeftRadius = r22 + 'px'

  //   s.style.display = 'block'
  s.style.top = r3 + 'px'
  s.style.left = r4 + 'px'
}
// chang()

// const h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
// let c = '#'
// for (let i = 0; i < 6; i++) {
//   const a = Math.floor(Math.random() * (16 - 1 + 1) + 1)
//   c += h[a - 1]
// }

const b = document.getElementById('body')

let val = 0
let start = 1
const B1 = document.getElementById('b1')
B1.addEventListener('click', () => {
  document.getElementById('wel').style.display = 'none'
  if (start === 1) {
    b.style.display = 'block'

    val = setInterval(chang, 850)
    let st, et

    s.addEventListener('mouseenter', () => {
    //   const h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    //   let c = '#'
    //   for (let i = 0; i < 6; i++) {
    //     const a = Math.floor(Math.random() * (16 - 1 + 1) + 1)
    //     c += h[a - 1]
    //   }

      //   s.style.backgroundColor = c
      const d1 = new Date()
      st = d1.getTime()
    })
    s.addEventListener('mouseleave', () => {
      const h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
      let c = '#'
      for (let i = 0; i < 6; i++) {
        const a = Math.floor(Math.random() * (16 - 1 + 1) + 1)
        c += h[a - 1]
      }

      s.style.backgroundColor = c
      const d2 = new Date()
      et = d2.getTime()
      avg += Math.abs((st - et) / 1000)
      ++avgc
      document.getElementById('time').innerText = Math.abs((st - et) / 1000) + ' sec'
    })
  }
  start = 0
})
const B2 = document.getElementById('b2')
B2.addEventListener('click', () => {
  b.style.display = 'none'
  const thank = document.getElementById('thank')
  thank.style.display = 'block'
  B1.style.display = 'none'
  B2.style.display = 'none'
  B3.style.display = 'none'
  document.getElementById('chckavg').style.display = 'block'
  document.getElementById('avg').addEventListener('click', () => {
    // alert('your Average Reaction time is : ' + (avg / avgc).toPrecision(3) + ' sec')
    document.getElementById('head1').innerText = 'Your Average Reaction Time is : '
    document.getElementById('time').innerText = (avg / avgc).toPrecision(3) + ' sec'
  })
})
const B3 = document.getElementById('b3')
B3.addEventListener('click', () => {
  b.style.display = 'block'
  clearInterval(val)
  start = 1
})
