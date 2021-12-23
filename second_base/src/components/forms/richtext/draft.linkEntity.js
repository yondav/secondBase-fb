/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import React from 'react';
import { CompositeDecorator, EditorState, Modifier } from 'draft-js';

const Link = ({ entityKey, contentState, children }) => {
  let { url } = contentState.getEntity(entityKey).getData();
  return (
    <a tw='text-blue-900' href={url} rel='noopener noreferrer' target='_blank'>
      {children}
    </a>
  );
};

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

export const createLinkDecorator = () =>
  new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);

// call all together
export const onAddLink = (editorState, setEditorState, data) => {
  let linkUrl = data.url;
  const decorator = createLinkDecorator();

  if (linkUrl) {
    let displayLink = data.display;

    if (displayLink) {
      const currentContent = editorState.getCurrentContent();
      const createEntity = currentContent.createEntity('LINK', 'MUTABLE', {
        url: linkUrl,
      });
      let entityKey = currentContent.getLastCreatedEntityKey();
      const selection = editorState.getSelection();
      const textWithEntity = Modifier.replaceText(
        currentContent,
        selection,
        displayLink,
        null,
        entityKey
      );
      let newState = EditorState.createWithContent(textWithEntity, decorator);
      setEditorState(newState);
    }
  }
};
