import './myStyle.css';

export const Stylesheet = () => {
    const heading = {
        fontSize: '72px', color: 'blue'
    }
    
    return (
        <div>
            <h1 className='primary'>CSS test</h1>
            <h1 style={heading}>inline test</h1>
        </div>
    );
}