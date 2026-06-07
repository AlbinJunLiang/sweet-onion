export interface RateLimitError {
  message: string;
  maxAttempts: number;
  retryAfter: string; 
  resetTime: number;
  error: string;
}