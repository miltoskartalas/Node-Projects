require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete("id").then(() => {
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async(id) => {
    Task.findByIdAndDelete(id)
    count = await Task.countDocuments({ completed: false })
    return count
}