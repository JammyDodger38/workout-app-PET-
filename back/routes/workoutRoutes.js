import express from "express";
import { createNewWorkoutLog, getWorkoutLog, updateCompleteWorkoutLog } from "../controllers/workout/logController.js";
import { createNewWorkout, deleteWorkout, getWorkout, updateWorkout } from "../controllers/workout/workoutController.js";
import { protect } from "../middleware/authMiddlware.js";

const router = express.Router()

router
    .route('/')
    .post(protect, createNewWorkout)
    .put(protect, updateWorkout)
    .delete(protect, deleteWorkout)

router.route('/log').post(protect, createNewWorkoutLog)
router.route('/log/completed').post(protect, updateCompleteWorkoutLog)
router.route('/:id').get(protect, getWorkout)
router.route('/log/:id').get(protect, getWorkoutLog)

export default router