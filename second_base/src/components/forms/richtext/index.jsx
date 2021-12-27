/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useState, useEffect, useRef } from 'react';
import {
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { onAddLink, createLinkDecorator } from './draft.linkEntity';
import { InlineBtns, BlockBtns, HeadingBtns, link } from './toolbar';
import { InputDialogue } from '../../dialogue';
// import { Form, Button } from '../../../styles';
import { Form } from '..';
import { RichStyles } from './styled';

const { Wrapper, Container, Toolbar } = RichStyles;

const RichText = ({ handleSubmit, data }) => {
  const ref = useRef(null);
  const decorator = createLinkDecorator();
  const [linkDialogue, setLinkDialogue] = useState(false);
  const [editorState, setEditorState] = useState(
    data
      ? EditorState.createWithContent(convertFromRaw(data), decorator)
      : EditorState.createEmpty()
  );
  const rawContentState = convertToRaw(editorState.getCurrentContent());
  const markup = draftToHtml(rawContentState);

  const handleKeyCommand = command => {
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

  const keyBindingFunction = e => {
    if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === 'x') return 'strikethrough';
    if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === '9') return 'blockquote';
    if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === '7') return 'ordered-list';
    if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === '8')
      return 'unordered-list';

    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (block, e) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, block));
  };

  const onBtnCommand = (command, e) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, command));
  };

  const linkForm = {
    task: linkData => onAddLink(editorState, setEditorState, linkData),
    inputs: [
      { name: 'url', type: 'text' },
      { name: 'display', type: 'text' },
    ],
  };

  useEffect(() => ref.current.focus(), []);
  useEffect(() => console.log(markup), [editorState]);
  return (
    <>
      {linkDialogue && (
        <InputDialogue
          isOpen={linkDialogue}
          handleClose={() => setLinkDialogue(false)}
          form={linkForm}
        />
      )}
      <form onSubmit={e => handleSubmit(e, { draft: rawContentState, html: markup })}>
        <Form.Group tw='mb-2'>
          <Form.Label>Bio</Form.Label>
          <Wrapper>
            <Toolbar.Container>
              <InlineBtns editorState={editorState} func={onBtnCommand} />
              <div tw='relative flex items-center'>
                <HeadingBtns editorState={editorState} func={toggleBlockType} />
              </div>
              <BlockBtns editorState={editorState} func={toggleBlockType} />
              <Toolbar.Button type='button' onMouseDown={() => setLinkDialogue(!linkDialogue)}>
                {React.createElement(link.icon, {})}
              </Toolbar.Button>
            </Toolbar.Container>
            <Container>
              <Editor
                ref={ref}
                editorState={editorState}
                onChange={setEditorState}
                placeholder='Insert bio here...'
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={keyBindingFunction}
              />
            </Container>
          </Wrapper>
        </Form.Group>
        <div tw='flex justify-end'>
          <Form.Button type='submit' purple>
            Save
          </Form.Button>
        </div>
      </form>
    </>
  );
};

export default RichText;
