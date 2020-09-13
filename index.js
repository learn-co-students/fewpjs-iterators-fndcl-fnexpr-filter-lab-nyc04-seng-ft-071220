// Code your solution here
let findMatching = (drivers, str) => drivers.filter( driver => driver.toLowerCase() === str.toLowerCase())
let fuzzyMatch = (drivers, str) => drivers.filter(driver => (driver.split(""))[0] === str[0])
let matchName = (drivers,str) => drivers.filter(driver => driver.name === str)