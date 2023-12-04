import React from 'react';
import MobileStepper from '@mui/material/MobileStepper';

interface IProps {
  activeStep: number;
}

const ProgressMobileStepper = ({ activeStep }: IProps) => {

  return (
    <MobileStepper
      className='w-full flex justify-center'
      variant="progress"
      // 질문 길이에 따라 설정 값
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      // 커스텀 시 적용
      nextButton={null}
      backButton={null}
    />
  );
}

export default ProgressMobileStepper;