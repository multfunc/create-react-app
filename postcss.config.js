module.exports = {
    parser : 'postcss',
    plugins: {
        'postcss-pxtorem':{
            rootValue: 16,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList:[],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: [/node_modules/i,/public/]
        }
    }
}
