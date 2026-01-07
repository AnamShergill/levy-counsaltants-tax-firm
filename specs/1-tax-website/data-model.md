# Data Model: Tax Consulting Firm Website

## Entity: ContactFormSubmission

**Description**: Represents a submission from the contact form on the website

**Fields**:
- id: string (UUID) - Unique identifier for the submission
- name: string - Name of the person submitting the form (required, min 2 characters)
- email: string - Email address of the person (required, valid email format)
- phone: string (optional) - Phone number of the person (valid phone format)
- message: string - Message content (required, min 10 characters, max 1000 characters)
- createdAt: Date - Timestamp when the submission was created
- status: string - Status of the submission ('new', 'in-progress', 'responded', 'closed')

**Validation Rules**:
- All required fields must be present
- Email must match standard email format
- Name must be at least 2 characters
- Message must be between 10 and 1000 characters
- Phone number must match standard phone format if provided

## Entity: Service

**Description**: Represents a tax service offered by the firm

**Fields**:
- id: string (UUID) - Unique identifier for the service
- title: string - Title of the service (required)
- description: string - Detailed description of the service (required)
- icon: string (optional) - Icon identifier or path for the service
- order: number - Display order for the service on the page

## Entity: Testimonial

**Description**: Represents a client testimonial or review

**Fields**:
- id: string (UUID) - Unique identifier for the testimonial
- clientName: string - Name of the client who provided the testimonial (required)
- company: string (optional) - Company name of the client
- content: string - The testimonial content (required, max 500 characters)
- rating: number (optional) - Rating from 1-5 (if applicable)
- date: Date (optional) - Date of the testimonial
- featured: boolean - Whether this testimonial should be featured prominently

## Entity: TeamMember

**Description**: Represents a team member of the tax consulting firm

**Fields**:
- id: string (UUID) - Unique identifier for the team member
- name: string - Name of the team member (required)
- title: string - Professional title (required)
- bio: string (optional) - Brief biography
- image: string (optional) - Path to team member image
- order: number - Display order for the team member on the page

## Entity: ClientLogo

**Description**: Represents a client logo for the happy clients section

**Fields**:
- id: string (UUID) - Unique identifier for the client logo
- name: string - Name of the client company (required)
- logo: string - Path to the client logo image (required)
- url: string (optional) - URL to the client's website
- order: number - Display order for the client logo