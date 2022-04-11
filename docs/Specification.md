# Portfolio Web App Specification

This web app has two components:
- An API built with Django 4 and Postgres.
- A frontend client app built with Vue 3, server-rendered with Nuxt.

Both components are hosted on a DigitalOcean droplet (linux instance) running an Nginx web server.

## Features

- A navbar that reflects the user's current scroll position.
- An "About Me" section near the top of the page with a picture of me, my socials, and a brief description of who I am and what I can do.
- A list of the projects that I've done.
- A contact form that sends me an email.
- A test suite for each feature.
- An end-to-end test suite.
- A continuous integration and deployment system.

### Navbar

Client-only. 

The navbar contains one navigation link for each significant section of the front page. 

Clicking a navigation link scrolls the window to its respective section on the page. 

Scrolling to a navigation link's respective section automatically highlights the navigation link.

### About Me

Client-only.

Has a picture of me.

Socials:
- GitHub
- Discord
- Email
- Twitter

Has some summary of my skillset. <!-- todo: expand upon this -->

### Project List Grid

Client-only. <!-- todo: v2 could use the API instead of being hardcoded -->

The project is a grid containing one card for each project that I've done.

Clicking a project card opens a modal with information about that project.

### Contact Form

Client and API.

Form fields:
- Name*
- Email*
- Message*

All fields have space in their margins for validation text.

<!-- todo: expand upon this -->

### Test Suites

API tests: 
- Pytest

Frontend client tests:
- Jest
- Cypress

E2E tests:
- Cypress