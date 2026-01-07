<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.0.1 (added responsive design requirement details)
- Modified sections: Additional Constraints (enhanced responsive design requirement)
- Templates requiring updates: ⚠ pending (no templates to update yet)
- Follow-up TODOs: None
-->
# Tax Firm Website Constitution

## Core Principles

### I. Technology Stack Standards
Use Next.js 14+ (App Router) with TypeScript for all frontend development. This ensures type safety, modern React features, and optimal performance through server-side rendering and static generation capabilities.

### II. Styling and Animation
Use Tailwind CSS exclusively for styling (no inline CSS) and Framer Motion for animations. This creates a consistent, maintainable styling approach while enabling smooth, professional animations that enhance user experience.

### III. Code Quality and Reusability (NON-NEGOTIABLE)
Write clean, reusable, production-ready code with modular and reusable components. Every component must be designed for reuse across the application to maintain consistency and reduce maintenance overhead.

### IV. Professional UI/UX Design
Use professional, corporate UI suitable for a tax consulting firm that prioritizes accessibility, performance, and SEO. The design must convey trustworthiness and professionalism appropriate for financial services.

### V. Form Handling and Validation
All forms must use React Hook Form combined with Zod for validation. This ensures type-safe, efficient form handling with proper validation that meets security and data integrity requirements.

### VI. Navigation and Layout Standards
The navbar must be sticky, responsive, with hover animations. The footer must contain contact info and links. No placeholder images should be hardcoded; use styled image containers instead to maintain professional appearance.

## Additional Constraints

Technology Requirements:
- Next.js 14+ with App Router architecture
- TypeScript for all components and pages
- Tailwind CSS for styling (no inline styles)
- Framer Motion for animations
- React Hook Form + Zod for form validation
- All components and pages must be fully responsive for desktop, tablet, and mobile. Use Tailwind CSS responsive utilities (sm, md, lg, xl) wherever appropriate. Animations should work seamlessly on all screen sizes.
- Accessibility compliance (WCAG standards)
- SEO optimization (meta tags, structured data)

Performance Standards:
- Page load times under 3 seconds
- Core Web Vitals optimization
- Image optimization with proper loading strategies
- Bundle size optimization

## Development Workflow

Code Standards:
- All code must follow TypeScript best practices
- Components must be modular and reusable
- Proper error handling and loading states
- Consistent naming conventions
- Comprehensive documentation for complex components

Review Process:
- All PRs must verify compliance with constitution
- Code review must check for accessibility, performance, and security
- UI changes must match design specifications
- New components must be reusable and well-documented

Quality Gates:
- All tests must pass before merging
- Code coverage must meet minimum thresholds
- Performance budgets must not be exceeded
- Accessibility audits must pass

## Governance

This constitution supersedes all other development practices. All development must comply with these principles. Any deviation requires explicit approval and documentation of the exception. Amendments to this constitution require formal approval process and must be documented with clear rationale.

All PRs and code reviews must verify compliance with these principles. Complexity must be justified with clear business value. New features must follow the established patterns and principles outlined in this document.

**Version**: 1.0.1 | **Ratified**: 2026-01-06 | **Last Amended**: 2026-01-06
