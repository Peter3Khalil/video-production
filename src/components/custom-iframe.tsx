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

const CustomIframe = ({
  children,
  onError,
  onLoad,
  useInViewOptions,
}: {
  children: React.ReactNode;
  useInViewOptions?: IntersectionOptions;
} & Pick<React.HTMLAttributes<HTMLIFrameElement>, 'onLoad' | 'onError'>) => {
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
      <div ref={ref} className="relative h-[300px] w-full">
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

export const CustomIframePlaceholder = () => {
  const { isLoaded } = useCustomIframe();
  return isLoaded ? null : (
    <Skeleton className="absolute left-0 top-0 h-full w-full" />
  );
};

export const CustomIframeContent: FC<React.HTMLProps<HTMLIFrameElement>> = ({
  className,
  ...props
}) => {
  const { isLoaded, setIsLoaded, onError, onLoad, inView } = useCustomIframe();
  return inView ? (
    <iframe
      {...props}
      loading="lazy"
      onLoad={(e) => {
        setIsLoaded(true);

        if (onLoad) {
          onLoad(e);
        }
      }}
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
