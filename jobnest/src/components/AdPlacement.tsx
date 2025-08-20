import { useEffect, useRef } from 'react';

interface AdPlacementProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

const AdPlacement = ({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  className = '' 
}: AdPlacementProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Only initialize ads if Google AdSense is loaded and window.adsbygoogle exists
      if (window.adsbygoogle) {
        (window.adsbygoogle as any[]).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Clear styling to ensure ads are visually distinct from navigation
  const adContainerStyles = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '4px',
    padding: '8px',
    margin: '16px 0',
    textAlign: 'center' as const,
    position: 'relative' as const
  };

  const adLabelStyles = {
    fontSize: '10px',
    color: '#6c757d',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '4px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div 
      className={`ad-container ${className}`}
      style={adContainerStyles}
      ref={adRef}
    >
      {/* Clear advertisement labeling */}
      <div style={adLabelStyles}>Advertisement</div>
      
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          backgroundColor: 'transparent'
        }}
        data-ad-client="ca-pub-5926233232064241"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

// Predefined ad slots for different sections
export const HeaderAd = () => (
  <AdPlacement 
    slot="1234567890" 
    format="horizontal"
    className="header-ad"
  />
);

export const SidebarAd = () => (
  <AdPlacement 
    slot="2345678901" 
    format="vertical"
    className="sidebar-ad"
  />
);

export const ContentAd = () => (
  <AdPlacement 
    slot="3456789012" 
    format="rectangle"
    className="content-ad"
  />
);

export const FooterAd = () => (
  <AdPlacement 
    slot="4567890123" 
    format="horizontal"
    className="footer-ad"
  />
);

export default AdPlacement;

// Add global types for window.adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
