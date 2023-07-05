const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

// serve static content from build directory
app.use(express.static('build'))
app.use(cors())

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
