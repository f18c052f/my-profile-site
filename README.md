# Profile Site

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the environment variables in `.env` with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_AUTH_EMAIL=your_auth_email
```

## Security Notes

- Never commit `.env` file to version control
- Use environment-specific variables for different environments (development, staging, production)
- In production, use secure secrets management provided by your hosting platform
- Firebase Authentication emulator is used in development environment
- Analytics collection is disabled in development environment