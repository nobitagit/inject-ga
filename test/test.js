var InjectGa = require('../index')
  , expect = require('expect.js')
  ;

var analayticsId = 'UA-64422297-1'
  , htmlSample = '<html><head></head><body><span>hi</span></body></html>'
  , snippet = '\n<script>\n!function(G,o,O,g,l,e){G.GoogleAnalyticsObject=O;G[O]||(G[O]=function(){\n(G[O].q=G[O].q||[]).push(arguments)});G[O].l=+new Date;l=o.createElement(g);\ne=o.getElementsByTagName(g)[0];l.src=\'//www.google-analytics.com/analytics.js\';\ne.parentNode.insertBefore(l,e)}(window,document,\'ga\',\'script\');\n\nga(\'create\', \'UA-64422297-1\', \'auto\');\nga(\'send\', \'pageview\');\n</script>\n'
  , inj
  , res
  ;

describe('insert', function () {

  beforeEach(function () {
    inj = new InjectGa(htmlSample);
  });

  afterEach(function () {
    inj = res = undefined;
  });

  it('should use the passed analytics ID', function () {
    var output = inj.insert(analayticsId);
    expect(output).to.contain(analayticsId);
  });

  it('should append the snippet to the *body* tag when no arg is passed',
     function () {
      res = '<html><head></head><body><span>hi</span>'+ snippet +'</body></html>';

      var output = inj.insert('UA-64422297-1');
      expect(output).to.eql(res);
  });

  it('should append the snippet to the *body* tag when false is passed',
     function () {
      res = '<html><head></head><body><span>hi</span>'+ snippet +'</body></html>';

      var output = inj.insert('UA-64422297-1', false);
      expect(output).to.eql(res);
  });

  it('should append the snippet to the *head* tag when true is passed',
     function () {
      res = '<html><head>'+ snippet +'</head><body><span>hi</span></body></html>';

      var output = inj.insert('UA-64422297-1', true);
      expect(output).to.eql(res);
  });
});
