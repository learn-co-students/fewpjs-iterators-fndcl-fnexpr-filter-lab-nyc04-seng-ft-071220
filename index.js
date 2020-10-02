// Code your solution here


let findMatching = (array, name) => {

    let matched = array.filter(e => {
        return e.toLowerCase() == name.toLowerCase()
    })
    return matched
}


let fuzzyMatch = (array, letters) => {

   let matched = array.filter(e => {
        return e.startsWith(letters)
    })
    return matched
}


let matchName = (array, name) => {

    let matched = array.filter(e => {
        return e.name == name
    })
    return matched
}