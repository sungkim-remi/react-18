import {useState} from 'react';

export const Form = () => {
    const [userName, setUserName] = useState('sdk');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`form data is ${userName}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <button type='submit'>확인</button>
        </form>
    );
}