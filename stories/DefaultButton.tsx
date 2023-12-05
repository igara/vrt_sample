import React from 'react';

type Props = React.ComponentPropsWithoutRef<"button">;

export const DefaultButton = ({
  ...props
}: Props) => {
  return (
    <button
      {...props}
    >
      {props.children}
    </button>
  );
};
