# Comic Store Backend

## Setup Instructions
1. Clone the repository:  
   `git clone <repository-url>`
2. Install dependencies:  
   `npm install`
3. Add a `.env` file with your MongoDB URI.
4. Start the server:  
   `npm run dev`

## API Endpoints
- **POST /api/comics** - Create a new comic.
- **GET /api/comics** - Get all comics (supports pagination, filtering, and sorting).
- **GET /api/comics/:id** - Get details of a specific comic.
- **PUT /api/comics/:id** - Update a comic.
- **DELETE /api/comics/:id** - Delete a comic.
