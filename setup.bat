@echo off
echo 🎵 YouTube to WAV Converter Setup
echo =================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js is installed

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
npm install

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd server
npm install
cd ..

echo ✅ Setup complete!
echo.
echo 🚀 To start the application:
echo 1. Start the backend server:
echo    cd server ^&^& npm run dev
echo.
echo 2. In a new terminal, start the frontend:
echo    npm run dev
echo.
echo 📝 The frontend will be available at: http://localhost:5173
echo 📝 The backend will be available at: http://localhost:3001
pause
