import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

// ? @desc    Create new exercise
// ? @route   POST /api/exercises
// ? @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
    const {name, times, imageIndex} = req.body

    const exercise = await Exercise.create({
        name,
        times,
        imageIdx: imageIndex,
    })
    
    res.json(exercise)
})

// ? @desc    Update exercise
// ? @route   Put /api/exercises
// ? @access  Private

export const updateExercise = asyncHandler(async (req, res) => {
    const {name, times, imageIndex, exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if (!exercise) {
        res.status(404)
        throw new Error('Данное упражнение не найдено!')
    }

    exercise.name = name
    exercise.times = times
    exercise.imageIdx = imageIndex

    const updatedExercise = await exercise.save()
    
    res.json(updatedExercise)
})

// ? @desc    Delete exercise
// ? @route   Delete /api/exercises
// ? @access  Private

export const deleteExercise = asyncHandler(async (req, res) => {
    const {exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if (!exercise) {
        res.status(404)
        throw new Error('Данное упражнение не найдено!')
    }

    await exercise.remove()
    
    res.json({message: 'Exercise has been removes'})
})

// ? @desc    Get exercise
// ? @route   GET /api/exercises
// ? @access  Private
export const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find({})

    res.json(exercises)
})