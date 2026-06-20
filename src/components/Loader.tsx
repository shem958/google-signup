import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  fullscreen?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ size = 'medium', fullscreen = false }) => {
  return (
    <div className={`loader-container ${fullscreen ? 'fullscreen' : ''}`}>
      <div className={`spinner ${size}`}>
        <div className="spinner-inner"></div>
      </div>
    </div>
  );
};

export const Skeleton: React.FC = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar pulse"></div>
      <div className="skeleton-title pulse"></div>
      <div className="skeleton-line pulse"></div>
      <div className="skeleton-line pulse"></div>
    </div>
  );
};
