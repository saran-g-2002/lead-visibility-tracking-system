# Lead Visibility & Tracking System
## Final Year MCA Project

### 1. Project Overview
This is a full-stack web application designed for IT Training Institutes to track student enquiries.
Failed to be "simple" and "exam-safe" while maintaining a professional UI.

**Tech Stack:**
- **Frontend:** React.js (Create React App), Vanilla CSS
- **Backend:** Node.js, Express.js
- **Database:** In-memory JSON (Dummy Data)

### 2. Features
- **Role-Based Access:**
  - **Admin (Owner):** View Dashboard stats (Total Leads, New, Follow-up, Converted, Dead).
  - **User (Staff):** View Lead List, Search, Filter, Update Lead Status.
- **Lead Tracking:**
  - Status workflow: New → Follow-up → Converted → Dead.
  - Detailed lead information (Contact, Interest, History).
- **UI/UX:**
  - Professional Purple-Blue corporate theme.
  - Responsive design.
  - No complex charts or external UI libraries.

### 3. Setup Instructions

#### Prerequisites
- Node.js installed on your system.

#### Installation
1. Open a terminal in the project root folder `d:\project`.
2. Install dependencies for both server and client:
   ```bash
   npm install
   cd client
   npm install
   cd ../server
   npm install
   cd ..
   ```

### 4. Running the Application
To run both backend and frontend concurrently:

1. In the project root `d:\project`, run:
   ```bash
   npm run dev
   ```
2. The application will open in your browser at `http://localhost:3000`.
   - Backend runs on `http://localhost:5000`.

### 5. Login Credentials (Demo)
Since there is no real authentication database, use the following roles:

- **Admin Role:**
  - Select **Admin (Owner)** from the dropdown.
  - Email: `admin@demo` (or any email)
  - Password: `admin123` (or any password)

- **User Role:**
  - Select **User (Staff)** from the dropdown.
  - Email: `user@demo` (or any email)
  - Password: `user123` (or any password)

### 6. File Structure
```
project/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Header, etc.
│   │   ├── pages/          # Dashboard, LeadList, LeadDetail, Login
│   │   ├── App.js          # Routing
│   │   ├── App.css         # Main Styling
│   │   └── index.js
│   └── package.json
├── server/                 # Node/Express Backend
│   ├── index.js            # Server entry point & API routes
│   ├── dummyData.js        # In-memory data store
│   └── package.json
└── package.json            # Root, scripts to run both
```

### 7. Exam/Viva Notes
- **Data Persistence:** Data is stored in `server/dummyData.js` variable in memory. Refreshing the server resets data.
- **Authentication:** Purely frontend simulation using `localStorage`.
- **Scalability:** Code is structured to easily swap the in-memory array with a MongoDB database if needed in future.
