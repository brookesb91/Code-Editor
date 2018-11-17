const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const compiled = document.getElementById('compiled').contentWindow.document;

compile = () => {

  compiled.open();
  compiled.writeln(
    `
    ${html.value}
    <style>
    ${css.value}
    </style>
    <script>
    try {
    ${js.value}
    }
    catch (error) {
      console.log('Something went wrong with your JS!');
      console.log(error);
    }
    </script>
    `
  );
};

(() => {
  document.body.onkeyup = compile;

  html.value = `<p>Some HTML</p>`;
  css.value = `p { color: red; }`;
  js.value = `document.body.append('Some More HTML');`;

})();