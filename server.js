const express = require("express")
const app = express()

const people = require("./data/example")

app.listen(3000)

app.get("/", async (req, res) => { // async needs to be set before the function to use await inside it
    // this function awaits the Promise of Mongose with the result and sends the value in JSON
    res.json(await people.getPersonByName("Maartje Eyskens"))
})

app.get("/create", async (req, res) => {
    const maartje = {
        name: "Maartje Eyskens",
        friends: [], // Turns out containers are no people
        personType: "nice",
        length: 4.04, // length not found in medical record
        birthday:new Date(), // today!
        alive: true,
        characteristics: { 
            hair: {
                color: "red-ish",
            }
        }
    } // you can also get this from a POST body ;)

    try { // awaits can be checked for errors in try{}catch, and probably should because it can crash your app
        await people.addPerson(maartje)
        res.json({"everythingIs": "ok"})
    } catch(e) {
        res.json({"everythingIs": "wrong"})
    }
})