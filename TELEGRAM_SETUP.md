# Telegram Bot Setup for Contact Form and Admin Authentication

This guide will help you set up the Telegram bot integration for both the contact form and the admin authentication system.

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Save the bot token that BotFather gives you

## Step 2: Get Your Chat ID

### Method 1: Using @userinfobot

1. Search for `@userinfobot` on Telegram
2. Send any message to it
3. It will reply with your chat ID

### Method 2: Using your bot

1. Send a message to your bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for the "chat" object and find the "id" field

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Admin Authentication Configuration
TELEGRAM_ADMIN_CHAT_ID=your_admin_chat_id_here
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

### Example:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
TELEGRAM_ADMIN_CHAT_ID=123456789
JWT_SECRET=my-super-secret-jwt-key-for-admin-auth-12345
```

### Important Notes:

- **TELEGRAM_CHAT_ID**: Used for contact form messages
- **TELEGRAM_ADMIN_CHAT_ID**: Used for admin OTP authentication (can be the same as TELEGRAM_CHAT_ID)
- **JWT_SECRET**: Must be a long, random string for security. Change this in production!

## Step 4: Test the Integration

### Contact Form Testing:

1. Start your development server
2. Fill out the contact form on your website
3. Submit the form
4. Check your Telegram chat for the message

### Admin Authentication Testing:

1. Navigate to `/admin` in your browser
2. Click "Send OTP Code" button
3. Check your configured admin Telegram chat for the OTP code
4. Enter the 6-digit code in the login form
5. You should be authenticated and see the admin panel

## Troubleshooting

### General Issues:

- **Bot not responding**: Make sure you've started a conversation with your bot
- **Chat ID not found**: Try sending a message to your bot first, then check the getUpdates URL
- **Environment variables not loading**: Restart your development server after adding the .env.local file

### Admin Authentication Issues:

- **"Failed to send OTP"**: Check your TELEGRAM_ADMIN_CHAT_ID and TELEGRAM_BOT_TOKEN
- **OTP not received**: Make sure the bot has permission to send messages to your admin chat
- **"Invalid or expired OTP"**: OTP codes expire in 5 minutes and can only be used once
- **JWT errors**: Ensure JWT_SECRET is set and is a long, secure string
- **Authentication not persisting**: Check browser cookies and ensure the JWT_SECRET hasn't changed

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your bot token secure
- Consider using environment variables in production
