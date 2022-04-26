module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                "modules": false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
                // false, 默认值 —— 不使用 polyfill 填充
                // usage, 依据源代码中出现的转换的新语法而定
                // entry, 完全按照兼容的浏览器转换出对应的方法
                useBuiltIns: 'entry',
                corejs: 3, // 指定 polyfill 使用的 core 版本
            }
        ]
    ]
}