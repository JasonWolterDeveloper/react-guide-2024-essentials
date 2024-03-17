export default function TabButton({ children, onSelect, isSelected }) {
    let className = '';
    if (isSelected) {
        className = 'active';
    };

    return (
        <li>
            <button className={className} onClick={onSelect}>{children}</button>
        </li> 
    )
}