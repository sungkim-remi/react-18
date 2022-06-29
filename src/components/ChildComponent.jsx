export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetParent('sdk')}>Greet Parent</button>
        </div>
    )
}