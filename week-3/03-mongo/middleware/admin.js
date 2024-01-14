const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.header.username;
    const password = req.header.password;
    const admin = await Admin.findOne({ username, password })

    if (!admin){
        res.status(403).json({ error: "Invalid username or password"})
    }
    next()
}

module.exports = adminMiddleware;