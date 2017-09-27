const mongoose = require("./mongodb")
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: String, // Short notation
    friends: [{ // Better than a JOIN, not?
        type: Schema.Types.ObjectId,
        ref: "Person",
    }],
    personType: { // Should more be needed than a type, just make an object of it!
        type: String,
        enum: ["nice", "funny", "teacher"], // no pun intended
    },
    length: Number, // Number is a very wide defenition!
    birthday: Date,
    alive: Boolean,
    characteristics: { // Sub-objects! not to be confused with the type of `personType`
        hair: {
            color: {
                type: String,
                default: "blue" // default is the value used as well on read of old data as write on new one
            },
        }
        // More can be here!
    }
}, { collection: "people" }) // Mongoose likes to name things as it likes, better to override that

// This allows to set indexes on fields, for fast searching!
PersonSchema.index({
    username: 1,
});

const PersonModel = mongoose.model("people", PersonSchema, "people")

module.exports.getPersonByName = (name) => { 
    return PersonModel.findOne({ name }) // in ES6 you can drop the value if the key had the same name! so in full this wll be { name: name }
}
// NOTE: `await` is not needed here since you return the Promise which you await in the request handler
// Adding it won't hurt unless you care about perfomance (you should)


module.exports.addPerson = async (person) => {
    return (new PersonModel(person)).save()
}
