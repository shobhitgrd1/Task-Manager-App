const Task = require('../models/Task')

//get all task-------------------
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        return res.status(500).json({msg:'Somthing went wrong Please try later'})
    }
}

//create task ---------------------

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        return res.status(500).json({msg:'Somthing went wrong Please try later'})
    }

}

// get single task---------------------

const getTask = async (req, res) => {

    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `no task with id: ${taskID}` })
        }
        res.json({ task })
    } catch (error) {
        return res.status(500).json({msg:'Somthing went wrong Please try later'})
    }
}

//update Task--------------------------------

const updateTask = async (req, res) => {

    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true, runValidators: true
        });
        if (!task) {
            return res.status(404).json({ msg: `no task with id: ${taskID}` });
        }
        res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({msg:'Somthing went wrong Please try later'})
    }

}


// delete task-------------------------------

const deleteTask = async (req, res) => {

    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `no task with id: ${taskID}` });
        }
        res.status(200).json({ task, status: "Success" })
    } catch (error) {
        return res.status(500).json({msg:'Somthing went wrong Please try later'})
    }

}


module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}