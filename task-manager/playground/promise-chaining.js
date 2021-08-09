require("../src/db/mongoose")
const User = require("../src/models/user")


// 6106b245c0191018a2c43fe1

User.findByIdAndUpdate("6106b245c0191018a2c43fe1", {
    age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(es)
})

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age: age
    })
    const count = await User.countDocuments({ age: age })
    return count

}
updateAgeAndCount("fsdafsadf", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})