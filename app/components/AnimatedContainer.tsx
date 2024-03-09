"use client"

import React, { ReactNode, useState } from 'react';
import cls from 'classnames';
import { InView } from 'react-intersection-observer';

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yMargin?: string;
  slideUp?: boolean;
  slideDown?: boolean;
  slideLeft?: boolean;
  duration?: number;
  animateOpacity?: boolean;
}

const AnimatedContainer = ({
  children,
  delay = 0,
  className = '',
  yMargin = '-15%',
  slideUp = false,
  slideDown = false,
  slideLeft = false,
  duration = 0.2,
  animateOpacity = true,
}: AnimatedContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InView
      as="div"
      triggerOnce={true}
      onChange={(inView) => {
        setIsVisible(inView);
      }}
      rootMargin={`0% 0% ${yMargin} 0%`}
      className={cls(className,
        { 'translate-y-0': slideUp && slideDown && isVisible },
        { 'translate-y-4': slideUp && !isVisible },
        { '-translate-y-4': slideDown && !isVisible },
        { 'translate-x-0' : slideLeft && isVisible},
        { '-translate-x-4' : slideLeft && !isVisible},
        { 'scale-100': !slideUp && !slideDown && !slideLeft && isVisible },
        { 'scale-[.93]': !slideUp && !slideDown && !slideLeft && !isVisible }
      )}
      style={{
        transition: `opacity ${duration}s cubic-bezier(0.84, 1.8, 1, 1) ${delay}s, 
                    transform ${duration}s cubic-bezier(0.84, 1.8, 1, 1) ${delay}s`,
        opacity: isVisible || !animateOpacity ? 1 : 0,
      }}
    >
      {children}
    </InView>
  );
};

export default AnimatedContainer;
