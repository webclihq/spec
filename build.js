#!/usr/bin/env node
// build.js — stamps _partials into HTML files in-place.
// Usage: node build.js
// No npm dependencies — stdlib only.

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PARTIALS_DIR = path.join(ROOT, '_partials');

const sidebar = fs.readFileSync(path.join(PARTIALS_DIR, 'sidebar.html'), 'utf8');
const mobileHeader = fs.readFileSync(path.join(PARTIALS_DIR, 'mobile-header.html'), 'utf8');
const googleTag = fs.readFileSync(path.join(PARTIALS_DIR, 'google-tag.html'), 'utf8');

// [file path relative to ROOT, root prefix, pages prefix]
const pages = [
  ['index.html',               '',    'pages/'],
  ['pages/top-clis.html',      '../', ''],
  ['pages/gws-review.html',    '../', ''],
  ['pages/hubspot-review.html','../', ''],
  ['pages/ranking.html',       '../', ''],
  ['pages/md-viewer.html',     '../', ''],
];

function stamp(template, root, pages) {
  return template
    .replace(/\{\{ROOT\}\}/g, root)
    .replace(/\{\{PAGES\}\}/g, pages);
}

function replaceBlock(html, openTag, closeTag, replacement) {
  const re = new RegExp(openTag + '[\\s\\S]*?' + closeTag, 'g');
  return html.replace(re, openTag + '\n' + replacement + '\n' + closeTag);
}

pages.forEach(function ([file, rootPrefix, pagesPrefix]) {
  const filePath = path.join(ROOT, file);

  let html = fs.readFileSync(filePath, 'utf8');

  const stampedSidebar = stamp(sidebar, rootPrefix, pagesPrefix);
  const stampedHeader = stamp(mobileHeader, rootPrefix, pagesPrefix);

  html = replaceBlock(html, '<!-- MOBILE-HEADER -->', '<!-- /MOBILE-HEADER -->', stampedHeader.trimEnd());
  html = replaceBlock(html, '<!-- SIDEBAR -->', '<!-- /SIDEBAR -->', stampedSidebar.trimEnd());
  html = replaceBlock(html, '<!-- GOOGLE-TAG -->', '<!-- /GOOGLE-TAG -->', googleTag.trimEnd());

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Stamped: ' + file);
});

console.log('Done.');
