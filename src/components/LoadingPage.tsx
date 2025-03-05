import { FC, useEffect, useState } from 'react';
import { useLottie } from 'lottie-react';
import jcgmailImage from '../assets/jcgmail.png';
import LoadingAnimation from './LoadingAnimation';
import truckAnimation from '../animations/truck.json';
import '../styles/LoadingPage.css';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [animationError, setAnimationError] = useState(false);
  
  const { View: TruckAnimation } = useLottie({
    animationData: truckAnimation,
    loop: true,
    autoplay: true,
    onError: () => {
      console.error('Failed to load truck animation');
      setAnimationError(true);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-page">
      <div className="loading-content">
        <div className="truck-container">
          {!animationError ? (
            TruckAnimation
          ) : (
            <div className="fallback-animation">
              <LoadingAnimation />
            </div>
          )}
        </div>
        <div className="loading-indicator">
          <LoadingAnimation />
        </div>
      </div>
      <div className="loading-footer">
        <img 
          src={jcgmailImage} 
          alt="JCG Mail" 
          className="credit-image"
          onError={(e) => {
            console.error('Failed to load credit image');
            e.currentTarget.style.display = 'none';
          }}
        />
        <p className="credit-text">Dev by JDA</p>
      </div>
    </div>
  );
};

export default LoadingPage; 