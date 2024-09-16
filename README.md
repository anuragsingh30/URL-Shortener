URL Shortener
Table of Contents
Project Overview
Features
Tech Stack
Installation
Usage
API Endpoints
Contributing
License
Project Overview
This is a simple URL Shortener service that allows users to shorten long URLs into a more compact format. Users can input a long URL and receive a shortened version, which can be used to redirect to the original URL. This is useful for sharing URLs that are too lengthy or not user-friendly.

Features
Shorten long URLs into compact, user-friendly links.
Redirect users from the shortened URL to the original URL.
Option to track the number of times a shortened URL has been accessed.
Basic validation to ensure valid URLs are provided.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (for storing original and shortened URLs)
Frontend: HTML, CSS (if applicable)
Others:
Mongoose (for MongoDB interactions)
ShortId (for generating short URL IDs)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/url-shortener.git
Navigate into the project directory:

bash
Copy code
cd url-shortener
Install dependencies:

bash
Copy code
npm install
Create a .env file and add your environment variables:

makefile
Copy code
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
BASE_URL=http://localhost:3000
Start the server:

bash
Copy code
npm start
Open the app in your browser at:

arduino
Copy code
http://localhost:3000
Usage
Navigate to the home page.
Enter the long URL you want to shorten.
Click "Shorten URL" to get your shortened link.
Use the shortened link to redirect to the original URL.
Example:
Original URL: https://www.example.com/very/long/url
Shortened URL: http://localhost:3000/abcd12
API Endpoints
POST /api/url/shorten
Description: Create a shortened URL.
Request:
Body: { "longUrl": "https://www.example.com" }
Response:
json
Copy code
{
  "shortUrl": "http://localhost:3000/abcd12",
  "longUrl": "https://www.example.com"
}
GET /:shortUrl
Description: Redirect to the original long URL.
Parameters: shortUrl (Path Parameter)
Response: Redirects to the corresponding long URL.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License.

