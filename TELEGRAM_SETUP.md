# Telegram Bot Setup for Contact Form

This guide will help you set up the Telegram bot integration for the contact form.

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
```

### Example:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## Step 4: Test the Integration

1. Start your development server
2. Fill out the contact form on your website
3. Submit the form
4. Check your Telegram chat for the message

## Troubleshooting

- **Bot not responding**: Make sure you've started a conversation with your bot
- **Chat ID not found**: Try sending a message to your bot first, then check the getUpdates URL
- **Environment variables not loading**: Restart your development server after adding the .env.local file

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your bot token secure
- Consider using environment variables in production
