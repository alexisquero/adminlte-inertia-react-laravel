import React from 'react';

interface Props {
  title: string;
  description?: string;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    
    <div className="md:grid md:grid-cols-3 md:gap-6">
        <h3 className="text-lg font-medium text-gray-900">
          {title}
        </h3>        
        <h6 className="mt-3 max-w-xl text-sm text-gray-600">
          {description}
        </h6>
      </div>
    
  );
}
