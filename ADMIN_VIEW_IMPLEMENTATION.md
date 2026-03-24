# Admin View Implementation Pattern

## Overview
This document outlines the implementation of the "Admin View" pattern used in the Lead Management system. This pattern allows for a seamless transition from a high-level Dashboard to a detailed, simplified List view.

## Core Concept
The system uses **URL Query Parameters** to drive the UI state. When an admin clicks a metric on the dashboard, they are navigated to the list view with a specific filter applied (e.g., `?status=new`). The presence of this filter triggers a "Focused View" mode.

## Features

### 1. Dashboard Navigation
**File:** `src/pages/Dashboard.js`

Clicking a metric card navigates to the list page with a `status` query parameter.

```javascript
// Example: Navigation to New Inquiries
<div className="stat-card new" onClick={() => navigate('/leads?status=new')} style={{ cursor: 'pointer' }}>
  ...
</div>
```

### 2. State Detection
**File:** `src/pages/LeadList.js`

The list component detects the "Admin View" mode by checking for the `selectedStatus` (derived from the URL).

```javascript
// URL param detection
const [selectedStatus, setSelectedStatus] = useState(null);
const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const statusParam = params.get('status');
  if (statusParam) {
    setSelectedStatus(statusParam); // Triggers "Admin View"
  } else {
    setSelectedStatus(null); // Triggers "Standard View"
  }
}, [location.search]);

// Boolean flag for rendering logic
const isFilteredView = !!selectedStatus;
```

### 3. Simplified Table Columns
The table columns are conditionally rendered. In "Admin View" (`isFilteredView` is true), we hide operational columns (Status, Priority, Course) to focus on contact details.

**Columns Shown in Admin View:**
- **Student** (Name & Avatar)
- **Contact** (Phone)
- **Source**
- **Date**
- **View Button**

**Columns Hidden in Admin View:**
- Status
- Priority
- Course

```javascript
{/* Functionality: Hide headers */}
{!isFilteredView && <th style={{ padding: '0 1rem' }}>Status</th>}
{!isFilteredView && <th style={{ padding: '0 1rem' }}>Priority</th>}

{/* Functionality: Hide cells */}
{!isFilteredView && (
  <td style={{ padding: '1rem' }}>
    <span className="badge...">{lead.status}</span>
  </td>
)}
```

### 4. Back Button
A "Back to Dashboard" button appears only when in "Admin View" to allow easy return navigation.

```javascript
{isFilteredView && (
  <button onClick={() => { setSelectedStatus(null); navigate('/'); }}>
    ← Back to Dashboard
  </button>
)}
```

## Summary
This pattern ensures that the Admin sees exactly what they need—**who the leads are** (Name, Contact, Source)—without clutter when investigating specific dashboard metrics.
