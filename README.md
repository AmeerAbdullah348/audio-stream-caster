# YouTube to WAV Converter

A professional online tool for converting YouTube videos to high-quality WAV audio files. Built with React, TypeScript, and Node.js.

## ⚠️ Important Legal Notice

This tool is provided for educational and personal use only. Users are responsible for:

- Complying with applicable laws and YouTube's Terms of Service
- Only downloading content they have the right to download
- Respecting copyright and intellectual property rights

## 🚀 Quick Setup

### Option 1: Automated Setup (Recommended)

**Windows:**

```cmd
setup.bat
```

**Linux/macOS:**

```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

1. **Install Dependencies:**

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

2. **Start the Application:**

**Terminal 1 - Backend Server:**

```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

3. **Access the Application:**

- Frontend: http://localhost:5173
- Backend API: http://localhost:3002

## 🛠️ Development

### Project Structure

```
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom hooks
│   └── lib/               # Utilities
├── server/                # Backend Node.js server
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── README.md          # Backend documentation
└── public/                # Static assets
```

### Technologies Used

**Frontend:**

- React 18
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- Vite

**Backend:**

- Node.js
- Express
- ytdl-core (YouTube downloader)
- FFmpeg (audio conversion)

## 📋 Features

- ✅ YouTube URL validation and video info extraction
- ✅ High-quality WAV audio conversion
- ✅ Real-time conversion progress
- ✅ Responsive design for all devices
- ✅ Professional UI with modern components
- ✅ Fast and reliable audio processing

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=3002
NODE_ENV=development
```

### Frontend Configuration

The frontend is configured to connect to the backend at `http://localhost:3002`. If you change the backend port, update the API URLs in:

- `src/components/converter/ConverterCard.tsx`

## 📦 Building for Production

### Frontend

```bash
npm run build
```

### Backend

```bash
cd server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes only. Please respect YouTube's Terms of Service and applicable copyright laws.

---

## Project info

**URL**: https://lovable.dev/projects/48768c29-75e2-4751-8ed3-d5c0e5f3cfce

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/48768c29-75e2-4751-8ed3-d5c0e5f3cfce) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/48768c29-75e2-4751-8ed3-d5c0e5f3cfce) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
