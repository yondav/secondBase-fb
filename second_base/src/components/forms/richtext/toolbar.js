/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import React, { useState } from 'react';
import { RichUtils } from 'draft-js';
import {
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineStrikethrough,
} from 'react-icons/ai';
import { RiHeading, RiFontSize2 } from 'react-icons/ri';
import { GoQuote } from 'react-icons/go';
import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi';
import { Form } from '../../../styles';

const {
  RichText: { Toolbar },
} = Form;

const inlineBtns = [
  { command: 'BOLD', icon: FiBold },
  { command: 'ITALIC', icon: FiItalic },
  { command: 'UNDERLINE', icon: FiUnderline },
  { command: 'STRIKETHROUGH', icon: AiOutlineStrikethrough },
];

export const InlineBtns = ({ editorState, func }) =>
  inlineBtns.map(btn => renderBtns(editorState, func, btn));

const blockTypeBtns = [
  { icon: GoQuote, command: 'blockquote' },
  { icon: AiOutlineUnorderedList, command: 'unordered-list-item' },
  { icon: AiOutlineOrderedList, command: 'ordered-list-item' },
];

export const BlockBtns = ({ editorState, func }) =>
  blockTypeBtns.map(btn => renderBtns(editorState, func, btn));

const headings = {
  icon: RiHeading,
  options: [
    {
      icon: RiFontSize2,
      props: { size: '1.4em' },
      command: 'header-one',
    },

    {
      icon: RiFontSize2,
      props: { size: '1.2em' },
      command: 'header-two',
    },

    {
      icon: RiFontSize2,
      props: { size: '1em' },
      command: 'header-three',
    },
  ],
};

export const HeadingBtns = ({ editorState, func }) => {
  const [headingDropdown, setHeadingDropdown] = useState(false);

  return (
    <>
      <Toolbar.Button
        type='button'
        onMouseDown={() => setHeadingDropdown(!headingDropdown)}
        onBlur={() => setHeadingDropdown(false)}
      >
        {React.createElement(headings.icon, {})}
      </Toolbar.Button>
      <div tw='absolute top-full py-2 bg-gray-150 dark:bg-gray-900 rounded-lg shadow-lg'>
        {headingDropdown && (
          <div tw='flex flex-col '>
            {headings.options.map(btn => renderBtns(editorState, func, btn))}
          </div>
        )}
      </div>
    </>
  );
};

export const link = { icon: AiOutlineLink };

const renderBtns = (editorState, func, btn) => {
  let currentInlineStyle = editorState.getCurrentInlineStyle();
  let currentBlockType = RichUtils.getCurrentBlockType(editorState);
  if (currentInlineStyle.has(btn.command) || currentBlockType === btn.command) {
    return (
      <Toolbar.Button
        key={btn.command}
        type='button'
        onMouseDown={e => func(btn.command, e)}
        tw='bg-gray-500 dark:bg-gray-700'
      >
        {React.createElement(btn.icon, { ...btn.props })}
      </Toolbar.Button>
    );
  } else {
    return (
      <Toolbar.Button key={btn.command} type='button' onMouseDown={e => func(btn.command, e)}>
        {React.createElement(btn.icon, { ...btn.props })}
      </Toolbar.Button>
    );
  }
};
