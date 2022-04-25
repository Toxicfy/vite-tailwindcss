const createImage = function (url) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = require('./img/test.png')
    img.width = 400
    div.appendChild(img)
    return div
}

export default createImage