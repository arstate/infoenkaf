// Fix: Added React import to resolve the 'Cannot find namespace React' errors on lines 7 and 15
import React from 'react';

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
  primary?: boolean;
}

export interface SocialItem {
  id: string;
  platform: string;
  url: string;
  icon: React.ReactNode;
}