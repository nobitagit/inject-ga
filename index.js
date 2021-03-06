var cheerio = require('cheerio')
  , isogram = require('isogram');

var InjectGa = function (file) {
  this.$ = cheerio.load(file);
};

var p = InjectGa.prototype;

p.insert = function (code, appendToHead) {
  var snippet = this.generateSnippet(code)
    , target = appendToHead ? 'head' : 'body';

  this.$(target).append('\n<script>\n' + snippet + '\n</script>\n');
  return this.$.html();
};

p.generateSnippet = function (code) {
  return isogram({id: code});
};

module.exports = InjectGa;
