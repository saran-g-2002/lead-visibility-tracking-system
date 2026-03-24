# Lead Tracker - IT Institute Lead Management System

A clean, simple web app for IT institute owners to track leads from enquiry to admission using status updates.

## Features

- **Owner Dashboard**: Clear visibility of lead statistics (New, Follow-up, Converted, Dead)
- **Lead List**: View all leads with filtering by status
- **Lead Detail & Update**: Update lead status, follow-up dates, and notes
- **Minimal Design**: Fast, responsive UI with dummy data pre-loaded
- **No Complexity**: Focus on lead visibility, not automation or integrations

## Tech Stack

- **Frontend**: React 18, React Router, Axios
- **Backend**: Node.js, Express, CORS
- **Data**: In-memory (dummy data)

## Project Structure

```
lead-tracker/
├── server/
│   └── index.js              # Express server with API endpoints
├── client/
│   ├── public/
│   │   └── index.html        # HTML entry point
│   └── src/
│       ├── components/
│       │   └── Header.js     # Navigation header
│       ├── pages/
│       │   ├── Dashboard.js  # Owner dashboard (stats & summary)
│       │   ├── LeadList.js   # Lead listing with filters
│       │   └── LeadDetail.js # Lead detail & status update
│       ├── App.js            # Main app component with routing
│       ├── App.css           # Global styles
│       └── index.js          # React DOM render
└── package.json              # Root dependencies & scripts
```

## Installation & Setup

### Prerequisites
- Node.js 16+ installed

### 1. Install Root Dependencies
```bash
npm install
```

### 2. Install Client Dependencies
```bash
cd client
npm install
cd ..
```

### 3. Run Development Server
```bash
npm run dev
```

This starts both the backend (port 5000) and frontend (port 3000) concurrently.

- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

## API Endpoints

### Dashboard Stats
```
GET /api/dashboard
```
Returns: `{ total, new, followUp, converted, dead }`

### Lead List
```
GET /api/leads
GET /api/leads?status=new        # Filter by status
```

### Lead Detail
```
GET /api/leads/:id
```

### Update Lead
```
PUT /api/leads/:id
Body: { status?, notes?, followUpDate? }
```

### Create Lead
```
POST /api/leads
Body: { name, email, phone, course }
```

## Dummy Data

The system comes pre-loaded with 8 sample leads in various statuses:
- 2 New leads
- 2 In Follow-up
- 2 Converted
- 1 Dead

All data is stored in-memory and resets on server restart.

## Views & Workflows

### 1. Owner Dashboard (`/`)
- See total lead count
- View breakdown by status (New, Follow-up, Converted, Dead)
- See conversion percentages in summary table

### 2. Lead List (`/leads`)
- View all leads in a table
- Filter by status (New, Follow-up, Converted, Dead)
- Click "View" to open lead detail page
- Shows enquiry date and follow-up date

### 3. Lead Detail (`/leads/:id`)
- View complete lead information (name, email, phone, course)
- Update lead status (dropdown)
- Set/update follow-up date
- Add/edit notes about the lead
- Save changes instantly with success confirmation

## Data Fields

Each lead contains:
- **id**: Unique identifier
- **name**: Lead name
- **email**: Email address
- **phone**: Phone number
- **course**: Course interested in
- **status**: new | follow-up | converted | dead
- **enquiryDate**: When lead was added
- **followUpDate**: Scheduled follow-up date
- **notes**: Internal notes about the lead

## Styling

- Clean, gradient-based design with purple/blue theme
- Responsive grid layout for all screen sizes
- Status badges with color coding
- Smooth hover effects and transitions
- Mobile-friendly interface

## Future Enhancements (Optional)

If needed later:
- Database integration (MongoDB)
- User authentication
- Lead creation form
- Bulk status updates
- Export/reports
- Email notifications
- Call logs/activity history

## Notes

- All data is ephemeral (in-memory)
- No authentication required
- No external API integrations
- Backend remains modular for future database integration

---

Built for simplicity and clarity. Start using immediately with dummy data!
