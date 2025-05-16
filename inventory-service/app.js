// import express from "express"        // new

const express = require('express')     //old
const {Eureka} = require('eureka-js-client')    // const Eureka = require('eureka-js-client').Eureka;

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

const client = new Eureka({
    // application instance information
    instance: {
        app: 'INVENTORY-SERVICE',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            $: port,
            "@enabled": "true"
        },
        vipAddress: 'inventory-service',
        dataCenterInfo: {
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: 'MyOwn',
        },
    },
    eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
        servicePath: "/eureka/apps/"
    },
});

app.listen(port, () => {
    console.log("Server is running on port " + port)
    console.log(`at port: ${port}`)

    client.start((error) => {
        if (error) {
            console.log('Eureka client failed to start!', error);
        }else {
            console.log('Eureka client started successfully!');
        }
    });
})