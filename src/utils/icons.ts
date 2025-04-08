import { lazy } from 'react';

// Import only the icons you need immediately
export const Guitar = lazy(() => import('lucide-react').then(mod => ({ default: mod.Guitar })));
export const MessageSquare = lazy(() => import('lucide-react').then(mod => ({ default: mod.MessageSquare })));
export const Bot = lazy(() => import('lucide-react').then(mod => ({ default: mod.Bot })));
export const X = lazy(() => import('lucide-react').then(mod => ({ default: mod.X })));
export const Send = lazy(() => import('lucide-react').then(mod => ({ default: mod.Send })));
export const User = lazy(() => import('lucide-react').then(mod => ({ default: mod.User })));
export const Cpu = lazy(() => import('lucide-react').then(mod => ({ default: mod.Cpu })));
export const Headphones = lazy(() => import('lucide-react').then(mod => ({ default: mod.Headphones }))); 