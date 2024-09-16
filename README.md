# URL Shortener

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This is a simple URL Shortener service that allows users to shorten long URLs into a more compact format. Users can input a long URL and receive a shortened version, which can be used to redirect to the original URL. This is useful for sharing URLs that are too lengthy or not user-friendly.

## Features
- Shorten long URLs into compact, user-friendly links.
- Redirect users from the shortened URL to the original URL.
- Option to track the number of times a shortened URL has been accessed.
- Basic validation to ensure valid URLs are provided.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing original and shortened URLs)
- **Frontend**: HTML, CSS (if applicable)
- **Others**: 
  - Mongoose (for MongoDB interactions)
  - ShortId (for generating short URL IDs)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
## Usage
1. Navigate to the home page.
2. Enter the long URL you want to shorten.
3. Click "Shorten URL" to get your shortened link.
4. Use the shortened link to redirect to the original URL.

### Example:
- Original URL: `https://www.example.com/very/long/url`
- Shortened URL: `http://localhost:3000/abcd12`

## API Endpoints

### POST `/api/url/shorten`
- **Description**: Create a shortened URL.
- **Request**:
  - **Body**: `{ "longUrl": "https://www.example.com" }`
- **Response**:
  ```json
  {
    "shortUrl": "http://localhost:3000/abcd12",
    "longUrl": "https://www.example.com"
  }

