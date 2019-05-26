import React, { useState, useEffect } from 'react'

const fullDate = [
  [{ disable: true, day: 28 }, { disable: true, day: 29 }, { disable: true, day: 30 }, { disable: false, day: 1 }, { disable: false, day: 2 }, { disable: false, day: 3 }, { disable: false, day: 4 }],
  [{ disable: false, day: 5 }, { disable: false, day: 6 }, { disable: false, day: 7 }, { disable: false, day: 8 }, { disable: false, day: 9 }, { disable: false, day: 10 }, { disable: false, day: 11 }],
  [{ disable: false, day: 12 }, { disable: false, day: 13 }, { disable: false, day: 14 }, { disable: false, day: 15 }, { disable: false, day: 16 }, { disable: false, day: 17 }, { disable: false, day: 18 }],
  [{ disable: false, day: 19 }, { disable: false, day: 20 }, { disable: false, day: 21 }, { disable: false, day: 22 }, { disable: false, day: 23 }, { disable: false, day: 24 }, { disable: false, day: 25 }],
  [{ disable: false, day: 26 }, { disable: false, day: 27 }, { disable: false, day: 28 }, { disable: false, day: 29 }, { disable: false, day: 30 }, { disable: false, day: 31 }, { disable: true, day: 1 }],
  [{ disable: true, day: 2 }, { disable: true, day: 3 }, { disable: true, day: 4 }, { disable: true, day: 5 }, { disable: true, day: 6 }, { disable: true, day: 7 }, { disable: true, day: 8 }],
]


function mGetDate (month) {
  let date = new Date()
  let year = date.getFullYear()
  let d = new Date(year, month, 0)
  return d.getDate()
}
function getFirstDate () {
  let date = new Date()
  date.setDate(1)
  const day = date.getDay()
  console.log('day', day)
  return date
}

const Test = () => {
  const [month, setMonth] = useState(1)

  useEffect(() => {
    let currentMonth = new Date().getMonth() + 1
    setMonth(currentMonth)
  }, [])
  const maxDay = mGetDate(month)
  console.log('最大天数', maxDay)
  const b = getFirstDate()
  console.log('第一天', b)

  return (
    <div onClick={() => setMonth(month + 1)}>
      日历
    </div>
  )
}

export default Test
