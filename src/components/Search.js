import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)
    const onSubmit = event => {
        if (event.key === 'Enter') {
         return
        }
        if (value.trim()) {
            console.log('Make request with', value)
        } else {
           show('Ведите данные пользевателя')
        }
    }

    return (
     <div className="form-group">
       <input type="text"
        className="form-control"
        placeholder="Ведите ник пользователя..."
        onKeyPress={onSubmit}
        onChange={event => setValue(event.target.value)}
       />
     </div>
    )
}