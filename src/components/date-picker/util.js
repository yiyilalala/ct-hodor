/**
* 获取该月第一天是星期几
*
* @param {Date} date
*
* @returns Number 0,1,2,3,4,5,6代表日，一，二，三，四，五，六
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getFirstDayOfMonth = (date) => {
  const tmpDate = new Date(date.getTime())
  tmpDate.setDate(1)
  return tmpDate.getDay()
}

/**
* 获取该月有几天
*
* @param {Number, Number} month, year
*
* @returns Number
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getDayCountOfMonth = (month, year = new Date().getFullYear) => {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return 29
    } else if (year % 400 === 0) {
      return 29
    }
    return 28
  }

  return 31
}

/**
* 获取上一个月是几月
*
* @param {Number} month
*
* @returns Number
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getPrevMonth = (month) => {
  if (month === 0) {
    return 11
  }
  return month - 1
}

/**
* 获取下一个月是几月
*
* @param {Number} month
*
* @returns Number
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getNextMonth = (month) => {
  if (month === 11) {
    return 0
  }
  return month + 1
}


/**
* 设置当天时间为00:00:00.00
*
*
* @returns Date(timestamp)
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const clearHours = (date) => {
  const tmpDate = new Date(date.getTime())
  tmpDate.setHours(0, 0, 0, 0)
  return tmpDate.getTime()
}