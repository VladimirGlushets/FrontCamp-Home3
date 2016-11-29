module.exports = function(source) {
    this.cacheable();

    let temp = source.split('=');

    let str = temp[1].replace(';', '').trim();
    let obj = JSON.parse(str);

    for(var key in obj) {
        if(Number.isInteger(obj[key]))
        {
          delete obj[key];
        }
    }
    return "module.exports = " + JSON.stringify(obj) + ";";
};
