# Quickstart Guide: Tax Consulting Firm Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Access to Supabase account for database (for contact form submissions)

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Service (for contact form notifications)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=contact@yourtaxfirm.com
```

### 3. Database Setup

1. Create a Supabase project
2. Create the following tables:

**contact_submissions table:**
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new'
);
```

**services table:**
```sql
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(100),
  order_num INTEGER DEFAULT 0
);
```

**testimonials table:**
```sql
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  date TIMESTAMP DEFAULT NOW(),
  featured BOOLEAN DEFAULT false
);
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Key Features Setup

### Navigation
- The navbar is sticky and responsive with a hamburger menu for mobile
- Navigation items: Home, About, Services, Happy Clients, Contact

### Pages Structure
- **Home**: Hero section with CTA, featured services, testimonials
- **About**: Information about the firm and team members
- **Services**: Cards with hover animations showcasing tax services
- **Happy Clients**: Testimonials and client logos
- **Contact**: Form with validation using React Hook Form + Zod

### Animations
- Fade-in animations for page content
- Scale animations on hover for cards and buttons
- Slide-up animations for sections as they enter viewport

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Adapts to desktop, tablet, and mobile layouts
- Properly sized touch targets for mobile
- Responsive typography

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add the environment variables in Vercel dashboard
3. Build command: `npm run build`
4. Output directory: `.` (root)

### Environment Variables for Production
Same as development but with production values for:
- Database URLs
- API keys
- Contact email addresses