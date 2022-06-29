export const NameList = () => {
    const names = ['aa', 'bb', 'cc'];
    
    return (
        <ul>
            {names.map((name) => {return <li key={name}>{name}</li>})}
        </ul>
    )
}