'use strict';

hexo.extend.tag.register('notion_html', function(args, content) {
  // Regular expression to match @media section
  let regex = /@media\s.*?\{[\s\S]*?\}/g;

  let content = content.replace(regex, '');
  return content;

}, {ends: true});