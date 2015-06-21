var cheerio = require('cheerio')
  , isogram = require('isogram')
  ;

var InjectGa = function (file) {
  this.$ = cheerio.load(file);
};

var p = InjectGa.prototype;

p.insert = function (code) {
  var snippet = this.generateSnippet(code);
  this.$('body').append('<script>\n' + snippet + '\n</script>\n');
  return this.$.html();
};

p.generateSnippet = function (code) {
  return isogram({id: code});
};

module.exports = InjectGa;
