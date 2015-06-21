Inject Google Analytics tracking code in HTML pages.

Usage:

```sh
inject-ga input.html -c 'UA-66481277-1' -o output.html
```

Result:
```html
  <!-- the rest of your html file -->
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