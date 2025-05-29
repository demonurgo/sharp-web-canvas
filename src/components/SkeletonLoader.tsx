import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  aspectRatio?: string;
  variant?: 'project-card' | 'featured-project' | 'default';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  aspectRatio = '4/3',
  variant = 'default'
}) => {
  const getSkeletonContent = () => {
    switch (variant) {
      case 'project-card':
        return (
          <div className="animate-pulse">
            <div className={`w-full bg-gray-300 dark:bg-gray-700 rounded mb-4`} style={{ aspectRatio }}>
              <div className="flex items-center justify-center h-full">
                <div className="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-500 dark:bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-4">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="space-y-1">
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
              <div className="flex gap-1 pt-2">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-14"></div>
              </div>
            </div>
          </div>
        );
      case 'featured-project':
        return (
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/5"></div>
                </div>
                <div className="flex gap-2 pt-4">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                </div>
                <div className="flex gap-3 pt-4">
                  <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
                  <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-28"></div>
                </div>
              </div>
              <div className={`w-full bg-gray-300 dark:bg-gray-700 rounded-lg`} style={{ aspectRatio }}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-500 dark:bg-gray-500 rounded"></div>
                    </div>
                    <div className="h-6 bg-gray-400 dark:bg-gray-600 rounded w-32 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="animate-pulse">
            <div className={`w-full bg-gray-300 dark:bg-gray-700 rounded`} style={{ aspectRatio }}>
              <div className="flex items-center justify-center h-full">
                <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`skeleton-loader ${className}`}>
      {getSkeletonContent()}
    </div>
  );
};

export default SkeletonLoader;