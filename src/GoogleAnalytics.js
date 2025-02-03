import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title || 'Pokémon Card Tracker';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Track real-time Pokémon card prices from multiple sources like eBay, TCGPlayer, and PokeDATA.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'Track real-time Pokémon card prices from multiple sources.';
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};

export { GoogleAnalytics, SEO };
