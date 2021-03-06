import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const Normalize = createGlobalStyle`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  code,
  em,
  img,
  small,
  strong,
  sub,
  sup,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  footer,
  header,
  nav,
  section,
  time,
  audio,
  video {
  font-size: 100%;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  border: 0;
  background-color: transparent;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  html, body {
    height: 100%;
     overflow-y: scroll;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts[0]};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
small,
hgroup,
summary {
  display: block;
}



img,
embed,
iframe,
object,
audio,
video {
  max-width: 100%;
  height: auto;
}
iframe {
  border: 0;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
blockquote,
q {
  quotes: none;
}
blockquote::before,
blockquote::after,
q::before,
q::after {
  content: "";
  content: none;
}
ul,
li {
  list-style: none;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
caption,
th,
td {
  font-weight: normal;
  text-align: left;
  vertical-align: top;
}
input {
  line-height: normal;
  border-radius: ${props => props.theme.radii[0]};
}
input,
select {
  vertical-align: middle;
}
button,
input,
select,
textarea {
  margin: 0;
  text-transform: none;
  border: 0;
  font-family: inherit;
}
input[type="radio"] {
  vertical-align: text-bottom;
}
input[type="checkbox"] {
  vertical-align: bottom;
}
input::-ms-clear {
  display: none;
}
input::-ms-reveal {
  display: none;
}
strong,
b {
  font-weight: bold;
}
small {
  font-size: 80%;
}
abbr,
acronym {
  cursor: help;
  text-decoration: none;
  border-bottom: 0.1em dotted;
}
a:active,
a:hover {
  outline-width: 0;
}
label,
input[type="file"],
button,
[type="button"],
[type="reset"],
[type="submit"],
[role="button"] {
  cursor: pointer;
}
[disabled] {
  cursor: default;
}
img {
  border-style: none;
}
pre,
code,
kbd,
samp {
  font-family: monospace;
}
`

Normalize.defaultProps = {
  theme: theme,
}

Normalize.displayName = 'Normalize'

export default Normalize
