import { BaseButton } from '@Components/Button/BaseButton';
import React from 'react';
import { data } from './Mockup';

interface IProps {
    onProgressChange: (progress: number) => void;
}

const Questions = ({ onProgressChange }: IProps) => {
    const handleBaseButtonClick = () => {
        onProgressChange((progress: number) => progress + 1);
    };

    return (
        <div className='py-10'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-3 py-3'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-2'>
                                <h1 className='text-lg'>{item.question}</h1>
                                {item.answer.map((answerItem, answerIndex) => (
                                    <BaseButton
                                        key={answerIndex} 
                                        onClick={handleBaseButtonClick}>
                                        {answerItem.text}
                                    </BaseButton>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Questions;
