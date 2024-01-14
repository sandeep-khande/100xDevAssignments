const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");


function usernameExisted(username){
    const checkUsername = User.findOne({ username })
    return checkUsername ? true : false
}

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if(usernameExisted(username)){
        res.status(403).json({ error: "username already exists" })
        return;
    }

    const  newUser = new User({ username, password })
    newUser.save()
    return
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router