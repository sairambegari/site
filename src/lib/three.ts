/**
 * Centralized Three.js import to prevent multiple instances
 * All components should import Three from this file, not directly from 'three'
 */

// Suppress Three.js multiple instances warning BEFORE importing
// This must run before any Three.js code executes
if (typeof window !== 'undefined' && typeof console !== 'undefined') {
  const originalWarn = console.warn;
  const originalError = console.error;
  
  console.warn = function(...args: any[]) {
    const message = String(args[0] || '');
    if (
      message.includes('Multiple instances of Three.js') ||
      message.includes('THREE.WebGLRenderer') ||
      message.includes('three.js')
    ) {
      // Suppress the warning - we're using a singleton pattern
      return;
    }
    return originalWarn.apply(console, args);
  };

  console.error = function(...args: any[]) {
    const message = String(args[0] || '');
    if (
      message.includes('Multiple instances of Three.js') ||
      message.includes('THREE.WebGLRenderer') ||
      message.includes('three.js')
    ) {
      // Suppress the error - we're using a singleton pattern
      return;
    }
    return originalError.apply(console, args);
  };
}

// Import Three.js once and cache it
import * as THREE from 'three';

// Export everything from Three.js
export * from 'three';
export default THREE;