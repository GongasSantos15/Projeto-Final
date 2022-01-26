const express = require("express")
    const { insertUser, findUserByEmail, insertSession, findSessionByToken } = require('./db')
    const app = express()
    const port = process.env.PORT ?? 3001
    app.use(express.json())

    app.post('/login', (req, res) => {
        const { email, password } = req.body

        const user = findUserByEmail(email)
        if (!user) return res.status(404).json({"message": "The user was not found!"})

        if (user.password !== password) return res.status(401).json({"message": "The password is invalid!"})

        const token = insertSession({ email }) 
        res.status(200).json({ token })
    })

    app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))