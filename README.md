# Travel Media

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [System Architecture](#system-architecture)
- [System Requirements Specification](#system-requirements-specification)
- [Comparative Analysis](#comparative-analysis)
- [Functional Requirements](#functional-requirements)
- [Non-Functional Requirements](#non-functional-requirements)
- [Features](#features)
- [Conclusion](#conclusion)
- [Installation](#installation)

## Introduction

**Travel Media** is a unique social network designed for travel enthusiasts. It allows users to share their travel experiences, photos, and connect with fellow travelers. We offer two types of access: user and administrator, ensuring effective community management and enriching user experience.

## Technologies

This project is built using:

- **Frontend:** React, Redux
- **Backend:** Express, Node.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Testing:** Unit Tests and Snapshot Testing

# System Architecture

## Choice of Architecture
- **Deployment:** The app will be deployed using a combination of Node.js for the backend and React for the frontend. This combination allows for a scalable, efficient, and interactive user experience.
- **Frontend Creation:** The frontend is built using Create React App (CRA) and Redux, chosen for its simplicity and support for modern web apps.
- **Styling Tools:** Styling is accomplished using Material-UI for its comprehensive component library and customization options, enhancing the user interface.
- **Backend:** Express and Node.js provide a robust and scalable server-side solution.

# System Requirements Specification
## User Stories
- **Travel Blogger:** "As a travel blogger, I want to post and share my travel experiences and photos, so that I can inspire others."
- **Tour Planner:** "As a tour planner, I need a platform to showcase my travel packages, so that I can attract more customers."
- **Travel Enthusiast:** "As someone who loves traveling, I want to connect with like-minded individuals, so I can get travel ideas and tips."
- **Adventure Seeker:** "As someone constantly seeking new adventures, I want a platform where I can discover hidden travel gems and off-the-beaten-path destinations shared by real travelers, so I can plan unique and exciting trips."
- **Cultural Enthusiast:** "As a cultural enthusiast, I want a platform where I can learn about local customs, foods, and traditions from various parts of the world through personal travel stories and tips, enabling me to immerse myself in diverse cultures during my travels."
## Comparative Analysis

- **Existing Solutions:** Other social media platforms like Instagram and Facebook allow sharing travel experiences but lack the focus on a travel-centric community.
- **Our Edge:** Travel Media offers a specialized platform for travel enthusiasts. It emphasizes travel content and networking, providing a more focused and enriching experience.
## Functional Requirements

- **Post Creation:** Users can create posts with images and text.
- **Social Networking:** Users can add friends and interact with others.
- **Admin Management:** Admins can monitor and manage user activities.
- **Tour Information:** Display of sponsored tours with external links.
- **User Authentication:** Secure login process using JWT.
## Non-Functional Requirements

- **Performance:** Efficient load times and responsive design.
- **Security:** Robust authentication and data protection.
- **Scalability:** Ability to handle an increasing number of users.
- **Usability:** Intuitive and easy-to-navigate interface.

## Features

- **Travel Posts:** Users can share images and experiences from their travels.
- **Social Networking:** Add friends and connect with other users.
- **Sponsored Tours:** Access to various tours and travel packages with links to their websites.
- **Administrative Access:** Management and monitoring of platform activity.
- **Security:** Using JWT for secure authentication.

## Conclusion

Travel Media aims to create a dedicated space for travel lovers to share and connect. It distinguishes itself with its travel-specific focus and community-driven features, offering a unique platform in the social media landscape.

## Installation

To install this project, follow these steps:

```bash
git clone https://github.com/DamianPerdigon/MediaTravel.git
cd your-repo
npm install


Usage
To start the server: node index.js // npm start

Testing
This project uses unit and snapshot testing to ensure code quality and consistency. To run the tests: npm test


Usage
To start the server: node index.js // npm start

Testing
This project uses unit and snapshot testing to ensure code quality and consistency. To run the tests: npm test
