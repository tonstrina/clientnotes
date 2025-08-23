# Client Notes App

A modern, secure client notes application built with React, TypeScript, and Tailwind CSS. Features offline functionality with optional Supabase cloud sync.

## 🚀 Deploy to Vercel

This project is optimized for Vercel deployment. Follow these steps:

### 1. Upload Files to GitHub

Create a new repository and upload all these files:

```
project-root/
├── package.json
├── vercel.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── README.md
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   └── index.css
└── public/
    └── index.html
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. **Framework**: React
6. **Build Command**: `npm run build`
7. **Output Directory**: `build`
8. Click "Deploy"

### 3. Environment Variables (Optional)

For Supabase integration, add these environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add:
   - `REACT_APP_SUPABASE_URL`: Your Supabase project URL
   - `REACT_APP_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## 🎯 Features

- **Client Management**: Add and organize clients
- **Note Taking**: Rich note-taking interface with timestamps
- **Search**: Find clients and notes quickly
- **Export**: Download notes as text files
- **Offline Support**: Works without internet connection
- **Cloud Sync**: Optional Supabase integration for multi-device sync
- **Modern UI**: Beautiful design with animations and glassmorphism
- **Responsive**: Works on desktop, tablet, and mobile

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🔧 Configuration

The app works in two modes:

### Local Mode (Default)
- Data stored in browser localStorage
- No external dependencies
- Perfect for personal use

### Cloud Mode (Optional)
- Requires Supabase setup
- Real-time sync across devices
- Collaborative features

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎨 Design Features

- Gradient backgrounds with animated blobs
- Glassmorphism effects
- Custom scrollbars
- Smooth animations
- Dark theme optimized

## 📦 Dependencies

- React 18+ with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Supabase for cloud sync (optional)

## 🔒 Privacy

- Local mode: Data never leaves your device
- Cloud mode: End-to-end encrypted with Supabase
- No tracking or analytics

## 🚨 Troubleshooting

### CSS Not Loading
- Check that all files are uploaded correctly
- Verify `src/index.css` exists and contains Tailwind imports
- Clear browser cache and redeploy

### Build Errors
- Ensure all dependencies are in `package.json`
- Check file paths are correct
- Verify TypeScript configuration

### Deployment Issues
- Check Vercel build logs
- Ensure `vercel.json` is in project root
- Verify environment variables if using Supabase

## 📄 License

MIT License - feel free to modify and use for your projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Made with ❤️ for efficient client management**
