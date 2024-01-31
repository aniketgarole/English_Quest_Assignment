const jwt = require('jsonwebtoken');


const auth = async(req, res, next) => {
    
    try {
        const wholeToken = req.headers.authorization
        if (wholeToken) {
            const token = wholeToken.split(" ")[1]
            console.log(token)
            jwt.verify(token, 'avenger', function(err, decoded) {
                if (decoded) {
                    req.body.role = decoded.role
                    next()
                } else if (err) {
                    res.status(200).json({"msg": "Wrong token provided"})
                }
              });
        } else {
            res.status(200).json({"msg":"Please Login first"})
        }
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
}



module.exports = {auth}