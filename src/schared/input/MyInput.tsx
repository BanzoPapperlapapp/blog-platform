import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from 'react';
import s from './MyInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type MyInputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string

}
export const MyInput = (
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        ...restProps
    }:MyInputPropsType) => {

    const finalSpanClassName = s.error
        + (spanClassName ? ' ' + spanClassName : '')
    const finalInputClassName = s.mySearch
        + (error ? ' ' + s.errorInput : ' ' + s.superInput)
        + (className ? ' ' + s.className : '') // задача на смешивание классов

    return (
        <div className={s.mySearchWrapper}>
            <input
                className={finalInputClassName}
                type={"search"}
                placeholder={'Поиск...'}
                {...restProps}
            />
            <span
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    );
};

