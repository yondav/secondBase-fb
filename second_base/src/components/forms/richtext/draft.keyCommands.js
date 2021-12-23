import { KeyBindingUtil, getDefaultKeyBinding, RichUtils } from 'draft-js';

export const handleKeyCommand = (command, editorState, setEditorState) => {
  let newState = RichUtils.handleKeyCommand(editorState, command);

  if (!newState && command === 'strikethrough')
    newState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH');
  if (!newState && command === 'blockquote')
    newState = RichUtils.toggleBlockType(editorState, 'blockquote');
  if (!newState && command === 'ordered-list')
    newState = RichUtils.toggleBlockType(editorState, 'ordered-list-item');
  if (!newState && command === 'unordered-list')
    newState = RichUtils.toggleBlockType(editorState, 'unordered-list-item');

  if (newState) {
    setEditorState(newState);
    return 'handled';
  }

  return 'not-handled';
};

export const keyBindingFunction = e => {
  if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === 'x') return 'strikethrough';
  if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === '9') return 'blockquote';
  if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === '7') return 'ordered-list';
  if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === '8') return 'unordered-list';

  return getDefaultKeyBinding(e);
};
