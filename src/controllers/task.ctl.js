const getHome = (req, res) => {
    res.json({home: {message:'este es el home'}})
}
const getPrifle = (req, res) => {
    res.json({home: {message:'este es el profile'}})
}
const getContac = (req, res) => {
    res.json({home: {message:'este es el contact'}})
}
const getSingIn = (req, res) => {
    res.json({home: {message:'este es el singIn'}})
}
const getSingUp = (req, res) => {
    res.json({home: {message:'este es el singUp'}})
}

module.exports = {getHome, getPrifle, getContac,getSingIn, getSingUp};

