const Mock = require('mockjs')
// const Random = Mock.Random;

const data = Mock.mock({
    // 'list|1-10' or 'list|10'
    'list|1-10': [{
        'id|+1': 1,
        'icon': '@image(300x300, @color)',
        'name': '@cname',
        'introduction': '@ctitle',
        'products|2': [{
            'id|+1': 1,
            'src': '@image(500x500, @color)',
            'url': 'detail/',
            'title|8-20': '@cword',
            'newPrice': '￥@integer(100, 5000)',
            'oldPrice': '￥@integer(100, 5000)'
        }],
        'url': '#'
    }],
    'data': {
        'id|+1': 1,
        'icon': '@image(300x300, @color)',
        'name': '@cname',
        'introduction': '@ctitle',
    }
})

module.exports = data
