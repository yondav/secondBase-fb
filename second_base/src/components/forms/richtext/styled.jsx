/** @jsxImportSource @emotion/react */

import tw, { styled } from 'twin.macro';

export const RichStyles = {
  Wrapper: styled.div`
    ${tw`w-full flex flex-col mt-3`}

    & .DraftEditor-root {
      ${tw`w-full h-full overflow-scroll`}
    }
  `,

  Container: styled.div`
    ${tw`flex h-60 rounded-lg bg-gray-150 dark:(bg-gray-900 text-gray-150) p-3 shadow-lg`}

    & .public-DraftEditorPlaceholder-inner {
      ${tw`absolute text-gray-500 dark:text-gray-700 pointer-events-none`}
    }
  `,

  Toolbar: {
    Container: styled.div`
      ${tw`relative flex items-center px-4 py-2 mb-1 bg-gray-150 dark:bg-gray-900 rounded-lg`}

      width: fit-content;
    `,

    Button: styled.button`
      ${tw`p-1 mr-1 rounded-lg border border-gray-250 dark:border-gray-850 shadow-sm hover:shadow-xl hover:scale-105`}
    `,
  },
};
