
import React from 'react';

export type Theme = 'light' | 'dark';

export enum Page {
  HOME = 'HOME',
  BLOG = 'BLOG',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
}

export interface BlogPost {
  id: number;
  title: string;
  category: 'Gaming' | 'Workstation' | string;
  description: string; // Used for Short Details on cards
  fullDescription?: string; // Used for Rich Text Details on page
  imageUrl: string;
  galleryImages?: string[];
  specs: string[];
  date: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}
