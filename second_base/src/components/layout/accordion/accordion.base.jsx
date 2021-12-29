/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

const StyledBase = styled(motion.section)`
  ${tw`w-full flex flex-col justify-start items-center`}
`;

const Base = ({ children, ...rest }) => <StyledBase {...rest}>{children}</StyledBase>;

export default Base;

// .attrs({
//   className: 'w-full flex flex-col justify-start items-center',
// })`
//   & .accordion-section {
//     ${tw`w-full p-4 flex flex-col`}

//     & button {
//       ${tw`p-4 text-xl flex justify-between items-center rounded-md hover:bg-gray-100 hover:shadow-lg focus:outline-none`}
//       transition: 300ms all ease-in-out;

//       &:focus-visible {
//         outline: none;
//       }
//     }
//   }
// `;
