# Server-Side Logging Implementation

This document outlines the comprehensive server-side logging system implemented for all sensitive areas in the xLineDesign application.

## Overview

The logging system provides structured, secure logging for all sensitive operations with automatic data sanitization and rate limiting integration.

## Logger Utility (`app/lib/logger.ts`)

### Features

- **Data Sanitization**: Automatically removes sensitive information (emails, phone numbers, tokens, etc.)
- **Structured Logging**: JSON-formatted logs with consistent structure
- **Request Context Extraction**: Automatically captures IP, user agent, method, and path
- **Type Safety**: Full TypeScript support with specific interfaces for different log types
- **Comprehensive Request Details**: Captures query parameters, request headers, request body, response size, processing time, and database query count
- **Performance Monitoring**: Tracks processing time and database operations for performance analysis
- **Enhanced Error Tracking**: Captures stack traces, file names, line numbers, and function names for better debugging

### Log Levels

- `INFO`: Successful operations, rate limit allowances
- `WARN`: Rate limit violations, validation errors, spam attempts
- `ERROR`: System errors, configuration issues, failed operations

## Implemented Logging Areas

### 1. Rate Limiting (`app/lib/rate-limit.ts`)

**Actions Logged:**

- `rate_limit_allowed`: When requests are within limits
- `rate_limit_exceeded`: When rate limits are violated

**Data Captured:**

- IP address
- Rate limit key
- Limit configuration (limit, window)
- Remaining requests
- Retry-after time
- User agent and path

### 2. Contact Form (`app/api/contact/route.ts`)

**Actions Logged:**

- `contact_form_submitted`: Successful form submissions
- `contact_form_spam`: Spam detection (message too long)
- `contact_form_validation_error`: Validation failures
- `contact_form_config_error`: Missing Telegram configuration
- `contact_form_error`: General errors

**Data Captured:**

- Email (sanitized)
- Name
- Message length
- Validation errors
- Error types and details

### 3. Authentication - OTP Send (`app/api/auth/send-otp/route.ts`)

**Actions Logged:**

- `otp_sent`: Successful OTP generation
- `otp_failed`: Failed OTP generation

**Data Captured:**

- Session ID
- Expiration time
- Rate limiting context
- Error details

### 4. Authentication - OTP Verification (`app/api/auth/verify-otp/route.ts`)

**Actions Logged:**

- `otp_verified`: Successful OTP verification
- `otp_failed`: Failed verification attempts

**Data Captured:**

- Session ID
- User ID (on success)
- Rate limiting context
- Validation errors

### 5. Authentication - Logout (`app/api/auth/logout/route.ts`)

**Actions Logged:**

- `logout`: Successful logout
- `logout_error`: Logout failures

**Data Captured:**

- Request context
- Error details

### 6. Project Management (`app/api/properties/route.ts`)

**Actions Logged:**

- `project_viewed`: Property listing views
- `project_created`: New property creation
- `project_updated`: Property updates
- `project_fetch_error`: Fetch failures
- `project_creation_error`: Creation failures
- `project_update_error`: Update failures

**Data Captured:**

- Property ID and slug
- Title, category, location
- Related data counts (images, chapters, sections)
- Query parameters
- Error details

### 7. Individual Project Operations (`app/api/property/[slug]/route.ts`)

**Actions Logged:**

- `project_viewed`: Individual property views
- `project_updated`: Property updates by slug
- `project_deleted`: Property deletions
- `project_not_found`: 404 errors
- `project_fetch_error`: Fetch failures
- `project_update_error`: Update failures
- `project_delete_error`: Deletion failures

**Data Captured:**

- Property ID and slug
- Title, category, location
- Related data counts
- Pre-deletion property info (for deletions)

## Log Format

All logs follow this structure:

