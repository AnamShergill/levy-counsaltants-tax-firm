---
id: 2
title: Add responsive design requirement
stage: constitution
date: 2026-01-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: claude
command: sp.constitution
labels: [constitution, responsive-design]
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
Update the constitution:

Add the following rule to the existing constitution:

"All components and pages must be fully responsive for desktop, tablet, and mobile.
Use Tailwind CSS responsive utilities (sm, md, lg, xl) wherever appropriate.
Animations should work seamlessly on all screen sizes."
```

## Response snapshot

Updated the project constitution file (.specify/memory/constitution.md) to enhance the responsive design requirement. The constitution now includes the specific requirement that "All components and pages must be fully responsive for desktop, tablet, and mobile. Use Tailwind CSS responsive utilities (sm, md, lg, xl) wherever appropriate. Animations should work seamlessly on all screen sizes." This replaces the more general "Responsive design for all screen sizes" requirement. The version was updated from 1.0.0 to 1.0.1 to reflect this change.

## Outcome

- ✅ Impact: Enhanced responsive design requirements in project constitution with specific Tailwind CSS utility guidance
- 🧪 Tests: No tests needed for this configuration file
- 📁 Files: Updated .specify/memory/constitution.md with more specific responsive design guidelines
- 🔁 Next prompts: Project can continue with more detailed responsive design requirements
- 🧠 Reflection: The constitution now provides clearer guidance for responsive implementation using Tailwind CSS utilities

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Not applicable
- Prompt variant (if applicable): Not applicable
- Next experiment (smallest change to try): Not applicable