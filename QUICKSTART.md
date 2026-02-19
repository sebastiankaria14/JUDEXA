# Judexa - Quick Start Guide

## Running Development Environment

### Option 1: Using npm run dev (Recommended - Fastest)

This runs both frontend and backend simultaneously with optimized settings for low latency.

```bash
# From the project root
npm run dev
```

This will:
- Start the backend on `http://localhost:8888` with hot reload
- Start the frontend on `http://localhost:4000` with Turbopack (Next.js's fastest bundler)
- Show both outputs in a single terminal with color-coded streams

### Option 2: Manual Setup (if needed)

**Backend:**
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate  # On Windows
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8888 --reload
```

**Frontend (in a new terminal):**
```bash
cd frontend
npm install
npm run dev
```

## Environment Setup

### Backend (.env file in `backend/` directory)

```env
# Supabase (Required)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
SUPABASE_JWT_SECRET=your-jwt-secret

# R2 Storage (Optional)
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_BUCKET_NAME=judexa-uploads
R2_PUBLIC_URL=https://your-r2-url.com

# App Settings
APP_ENV=development
FRONTEND_URL=http://localhost:4000
CORS_ORIGINS=http://localhost:4000,http://localhost:3000
PORT=8888

# Archestra AI (Optional)
ARCHESTRA_API_KEY=
ARCHESTRA_BASE_URL=
ARCHESTRA_INGEST_PROMPT_ID=
ARCHESTRA_ASSIGN_PROMPT_ID=
ARCHESTRA_PROGRESS_PROMPT_ID=
ARCHESTRA_AGGREGATE_PROMPT_ID=
ARCHESTRA_FEEDBACK_PROMPT_ID=
```

### Frontend (.env.local file in `frontend/` directory)

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_API_URL=http://localhost:8888/api/v1
```

## Performance Optimizations Included

✅ **Turbopack** - Next.js 16's fastest bundler (up to 700x faster HMR)
✅ **GZip Compression** - Backend responses are compressed
✅ **Package Import Optimization** - Chakra UI and Framer Motion optimized
✅ **Concurrent Execution** - Both services start simultaneously
✅ **Hot Module Replacement** - Instant updates without full reloads
✅ **SWC Minification** - Fastest JavaScript minification

## Accessing the Application

- **Frontend**: http://localhost:4000
- **Backend API**: http://localhost:8888
- **API Documentation**: http://localhost:8888/docs (Swagger UI)
- **Health Check**: http://localhost:8888/health

## Troubleshooting

### Port Already in Use
```bash
# Windows - Kill process on port 4000 or 8888
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

### Python Environment Issues
Make sure you're using Python 3.12+:
```bash
python --version
```

### Node.js Issues
Make sure you're using Node.js 20+:
```bash
node --version
```

## Database Setup

1. Create a Supabase project at https://supabase.com
2. Run migrations from `db/migrations/` in the Supabase SQL Editor
3. Seed demo data: `python backend/seed.py --clean`

## Need Help?

Check the detailed guides in the `docs/` folder:
- `SETUP_GUIDE.md` - Complete setup instructions
- `HOW_IT_WORKS.md` - Platform workflow explanation
- `PRODUCTION_DEPLOYMENT.md` - Production deployment guide