```json
{
  "action": "specific_action_name",
  "ip": "client_ip_address",
  "userAgent": "browser_user_agent",
  "method": "HTTP_METHOD",
  "path": "/api/endpoint",
  "statusCode": 200,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "metadata": {
    "additional_context": "value"
  },
  "error": "error_message_if_applicable",
  "errorDetails": {
    "message": "Detailed error message",
    "stack": "Full stack trace",
    "fileName": "app/api/properties/route.ts",
    "lineNumber": 45,
    "columnNumber": 12,
    "functionName": "POST"
  },
  "requestDetails": {
    "queryParams": {
      "includeImages": "true",
      "includeChapters": "false"
    },
    "requestBody": {
      "sanitized_request_data": "value"
    },
    "requestHeaders": {
      "accept": "application/json",
      "content-type": "application/json",
      "user-agent": "Mozilla/5.0..."
    },
    "responseSize": 2048,
    "processingTime": 150,
    "databaseQueries": 1
  }
}
```

## Security Features

### Data Sanitization

- **Emails**: Replaced with `[EMAIL]`
- **Phone Numbers**: Replaced with `[PHONE]`
- **Tokens**: Replaced with `[TOKEN]`
- **Bot Tokens**: Replaced with `[BOT_TOKEN]`
- **Sensitive Fields**: Any field containing "password", "token", "secret", "key", or "auth" is redacted

### Rate Limiting Integration

- All rate limiting activities are automatically logged
- Context information (IP, user agent, path) is included
- Rate limit violations are logged as warnings

## Vercel Logging Considerations

### Log Retention

- **Hobby Plan**: 7 days
- **Pro Plan**: 30 days
- **Enterprise Plan**: 90 days

### Log Size Limits

- Individual log entries: 4KB maximum
- Structured JSON format ensures efficient storage

### Best Practices Implemented

- Sensitive data is automatically sanitized
- Log levels are appropriate (info/warn/error)
- Context is captured without exposing sensitive information
- Rate limiting logs help identify abuse patterns

## Monitoring Recommendations

### Key Metrics to Monitor

1. **Rate Limit Violations**: Track patterns of abuse
2. **Authentication Failures**: Monitor for brute force attempts
3. **Contact Form Spam**: Identify spam patterns
4. **Project Operations**: Track admin activity
5. **Error Rates**: Monitor system health

### Alert Thresholds

- High rate of rate limit violations from same IP
- Multiple authentication failures
- Unusual contact form activity
- Project deletion operations
- High error rates in any endpoint

## Usage Examples

### Viewing Logs in Vercel

```bash
# View function logs
vercel logs --follow

# View specific function logs
vercel logs --function=api/contact/route.ts

# View logs with specific action
vercel logs | grep "rate_limit_exceeded"
```

### Log Analysis

```bash
# Count rate limit violations
vercel logs | grep "rate_limit_exceeded" | wc -l

# Find failed authentication attempts
vercel logs | grep "otp_failed"

# Monitor project operations
vercel logs | grep "project_"
```

## Request Details Captured

### Query Parameters

- All URL query parameters are automatically captured
- Useful for understanding user preferences and filtering behavior

### Request Headers

- Relevant headers are captured (excluding sensitive ones)
- Includes: Accept, Content-Type, User-Agent, Referer, Origin, etc.
- Authorization headers are captured for security analysis

### Request Body

- All request bodies are captured and sanitized
- Sensitive data is automatically redacted
- Useful for debugging and understanding user input

### Response Metrics

- **Response Size**: Size of the JSON response in bytes
- **Processing Time**: Time taken to process the request in milliseconds
- **Database Queries**: Number of database operations performed

### Performance Insights

- Track slow queries and performance bottlenecks
- Monitor database query patterns
- Identify optimization opportunities

### Error Debugging

- **Stack Traces**: Full error stack traces for debugging
- **Code Location**: File name, line number, and column number where error occurred
- **Function Context**: Name of the function where the error originated
- **Filtered Stack**: Automatically filters out node_modules and internal framework code
- **Error Types**: Distinguishes between different error types (Error objects vs other errors)
- **Enhanced Error Logging**: Uses `logger.errorWithStack()` for Error objects and `logger.error()` for other errors

## Future Enhancements

1. **External Logging Service**: Consider integrating with DataDog, LogRocket, or Sentry for advanced analytics
2. **Log Aggregation**: Implement log aggregation for better analysis
3. **Custom Alerts**: Set up custom alerts for specific patterns
4. **Advanced Performance Metrics**: Add database query timing and connection pooling metrics
5. **User Session Tracking**: Enhanced session tracking for better security analysis
6. **Real-time Monitoring Dashboard**: Create a dashboard for real-time log analysis
