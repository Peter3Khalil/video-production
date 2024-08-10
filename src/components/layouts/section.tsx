import { cn } from '@/lib/utils';
import React, { FC } from 'react';

export const Section: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn('px-4 py-12', className)} {...props}>
      {children}
    </section>
  );
};

export const SectionHeader: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col items-center gap-4 text-center md:max-w-lg',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const SectionTitle: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2 className={cn('text-3xl font-bold leading-none', className)} {...props}>
      {children}
    </h2>
  );
};

export const SectionDescription: FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, children, ...props }) => {
  return (
    <p className={cn('text-md text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
};

export const SectionContent: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('mx-auto flex flex-col gap-8 px-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};
