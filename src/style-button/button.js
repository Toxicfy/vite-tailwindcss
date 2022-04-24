import './button.css'

const createButton = () => {
    const button = document.createElement('button');
    button.className = 'button';
    button.innerHTML = '这是通过 css-loader & style-loader 的使用样式, 并且通过 postcss-preset-env 添加了兼容性前缀';
    return button;
}

export default createButton