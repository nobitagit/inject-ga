Inject Google Analytics tracking code in HTML pages.

Installation:

```sh
npm install inject-ga
```

Usage:

```sh
inject-ga input.html -c 'UA-66481277-1' [-o output.html] [-h]
```
Pass the `-h` flag if you want the code to be injected inside the `<head>` tag.
If no output target is passed it will default to stdout.

Input:
```html
<html>
<body>
  <i>am</i>
</body>
</html>
```

Output:
```html
<html>
<body>
  <i>am</i>
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