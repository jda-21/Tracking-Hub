import { useState } from 'react';
import truckBgImage from '../assets/Truck-bg.jpeg';
import jcgmailImage from '../assets/jcgmail.png';
import LoadingPage from './LoadingPage';
import Dashboard from './Dashboard';
import '../styles/Card.css';

const Card = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowDashboard(true);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error('Failed to load image');
  };

  if (showDashboard) {
    return <Dashboard />;
  }

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome Stranger</h1>
        <div className="content-section">
          <div className="truck-image-container" onClick={handleClick} role="button" tabIndex={0}>
            {!imageError ? (
              <img 
                src={truckBgImage} 
                alt="Truck" 
                className="truck-image" 
                onError={handleImageError}
              />
            ) : (
              <div className="image-fallback">
                <p>Image failed to load</p>
              </div>
            )}
          </div>
          <div className="button-container">
            <button className="cta-button" onClick={handleClick}>
              Ready to explore
            </button>
          </div>
        </div>
        <div className="credit-section">
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
    </div>
  );
};

export default Card; 