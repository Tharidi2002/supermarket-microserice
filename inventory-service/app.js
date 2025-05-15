// import express from "express"        // new

const express = require('express')     //old

const port = 3000;
const app = express()

const router = express.Router()

router.get('/api/v1/inventory', (req, res) => {
    res.json({
        item: ["item 1", "item 2", "item 3"]
    })
})

// http://localhost:3000/inventory-service/api/v1/inventory

app.use("/inventory-service", router)

app.listen(port, () => {
    console.log("Server is running on port " + port)
    console.log(`at port: ${port}`)
})