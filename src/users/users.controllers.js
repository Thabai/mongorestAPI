const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(200).send({user: savedUser, message: "User created in database"});
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = req.params.username;
        const targetUser = await User.findOne({username: user});
        if (targetUser !== null) {
        res.status(200).send({user: targetUser});
    } else {
        res.status(500).send({message: "Unsuccessful"})
    };
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};


exports.updateUserEmail = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.pass,
            updateEmail: req.body.emailnew,
        }
        const changeUser = await User.findOneAndUpdate({username: user.username, password: user.password}, {email: user.updateEmail});
        if (changeUser !== null) {
            res.status(200).send({changeUser: changeUser, message: 'User updated successfully'});
        } else {
            res.status(500).send('User update unsuccessful')
        };
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};

//not functioning properly
// exports.updateUserPass = async (req, res) => {
//     try {
//         const user = {
//             username: req.body.username,
//             password: req.body.pass,
//             updatePass: req.body.passnew,
//         }
//         const changeUser = await User.findOneAndUpdate({username: user.username, password: user.password}, {password: user.updatePass});
//         if (changeUser !== null) {
//             res.status(200).send({user, message: 'User updated successfully'});
//         };
//     } catch (error) {
//         res.status(500).send(error)
//         console.log(error);
//     }
// };

exports.deleteUser = async (req, res) => {
    try {
         const user = {
            username: req.params.username,
            password: req.params.pass,
        }
        const delUser = await User.findOneAndDelete({username: user.username, password: user.password})
        if (delUser !== null) {
            res.status(200).send({delUser: delUser, message: 'User deleted successfully'});
        } else {
            res.status(500).send('User delete unsuccessful')
        };
            } catch (error) {
        res.status(500).send(error)
        console.log(error);
}
};
