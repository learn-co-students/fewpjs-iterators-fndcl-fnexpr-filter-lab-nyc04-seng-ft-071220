function findMatching(drivers,driver) {
  return drivers.filter(person => person.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch(drivers,driver) {
  // ((typeof person.name !== "undefined"&& typeof driver !== "undefined"))&&(person.name === driver || person.name[0] == driver[0]));
  return drivers.filter(person => person.toLowerCase().indexOf(driver.toLowerCase()) === 0)
}

function matchName(drivers,driver) {
  return drivers.filter(person => person.name === driver)
}