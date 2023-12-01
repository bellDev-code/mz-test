import { BaseButton } from '@Components/Button/BaseButton';
import React from 'react';

interface IProps {
    onProgressChange: (progress: number) => void;
}

const Questions = ({ onProgressChange }: IProps) => {
    const handleBaseButtonClick = () => {
        // 직접 값을 전달하도록 수정
        onProgressChange((progress: number) => progress + 1);
    };

    return (
        <div className='py-10'>
            <div className='flex flex-col items-center justify-center'>
                <h1>질문</h1>
                <div className='flex flex-col gap-3 py-3'>
                    <BaseButton onClick={() => handleBaseButtonClick()}>예시</BaseButton>
                    <BaseButton onClick={() => handleBaseButtonClick()}>예시</BaseButton>
                    <BaseButton onClick={() => handleBaseButtonClick()}>예시</BaseButton>
                    <BaseButton onClick={() => handleBaseButtonClick()}>예시</BaseButton>
                </div>
            </div>
        </div>
    );
};

export default Questions;
