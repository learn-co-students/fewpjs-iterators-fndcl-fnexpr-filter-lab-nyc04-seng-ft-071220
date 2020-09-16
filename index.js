// Code your solution here


function findMatching(driverArray, driverName) {
    return driverArray.filter( driver =>
        driver.toLowerCase() === driverName.toLowerCase()
    )
}

function fuzzyMatch(driverArray, testString) {
    return driverArray.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}

function matchName(driverArray, driverName) {
    return driverArray.filter( driver => driver.name === driverName)
}