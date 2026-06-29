import React from 'react';

interface CenterContainerProps {
  children: React.ReactNode;
}

export default function CenterContainer({ children }: CenterContainerProps) {
  return (
    <div className="flex items-center justify-center min-h-dvh w-dvw bg-default-light">
      {children}
    </div>
  );
}
