'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React, { FC, useState } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

type ContextType = {
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  inView: boolean;
} & Pick<React.HTMLAttributes<HTMLIFrameElement>, 'onLoad' | 'onError'>;

const CustomIframeContext = React.createContext<ContextType | undefined>(
  undefined,
);

type CustomIframeProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  Pick<React.HTMLAttributes<HTMLIFrameElement>, 'onLoad' | 'onError'> & {
    useInViewOptions?: IntersectionOptions;
  };

const CustomIframe = ({
  children,
  onError,
  onLoad,
  useInViewOptions,
  className,
  ...props
}: CustomIframeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...useInViewOptions,
  });

  return (
    <CustomIframeContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        onLoad,
        onError,
        inView,
      }}
    >
      <div
        ref={ref}
        className={cn('relative h-[300px] w-full', className)}
        {...props}
      >
        {children}
      </div>
    </CustomIframeContext.Provider>
  );
};

const useCustomIframe = () => {
  const context = React.useContext(CustomIframeContext);

  if (context === undefined) {
    throw new Error('useCustomIframe must be used within a CustomIframe');
  }

  return context;
};

export const CustomIframePlaceholder: FC<
  React.ComponentProps<typeof Skeleton>
> = ({ className, ...props }) => {
  const { isLoaded } = useCustomIframe();
  return isLoaded ? null : (
    <Skeleton
      className={cn('absolute left-0 top-0 h-full w-full', className)}
      {...props}
    />
  );
};

export const CustomIframeContent: FC<React.HTMLProps<HTMLIFrameElement>> = ({
  className,
  ...props
}) => {
  const { isLoaded, setIsLoaded, onError, onLoad, inView } = useCustomIframe();

  const handleOnLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    setIsLoaded(true);

    if (onLoad) {
      onLoad(e);
    }
  };

  return inView ? (
    <iframe
      {...props}
      loading="lazy"
      onLoad={handleOnLoad}
      onError={onError}
      className={cn(
        'absolute left-0 top-0 h-full w-full duration-1000',
        {
          'opacity-0': !isLoaded,
          'opacity-100': isLoaded,
        },
        className,
      )}
    ></iframe>
  ) : null;
};

export default CustomIframe;
