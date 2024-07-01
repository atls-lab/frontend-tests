import React from 'react';
import {BackdropElement, baseBackdropStyles} from "./backdrop.element";
import {backdropMotionVariants} from "./backdrop.motion";

const Backdrop: React.FC = (props) => {
  return (
      <BackdropElement
          className={baseBackdropStyles}
          variants={backdropMotionVariants}
          animate="target"
          initial="enter"
          exit="exit"
          {...props}
      />
  );
};

export { Backdrop };
