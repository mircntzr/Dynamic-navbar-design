# Dynamic Responsive Navbar Project

This project contains a responsive navbar design that adapts dynamically based on data retrieved from a database. The content of the navbar is structured according to types such as "mainButton", "parentButton", "childButton", and "greatChildButton".

## Features

- The navbar adapts automatically based on data fetched from the database.
- Buttons and sub-buttons are populated from the database.
- Technologies used: React, Tailwind CSS.

## How to Use

1. Clone the project folder to your computer.
2. Open the terminal and navigate to the project folder: `cd dynamic-responsive-navbar`
3. Install the necessary dependencies: `npm install`
4. Start the project: `npm start`
5. View the project in your browser: `http://localhost:3000`

## Data Structure

- "mainButton": Represents the main navigation button, may contain "parentButton" or "childButton" underneath.
- "parentButton": Represents a dropdown-style button under the main button, can contain other buttons.
- "childButton": Represents buttons at a lower level under a "parentButton".
- "greatChildButton": Represents the lowest-level buttons.

