Inject Google Analytics tracking code in HTML pages.

Installation:

```sh
npm install inject-ga
```

Usage:

```sh
inject-ga input.html -c 'UA-66481277-1' -o output.html
```
Input:
```html
</html>
<body>
  <span>Football</span>
</body>
</html>
```

Output:
```html
</html>
<body>
  <span>Football</span>
  <script>
  !function(G,o,O,g,l,e){G.GoogleAnalyticsObject=O;G[O]||(G[O]=function(){
  (G[O].q=G[O].q||[]).push(arguments)});G[O].l=+new Date;l=o.createElement(g);
  e=o.getElementsByTagName(g)[0];l.src='//www.google-analytics.com/analytics.js';
  e.parentNode.insertBefore(l,e)}(window,document,'ga','script');

  ga('create', 'UA-66481277-1', 'auto');
  ga('send', 'pageview');
  </script>
</body>
</html>
```