const router = require('express').Router();
const bcrypt = require('bcrypt');
const { genToken, authenticate } = require('../../middleware/auth');

router.route('/').post(async (req, res) => {
    const creds = req.body;

    try {
        const { password, ...user } = await users.getByEmail(creds.email);
    } catch (err) {
        res.status(401).json({
            errMessage: `Incorrect username or password`
        });
        return;
    }
    if (password && bcrypt.compareSync(creds.password, password)) {
        const token = genToken(user);
        res.status(201).json({
            success: `You have authenticated`,
            token,
            ...user
        });
        return;
    } else {
        res.status(401).json({
            errMessage: `Incorrect username or password`
        });
    }
});

module.exports = router;
