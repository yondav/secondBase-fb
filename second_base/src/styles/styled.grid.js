import tw, { styled } from 'twin.macro';

export const Container = styled.div`p-4 grid grid-cols-12`;

export const Col = ({ xs, sm, md, lg, children }) => {
  const renderClasses = () => {
    let classes = ['py-3', 'px-4', `col-span-${xs || 12}`];
    if (sm) classes.push(`sm:col-span-${sm}`);
    if (md) classes.push(`md:col-span-${md}`);
    if (lg) classes.push(`lg:col-span-${lg}`);

    return classes.join(' ');
  };

  return <div className={renderClasses()}>{children}</div>;
};
