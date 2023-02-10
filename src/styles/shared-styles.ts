import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/src/fonts/fonts/lexend.woff2') format('woff2'), url('/src/fonts/fonts/lexend.woff') format('woff'), url('/fonts/fonts/lexend.ttf') format('truetype')
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/src/fonts/fonts/roboto.woff2') format('woff2'), url('/src/fonts/fonts/roboto.woff') format('woff'), url('/fonts/fonts/roboto.ttf') format('truetype')
}

@font-face {
  font-family: "Glyphicons Halflings";
  src: url('/src/fonts/fonts/glyph.woff2') format("woff2"), url('/src/fonts/fonts/glyph.woff') format("woff"), url('/src/fonts/fonts/glyph.ttf') format('truetype'), url('/src/fonts/fonts/glyph.svg') format("svg")
}
`;