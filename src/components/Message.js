import { useState } from "react";

export const Message = (props) => {
    const [subsc, setSubsc] = useState(false);

    return (
        <div>
            {subsc ? <h1>Thanks for Subscription!</h1> : <h1>Please Subscribe</h1>}
            {!subsc && <button onClick={()=>setSubsc(true)}>Subscribe</button>}
        </div>
    );
}