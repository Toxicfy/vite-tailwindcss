import _ from 'lodash';
const getUserInfo = require('./commonjs')
import createButton from './style-button/button';
import './common.scss'

const createComponent = text => {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}

const info = _.join([JSON.stringify(getUserInfo()), '', 'this is commonjs module'], '&nbsp;&nbsp;');
document.body.appendChild(createComponent(info))
document.body.appendChild(createButton())
document.body.appendChild(createComponent('背景色修改是由scss文件编写'))

