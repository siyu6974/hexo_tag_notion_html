'use strict';

function setupFancyBox(content) {
  let regex = /<body[^>]*>/i;

  // Content to insert
  let scriptBlock = `
  <script>
    Fancybox.bind('[data-fancybox]', {
      // Your custom options
    });
  </script>
  `;
  return content.replace(regex, '$&\n' + scriptBlock);
}

hexo.extend.tag.register('notion_html', function (args, content) {
  // Regular expression to match @media section
  var regex = /@media\s.*?\{[\s\S]*?\}/g;
  content = content.replaceAll(regex, '');

  // Regex pattern to match <a> tags with <img> tag inside
  regex = /<a\s+([^>]*)href="([^"]*)"(?=[^>]*>\s*<img)/g;
  // Replace <a> tag with data-fancybox attribute added
  content = content.replaceAll(regex, '<a $1 data-fancybox href="$2"');
  console.log(content);
  content = setupFancyBox(content);
  return content;

}, { ends: true });