# Global Reviews Press (GRP) — MERN Stack Application

A full-stack conversion of the GRP React frontend into a complete MERN
application: a Node.js/Express/MongoDB backend, a secured admin panel,
and the original public frontend — preserved pixel-for-pixel — now wired
to live data.

---

## 1. Project Overview

- **Public site**: Journals listing (filterable by category, backed by
  MongoDB), Submit Manuscript form (real submissions with file uploads),
  Contact form (real enquiries).
- **Admin panel**: secure login, dashboard statistics, full journal
  management (add/edit/delete + cover image upload), manuscript review
  (status updates, protected file downloads), and enquiry management.
- **Design**: the existing frontend UI, Tailwind classes, Framer Motion
  animations, routes, and components are unchanged — only the minimum
  code needed to connect to the backend and add the admin panel was
  added.

---

## 2. Technology Stack

**Frontend**
- React 19, Vite, Tailwind CSS, React Router DOM, Framer Motion, Lucide
  React, Axios

**Backend**
- Node.js, Express.js, MongoDB, Mongoose
- JWT authentication, bcryptjs password hashing
- Multer file uploads, Helmet, CORS, express-rate-limit,
  express-mongo-sanitize

---

## 3. Folder Structure

```text
GRP/
├── frontend/                 # React + Vite + Tailwind app (unchanged UI)
│   ├── src/
│   │   ├── pages/            # Public pages (Journals, SubmitManuscript, Contact, ...)
│   │   ├── pages/admin/       # Admin panel pages
│   │   ├── components/admin/  # Admin layout, tables, modals
│   │   ├── context/AuthContext.jsx
│   │   └── services/          # Axios API service layer
│   ├── public/
│   ├── package.json
│   ├── .env.example
│   └── vite.config.js
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   │   ├── journals/          # Public — served as static images
│   │   ├── manuscripts/       # Private — only via protected download routes
│   │   └── cover-letters/     # Private — only via protected download routes
│   ├── scripts/
│   │   ├── seedAdmin.js
│   │   └── seedJournals.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── package.json               # Root orchestration scripts
└── README.md
```

---

## 4. Installation

From the project root (`GRP/`):

```bash
npm run install:all
```

This installs both `backend` and `frontend` dependencies. (Equivalent to
running `npm install` in each folder separately.)

---

## 5. MongoDB Atlas Setup

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user (username + password).
3. Under **Network Access**, allow your IP (or `0.0.0.0/0` for
   development/testing).
4. Click **Connect → Drivers**, copy the connection string. It looks
   like:
   ```
   mongodb+srv://<username>:<password>@<cluster>.mongodb.net/grp?retryWrites=true&w=majority
   ```
5. Paste this into `backend/.env` as `MONGODB_URI` (replace
   `<username>`, `<password>`, and add a database name such as `grp`).

---

## 6. Backend `.env` Setup

Copy `backend/.env.example` to `backend/.env` and fill in the values:

```env
PORT=5000
NODE_ENV=development

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/grp?retryWrites=true&w=majority

JWT_SECRET=replace_this_with_a_long_random_string
JWT_EXPIRES_IN=1d

ADMIN_NAME=Admin User
ADMIN_EMAIL=admin@globalreviewspress.com
ADMIN_PASSWORD=ChangeThisPassword123!

FRONTEND_URL=http://localhost:5173

MAX_IMAGE_SIZE=5242880
MAX_DOCUMENT_SIZE=10485760
```

> Generate a strong `JWT_SECRET`, e.g. `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`.

---

## 7. Frontend `.env` Setup

Copy `frontend/.env.example` to `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
```

Point this at your deployed backend URL in production.

---

## 8. Admin Seed Command

Creates (or updates) the single admin account from your `backend/.env`
credentials:

```bash
npm run seed:admin
```

Seed the original 15 hardcoded journals (with their category
assignments and cover images) into MongoDB — run this once, on a fresh
database:

```bash
npm run seed:journals
```

Both commands can be run from the project root (they proxy into
`backend/`) or directly inside `backend/` with `npm run seed:admin` /
`npm run seed:journals`.

---

## 9. Development Commands

From the project root:

```bash
npm run dev          # runs backend + frontend together (concurrently)
npm run backend       # backend only, http://localhost:5000
npm run frontend      # frontend only, http://localhost:5173
```

---

## 10. Production Build Commands

```bash
npm run build          # builds the frontend (outputs to frontend/dist)
npm run start:backend  # starts the backend with `node server.js`
```

---

## 11. API Endpoint List

