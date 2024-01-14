const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

//Logic to check if username exists
function userNameExists(username){
    const findingUsername = Admin.findOne({ username })
    return findingUsername ? true : false;
} 


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if(userNameExists(username)){
        res.status(403).json({ error: "Username alrready exists "})
        return;
    }

    const admin = new Admin({ username, password })
    admin.save()
    res.status(201).json({ message: "Admin created successfully "})

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title, description, price, coverImage} = req.body

    const course = new Course({ title, description, price, coverImage});
    const newCourse = await course.save()
    try {
        res.status(201).json({
            message: "Course created successfully",
            courseId: newCourse._id
        })
    } catch (error) {
        res.status(500).json({ error: "Error in creating new course" })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    if (!courses) {
        res.status(404).json({ message: 'No course found' });
        return;
    }
    res.status(200).json({ courses });

});

module.exports = router;