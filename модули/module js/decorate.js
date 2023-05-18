const decorator = {
    dollar: '$',
    hash: '#',
    percent: '%'
}

function decorate(decorator, text) {
    return `${decorator} ${text} ${decorator}`;
}

exports.decorateWithHash = decorate.bind(null, decorator.hash);
exports.decorateWithDollar = decorate.bind(null, decorator.dollar);
exports.decorateWithPercent = decorate.bind(null, decorator.percent);