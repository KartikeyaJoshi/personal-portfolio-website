
You are an expert AI developer. Build a personal portfolio website using the following specifications.

**App Name**: TechnoFolio

**Core Functionality & Features**:

1.  **Hero Section**:
    *   Display a prominent, large, circular profile picture.
    *   The main heading should have a typewriter animation. It should first type "Hi, I'm [Your Name]", then perform a backspace animation to erase it, and then type "A [Your Profession/Tagline]". This animation should loop continuously. The user's name within the heading should be highlighted with the primary color in real-time as it's being typed.
    *   Include a brief, engaging introduction paragraph below the heading.

2.  **Skills Section**:
    *   Display a collection of technology skills as chips, each containing an icon and the skill name.
    *   The skills should be presented in a horizontally scrolling marquee that loops continuously. The animation should pause on hover.
    *   Use appropriate icons for each technology (e.g., from an icon library like `react-icons`).

3.  **Experience Timeline**:
    *   Display professional experience in a vertical, chronological timeline.
    *   Each timeline item should represent a role and include the job title, company name, duration, a brief description, and a list of relevant skills displayed as styled badges.
    *   The most recent experience item should have a subtle ripple or pulse animation on its timeline marker to draw attention to it.

4.  **Projects Portfolio**:
    *   Showcase projects in a grid of cards.
    *   Each project card must include the project name, description, a list of tools/technologies used (as badges), and links to the GitHub repository and a live deployment (if available).
    *   Implement a filtering system. Display buttons for "All" and for each unique technology used across all projects. Clicking a button should filter the visible projects to show only those that use the selected technology.
    *   Add a small "Ongoing" badge to projects that are currently in progress.

5.  **Achievements Section**:
    *   Display achievements and certifications in a grid of cards.
    *   Each card should contain a title, the issuing organization, date, a short description, an image (like a certificate thumbnail), and a link to view the full certificate.

6.  **Contact Section**:
    *   Provide clear calls-to-action for getting in touch.
    *   Include styled buttons with icons that link to your Email, LinkedIn, and GitHub profiles.

**Tech Stack**:

*   **Framework**: Next.js with the App Router
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **UI Components**: Use `shadcn/ui` for a consistent and modern component library (Buttons, Cards, Badges, etc.).
*   **Icons**: Use `lucide-react` for icons.

**Style and Design Guidelines**:

*   **Theme**: A clean, futuristic, and professional tech aesthetic.
*   **Color Palette**:
    *   **Primary Color**: Futuristic blue (`#4681C4`) for headings, links, and key highlights.
    *   **Background Color**: Light blue (`#D1DFF0`) for the light theme background.
    *   **Accent Color**: Electric indigo (`#6F42C1`) for highlights and interactive elements.
*   **Typography**:
    *   **Font**: 'Space Grotesk' (sans-serif) for both headlines and body text to give a modern, technical feel. If not available, use 'Poppins'.
*   **Layout**:
    *   Use a clean, grid-based layout.
    *   Ensure the design is fully responsive and looks great on all screen sizes, from mobile to desktop.
*   **UI Details**:
    *   Use rounded corners and subtle shadows on cards and buttons.
    *   Implement smooth transitions and hover effects on interactive elements like links, buttons, and cards to create an engaging user experience.
    *   The website should support both light and dark modes, with a theme toggle button in the header.

**Initial Content**:

Use the following placeholder data to populate the website. Create a central data file (e.g., `src/lib/data.ts`) to manage this content.

*   **Personal Info**: Name: "Kartikeya Joshi", Introduction: "A versatile full-stack developer...", Avatar: `https://placehold.co/128x128.png`
*   **Skills**: Python, React, Next.js, Node.js, MySQL, PostgreSQL, FastAPI, Docker, Google Cloud, Git, .NET.
*   **Experience**:
    *   Software Intern at Softworld India (May 2024 - July 2024), working on an ASP.NET ERP.
*   **Projects**:
    *   **PrimeCMS**: "Clinic Management System...", Tools: ['Next.js', 'PostgreSQL', 'Google Cloud'], Status: 'ongoing'.
    *   **Personal Portfolio**: "A website showcasing...", Tools: ['Next.js'].
    *   **DSBACKUP**: "Windows backup solution...", Tools: ['Python', 'Google Cloud', 'MySQL'].
*   **Achievements**:
    *   **CKAD**: "Certified Kubernetes...", Org: 'The Linux Foundation', Date: 'March 2021', Image: `https://placehold.co/600x400.png`.
    *   **AWS Architect**: "AWS Certified Solutions...", Org: 'AWS', Date: 'August 2020', Image: `https://placehold.co/600x400.png`.
*   **Contact**: Provide placeholder links for email, LinkedIn, and GitHub.
      