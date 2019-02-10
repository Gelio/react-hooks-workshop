import { future as theme } from 'mdx-deck/themes';
import codeHighlightStyle from 'react-syntax-highlighter/styles/prism/tomorrow';
import prismTypescript from 'react-syntax-highlighter/languages/prism/typescript';
import prismTsx from 'react-syntax-highlighter/languages/prism/tsx';
import prismBash from 'react-syntax-highlighter/languages/prism/bash';

export default {
  ...theme,
  prism: {
    style: codeHighlightStyle,
    languages: {
      typescript: prismTypescript,
      tsx: prismTsx,
      sh: prismBash
    },
  },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
