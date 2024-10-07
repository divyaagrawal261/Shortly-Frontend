
# Shortly - URL Shortener Dashboard

Shortly is a URL shortening service that allows users to generate shortened URLs and track analytics such as click counts for each link. The project consists of two major components: a user dashboard (Cockpit) and user authentication (Signup/Login).

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Project Overview

Shortly allows users to shorten long URLs, view analytics for shortened links (such as number of clicks), and manage their account (login/signup). The project includes a dashboard where users can input URLs, shorten them, and monitor link performance through an intuitive interface.

## Features

1. **User Authentication:**
   - Users can sign up, log in, and log out.
   - Password visibility toggle for enhanced user experience.

2. **URL Shortening:**
   - Shorten any valid URL with a single click.
   - Display shortened URLs with easy access.

3. **Analytics:**
   - View the number of clicks for each shortened URL.
   - Visual representation of total URLs in the speedometer widget.

4. **Responsive Design:**
   - The dashboard and signup pages are designed to work across various devices (mobile, tablet, desktop).

## Technology Stack

### Frontend:
- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript (Vanilla JS)

### Backend:
- **API**: Currently hardcoded URL for fetching shortened URL data and managing sessions.
- **LocalStorage**: For storing user tokens and session management.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/shortly-url-dashboard.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd shortly-url-dashboard
   ```

3. **Install dependencies (Optional):**
   This project uses Bootstrap via CDN, so no local installation is necessary. However, for any advanced builds, ensure you have node modules installed:
   ```bash
   npm install
   ```

4. **Set up API URL:**
   In the `dash.js` file, change the `apiURL` to your backend's base URL if necessary:
   ```javascript
   const apiURL = "http://localhost:8001";
   ```

5. **Open the project:**
   Open `index.html` in a browser to access the login screen.

## Usage

1. **Login/Signup:**
   - Navigate to `index.html` to log in.
   - If you don't have an account, click on "Sign Up" to register.

2. **Shortening URLs:**
   - After logging in, you will be redirected to the Cockpit (Dashboard).
   - Input any valid URL into the form and click "Shorten" to generate a shortened link.

3. **Viewing Analytics:**
   - The dashboard will display the list of all shortened URLs with their corresponding click counts.
   - The speedometer widget shows the total number of shortened URLs.

4. **Log Out:**
   - Use the "Exit" button in the navigation bar to log out of the session.

## Folder Structure

```plaintext
├── public/
│   ├── index.html           # Login page
│   ├── signUp.html          # Signup page
│   ├── dashboard.html       # Dashboard page (Cockpit)
│   └── src/
│       ├── js/
│       │   ├── login.js     # JS file for handling login functionality
│       │   ├── signUp.js    # JS file for handling signup functionality
│       │   └── dash.js      # JS file for dashboard logic and analytics
│       └── styles/
│           ├── style.css    # Login page styles
│           ├── signUp.css   # Signup page styles
│           ├── dash.css     # Dashboard page styles
└── README.md
```

## Future Enhancements

- **Database Integration**: Store user data and URL analytics in a database (e.g., MongoDB or PostgreSQL) instead of local storage.
- **User Profiles**: Allow users to manage their account details (password reset, email change, etc.).
- **Advanced Analytics**: Integrate charts to visualize trends and patterns in URL clicks using libraries like Chart.js.
- **Error Handling**: Improve error handling for invalid URL input or expired sessions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

