// var root = document.documentElement // <html>
//
// if ('textShadow' in root.style) {
//     root.classList.add('textShadow')
// } else {
//     root.classList.add('no-textshaow')
// }
// var root = document.documentElement // <html>
//
// if ('textShadow' in root.style) {
//     root.classList.add('textShadow')
// } else {
//     root.classList.add('no-textshaow')
// }


function testProperty(property) {
    var root = document.documentElement

    if (property in root.style) {
        root.classList.add(property.toLowerCase())
        return true
    }

    root.classList.add('no-' + property.toLowerCase())
    return false
}


function testValue(id, value, property) {
    var dummp = document.createElement('p')
    dummp.style[property] = value

    if (dummp.style[property]) {
        root.classList.add(id)
        return true
    }

    root.classList.add('no-' + id)
    return false
}
















