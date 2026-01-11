// Export old components (if any)
export * from './lib/ui';
export { Button as OldButton } from './lib/Button';

// Export shadcn components
export { Button, buttonVariants } from './components/ui/button';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';

// Export utils
export { cn } from './lib/utils';
