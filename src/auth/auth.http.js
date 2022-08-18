const {loginUser} = require('./auth.controllers')

const login = (req, res) => {
    const data = req.body;

    if(!data.email || !data.password){
        return res.status(400).json({message: 'Missing Data'})
    }

    const response = loginUser(data.email, data.password)

    if(response){
        return res.status(200).json({message: 'Tus credenciales son correctas', user: response})
    } else {
        return res.status(401).json({message: 'Invalid Credentials'})
    }
}



module.exports = {
    login
}