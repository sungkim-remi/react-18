export const ClickHandler = () => {
    function clickHandler(e, cnt=1) {
        console.log(cnt,'clicked', e);
    }
    
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            <button onClick={(e) => clickHandler(e, 5)}>Click 5</button>
        </div>
    )
}