import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary-600 mt-6 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;