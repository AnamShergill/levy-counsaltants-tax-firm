---
id: 1
title: Update constitution
stage: constitution
date: 2026-01-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: claude
command: sp.constitution
labels: [constitution,setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - []
---

## Prompt

```text
You are a senior full-stack software engineer and UI/UX designer.
Follow these rules for the entire project:

- Use Next.js 14+ (App Router) with TypeScript
- Use Tailwind CSS only (no inline CSS)
- Use Framer Motion for animations
- Write clean, reusable, production-ready code
- Use professional, corporate UI suitable for a tax consulting firm
- Prioritize accessibility, performance, and SEO
- No placeholder images hardcoded; use styled image containers instead
- Forms must use React Hook Form + Zod for validation
- Navbar must be sticky, responsive, with hover animations
- Footer must contain contact info and links
- Components must be modular and reusable
- Respond in structured, step-by-step outputs
```

## Response snapshot

Updated the project constitution file (.specify/memory/constitution.md) to include specific principles and requirements for the tax firm website project. The constitution now includes:

- Six core principles covering technology stack, styling, code quality, UI/UX design, form handling, and navigation standards
- Additional constraints section with technology and performance requirements
- Development workflow section with code standards, review process, and quality gates
- Governance section outlining how the constitution should be followed and amended
- Version information with initial version 1.0.0

## Outcome

- ✅ Impact: Created initial project constitution with specific guidelines for Next.js, TypeScript, Tailwind CSS, and other technology requirements
- 🧪 Tests: No tests needed for this configuration file
- 📁 Files: Updated .specify/memory/constitution.md with comprehensive project guidelines
- 🔁 Next prompts: Project can now proceed with development following these established principles
- 🧠 Reflection: The constitution provides clear guidance for all future development work on the tax firm website

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Not applicable
- Prompt variant (if applicable): Not applicable
- Next experiment (smallest change to try): Not applicable