export default function FCStudent(props) {
    return (
        <ul style={{ display: 'inline', listStyleType: 'none' }}>
            <li style={{ marginBlock: '5px' }}>Name: {props.name}</li>
            <li style={{ marginBlock: '5px' }}>Grade: {props.grade}</li>
        </ul>
    )
}
