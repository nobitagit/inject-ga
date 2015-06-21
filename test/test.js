var InjectGa = require('../index')
  , expect = require('expect.js')
  ;

var analayticsId = 'UA-64422297-1'
  , snippet = '<script>\n!function(G,o,O,g,l,e){G.GoogleAnalyticsObject=O;G[O]||(G[O]=function(){\n(G[O].q=G[O].q||[]).push(arguments)});G[O].l=+new Date;l=o.createElement(g);\ne=o.getElementsByTagName(g)[0];l.src=\'//www.google-analytics.com/analytics.js\';\ne.parentNode.insertBefore(l,e)}(window,document,\'ga\',\'script\');\n\nga(\'create\', \'UA-64422297-1\', \'auto\');\nga(\'send\', \'pageview\');\n</script>\n'
  ;

describe('insert', function () {
  it('should append the tracking code to the body tag', function () {
    var inj = new InjectGa('<html><body></body></html>');
    var output = inj.insert('UA-64422297-1');
    expect(output).to.eql('<html><body>'+ snippet +'</body></html>');
  });

  it('should use the passed analytics ID', function () {
    var inj = new InjectGa('<html><body></body></html>');
    var output = inj.insert(analayticsId);
    expect(output).to.contain(analayticsId);
  });
})