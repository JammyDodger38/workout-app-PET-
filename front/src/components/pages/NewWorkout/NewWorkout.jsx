import React, { useState } from 'react'
import ReactSelect from 'react-select'
import Layout from '../../common/Layout'

import bgImage from '../../../images/new-workout-bg.jpg'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'

import styles from './NewWorkout.module.scss'
import { optionColor } from './optionClolor'

const NewWorkout = () => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = React.useState()

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <>
      <Layout bgImage={bgImage} heading="Create new workout" />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <ReactSelect
            classNamePrefix="select2-selection"
            placeholder="Exercises..."
            title="Exercises"
            options={[
              { value: 'asdasd', label: 'Push-ups' },
              { value: 'hgfhyh', label: 'Pull-ups' },
            ]}
            value={exercises}
            onChange={setExercises}
            isMulti={true}
          />
          <Button text="Create" callback={() => {}} />
        </form>
      </div>
    </>
  )
}

export default NewWorkout
