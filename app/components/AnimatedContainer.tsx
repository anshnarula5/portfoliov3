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
  duration?: number;
  animateOpacity?: boolean;
}

const AnimatedContainer = ({
  children,
  delay = 0.2,
  className = '',
  yMargin = '-30%',
  slideUp = false,
  slideDown = false,
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
        { 'scale-100': !slideUp && !slideDown && isVisible },
        { 'scale-[.93]': !slideUp && !slideDown && !isVisible }
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