**Public**
```
GET    /api/journals                 List active journals (optional ?category=)
GET    /api/journals/:id             Single journal
POST   /api/manuscripts              Submit a manuscript (multipart/form-data)
POST   /api/enquiries                Submit a contact enquiry
GET    /api/health                   Health check
```

**Admin** (require `Authorization: Bearer <token>`)
```
POST   /api/admin/auth/login
GET    /api/admin/auth/me

GET    /api/admin/journals
POST   /api/admin/journals
GET    /api/admin/journals/:id
PUT    /api/admin/journals/:id
DELETE /api/admin/journals/:id

GET    /api/admin/manuscripts
GET    /api/admin/manuscripts/:id
PATCH  /api/admin/manuscripts/:id/status
DELETE /api/admin/manuscripts/:id
GET    /api/admin/manuscripts/:id/manuscript/download
GET    /api/admin/manuscripts/:id/cover-letter/download

GET    /api/admin/enquiries
GET    /api/admin/enquiries/:id
PATCH  /api/admin/enquiries/:id/status
DELETE /api/admin/enquiries/:id

GET    /api/admin/dashboard/stats
```

---

## 12. File Upload Rules

| Type            | Allowed formats     | Max size |
|------------------|---------------------|----------|
| Journal cover     | JPG, PNG, WEBP, GIF  | 5 MB     |
| Manuscript file   | PDF, DOC, DOCX       | 10 MB    |
| Cover letter       | PDF, DOC, DOCX       | 10 MB    |

- Manuscript and cover-letter files are **never** publicly reachable —
  they are stored outside any static-served folder and can only be
  downloaded through the protected admin endpoints.
- Journal cover images are served statically from
  `/uploads/journals/...`.
- Uploaded filenames are re-generated (random + timestamp) to prevent
  collisions and path traversal.

---

## 13. Admin Login Instructions

1. Run `npm run seed:admin` (see section 8) to create the admin
   account from your `.env` credentials.
2. Visit `http://localhost:5173/admin/login` (or your deployed
   frontend URL + `/admin/login`).
3. Sign in with `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `backend/.env`.
4. You'll land on `/admin/dashboard`. Unauthenticated visits to any
   `/admin/*` route (other than `/admin/login`) redirect back to login.

---

## 14. Deployment Instructions

### Frontend (Vercel)

1. Import the `frontend/` folder as a Vercel project (set the project
   root to `frontend`).
2. Framework preset: Vite.
3. Build command: `npm run build`. Output directory: `dist`.
4. Add the environment variable `VITE_API_URL` pointing to your
   deployed backend (e.g. `https://grp-backend.onrender.com`).
5. `vercel.json` already includes a SPA rewrite so refreshing any
   client-side route doesn't 404.

### Backend (Render / Railway)

Render (or any Node-compatible host) example:

1. Create a new **Web Service**, root directory `backend`.
2. Build command: `npm install`. Start command: `npm start`.
3. Add all variables from `backend/.env.example` under environment
   variables (use your real MongoDB Atlas URI, a strong `JWT_SECRET`,
   and set `FRONTEND_URL` to your deployed Vercel URL).
4. Make sure the service has persistent disk if you want uploaded
   files to survive restarts/redeploys — otherwise consider moving
   uploads to a storage bucket for production use.
5. After the first deploy, run the seed scripts once (via a one-off
   shell/job on the platform, or temporarily via a local `.env`
   pointed at the same `MONGODB_URI`):
   ```bash
   npm run seed:admin
   npm run seed:journals
   ```

Do **not** deploy the backend as a static site — it is a persistent
Express server, not static assets, and needs an always-on Node
runtime.

---

## 15. Troubleshooting

- **CORS errors in the browser console** — confirm `FRONTEND_URL` in
  `backend/.env` exactly matches your frontend's origin (protocol +
  host, no trailing slash).
- **401 Unauthorized on admin pages** — your session token expired or
  was cleared; log in again at `/admin/login`.
- **Images not loading on the public Journals page** — make sure the
  backend is running and reachable at `VITE_API_URL`, and that
  `npm run seed:journals` was run so cover images exist under
  `backend/uploads/journals/`.
- **"Selected journal is invalid or unavailable" on manuscript submit**
  — the chosen journal was deleted or deactivated after the dropdown
  loaded; refresh the Submit Manuscript page.
- **Mongo connection errors on boot** — double-check `MONGODB_URI`,
  that your IP is allow-listed in Atlas Network Access, and that the
  database user's password doesn't contain characters that need URL
  encoding (`@`, `:`, `/`, etc.).
- **File upload rejected** — verify the file type/size against the
  rules in section 12.
