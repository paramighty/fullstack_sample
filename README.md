# Fullstack Task

**Disclaimer:** This project is a **fictitious product** created for learning/demo purposes.  
It does **not represent a real company or service** and any data used is mock or placeholder data.


## Overview
This is a full-stack application built with **Next.js** for the frontend and **Node.js** with **Express** for the backend. The project is designed to provide information about countries, leveraging dynamic routing and API integrations.

## Project Structure
```
fullstack_sample/
  frontend/   # Next.js application (frontend)
  backend/    # Node.js application (backend)
```

### Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Features**:
  - Dynamic routing for country-specific pages.
  - Context API for state management.
  - Custom hooks for data fetching.

### Backend
- **Framework**: Node.js with Express
- **Database**: Supabase
- **Features**:
  - RESTful API endpoints for country data.
  - Integration with Supabase for database operations.

## Deployment
### Frontend
- Deployed on **Vercel**.
- Build Command: `next build`
- Output Directory: `.next`

### Backend
- Deployed on **Railway**.
- Start Command: `node server.js`

## Environment Variables
Ensure the following environment variables are set:

### Frontend
- `NEXT_PUBLIC_API_URL`: The URL of the backend API.

### Backend
- `SUPABASE_URL`: The URL of the Supabase instance.
- `SUPABASE_KEY`: The API key for Supabase.

## Getting Started
### Prerequisites
- Node.js installed
- npm or yarn installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/fullstack_sample.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fullstack_sample
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd ../frontend
   npm install
   cd ../backend
   npm install
   ```

### Running Locally
1. Start the backend:
   ```bash
   cd backend
   node server.js
   ```
2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000`.

## License
This project is licensed under the MIT License.
