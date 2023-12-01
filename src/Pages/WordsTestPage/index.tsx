import React, { useState } from 'react'
import ProgressMobileStepper from '@Components/ProgressBar'
import Questions from '@Components/Question'

const WordsTestPage = () => {
  const [ progress, setProgress ] = useState<number>(0)

  const handleProgress = (newProgress: number) => {
    setProgress(newProgress)
  }
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <ProgressMobileStepper activeStep={progress} />

      <Questions onProgressChange={handleProgress} />
    </div>
  )
}

export default WordsTestPage