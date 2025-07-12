# Manoj Kumar Sharma - Author & Poet Website

A modern, responsive website for author Manoj Kumar Sharma featuring his published books, admin interface, and e-commerce functionality.

## Features

### Frontend (Next.js)
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Book Showcase**: Display published books with detailed information
- **Admin Interface**: Complete CRUD operations for book management
- **User Authentication**: Login, registration, and profile management
- **Shopping Cart**: Add, remove, and manage cart items
- **Checkout System**: Multi-step checkout process
- **Order Management**: View order history and track orders
- **Responsive Design**: Works perfectly on all devices

### Backend (Express.js)
- **RESTful API**: Complete backend API for all frontend functionality
- **Authentication**: JWT-based authentication with role-based access
- **Book Management**: CRUD operations for books with search and filtering
- **User Management**: User registration, login, and profile management
- **Order Processing**: Order creation, status updates, and tracking
- **Cart Management**: Shopping cart functionality with validation
- **Admin Features**: Admin-only endpoints for managing books and users

## Tech Stack

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

### Backend
- **Express.js** - Node.js web framework
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload handling

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manoj-sharma-next
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies (if not already installed)
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file for backend
   cp server/.env.example server/.env
   # Edit server/.env with your configuration
   ```

4. **Run the Development Servers**

   **Option 1: Run both frontend and backend**
   ```bash
   # Terminal 1 - Frontend (Next.js)
   npm run dev

   # Terminal 2 - Backend (Express.js)
   npm run dev:server
   ```

   **Option 2: Run only frontend (with mock data)**
   ```bash
   npm run dev
   ```

   **Option 3: Run only backend**
   ```bash
   npm run server
   ```

### Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Books
- `GET /api/books` - Get all books (with search/filter)
- `GET /api/books/:id` - Get book by ID
- `GET /api/books/slug/:slug` - Get book by slug
- `POST /api/books` - Create new book (admin only)
- `PUT /api/books/:id` - Update book (admin only)
- `DELETE /api/books/:id` - Delete book (admin only)
- `GET /api/books/admin/stats` - Get book statistics (admin only)

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID (admin only)
- `POST /api/users` - Create new user (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)
- `GET /api/users/admin/stats` - Get user statistics (admin only)

### Orders
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status (admin only)
- `GET /api/orders/admin/all` - Get all orders (admin only)
- `GET /api/orders/admin/stats` - Get order statistics (admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:bookId` - Update cart item quantity
- `DELETE /api/cart/remove/:bookId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart
- `GET /api/cart/summary` - Get cart summary
- `POST /api/cart/validate` - Validate cart items

## Sample Data

### Default Admin User
- **Email**: admin@example.com
- **Password**: admin123
- **Role**: admin

### Default Regular Users
- **Email**: john@example.com
- **Password**: password123
- **Email**: jane@example.com
- **Password**: password123

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── components/         # React components
│   │   ├── admin/             # Admin pages
│   │   ├── auth/              # Authentication pages
│   │   ├── checkout/          # Checkout pages
│   │   ├── profile/           # User profile pages
│   │   └── published-book/    # Book showcase pages
│   └── ...
├── server/                    # Express.js backend
│   ├── data/                  # Sample data files
│   ├── middleware/            # Express middleware
│   ├── routes/                # API routes
│   └── index.js               # Server entry point
├── package.json
└── README.md
```

## Features in Detail

### Admin Interface
- **Dashboard**: Overview with statistics and quick actions
- **Book Management**: Add, edit, delete, and view all books
- **User Management**: Manage user accounts and roles
- **Order Management**: View and update order statuses
- **Analytics**: View sales and user statistics

### User Features
- **Browse Books**: View all published books with search and filtering
- **Book Details**: Detailed view of each book with purchase options
- **Shopping Cart**: Add books to cart and manage quantities
- **Checkout**: Complete purchase process with shipping and payment
- **Order History**: View past orders and track current orders
- **Profile Management**: Update personal information and preferences

### Security Features
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin and user role permissions
- **Password Hashing**: Secure password storage with bcrypt
- **Input Validation**: Comprehensive validation on all endpoints
- **CORS Protection**: Cross-origin request handling

## Development

### Adding New Features
1. Create frontend components in `src/app/components/`
2. Add corresponding API endpoints in `server/routes/`
3. Update data models in `server/data/` if needed
4. Test both frontend and backend functionality

### Database Integration
The current implementation uses in-memory data storage. To integrate with a real database:

1. Install database driver (e.g., `pg` for PostgreSQL)
2. Update data files to use database queries
3. Add database connection configuration
4. Implement proper error handling and transactions

## Deployment

### Frontend Deployment
- Deploy to Vercel, Netlify, or any static hosting service
- Update API base URL in frontend configuration

### Backend Deployment
- Deploy to Heroku, Railway, or any Node.js hosting service
- Set environment variables for production
- Configure database connection
- Set up proper CORS settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.
