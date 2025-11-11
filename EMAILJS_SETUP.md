# EmailJS Setup Guide

Your contact form is now configured to use EmailJS, a free service that sends emails directly from your website without needing a backend server.

## Step-by-Step Setup Instructions

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month free)

### 2. Add an Email Service
- In your EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your provider
- **Note your Service ID** (you'll need this later)

### 3. Create an Email Template
- Go to **Email Templates** in your dashboard
- Click **Create New Template**
- Use the following template variables:
  ```
  From: {{from_name}} <{{from_email}}>
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  Reply to: {{from_email}}
  ```
- **Note your Template ID** (you'll need this later)

### 4. Get Your Public Key
- Go to **Account** → **General** in your EmailJS dashboard
- Find your **Public Key**
- **Note your Public Key** (you'll need this later)

### 5. Configure Your Website
- Open `assets/js/contact-form.js`
- Replace the following values with your actual EmailJS credentials:
  ```javascript
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
  ```

### 6. Test Your Form
- Open your website
- Fill out and submit the contact form
- Check your email inbox for the message!

## Troubleshooting

- **Form not sending?** Make sure you've replaced all three values in `contact-form.js`
- **Getting errors?** Check the browser console (F12) for error messages
- **Emails not arriving?** Check your spam folder and verify your EmailJS service is properly configured

## Alternative: Quick Setup with Formspree

If you prefer an even simpler solution, you can use Formspree instead:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a form
3. Replace the form action in `index.html` with your Formspree endpoint

