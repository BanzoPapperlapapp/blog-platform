import React, {useState} from 'react';
import Select from 'react-select'
import  '../../schared/select/MySelect.css'

export type MySelectOptionsType = {
    value: string,
    label: string
}
type MySelectPropsType = {
    options: MySelectOptionsType[]
    setSelected: (val: string) => void
}
export const MySelect = ({options, setSelected}: MySelectPropsType) => {


    return <Select
        isSearchable={false}
        options={options}
        defaultValue={options[0]}
        className={"mySelect-container"}
        classNamePrefix={"mySelect"}
        classNames={{
            control: (state) =>
                state.isFocused ? 'focus' : '',
        }}
    />

};
