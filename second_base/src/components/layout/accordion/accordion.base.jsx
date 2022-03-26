/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

const StyledBase = styled(motion.section)`
  ${tw`w-full flex flex-col justify-start items-center`}
`;

const Base = ({ children, ...rest }) => <StyledBase {...rest}>{children}</StyledBase>;

export default Base;
