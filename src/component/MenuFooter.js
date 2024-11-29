function MenuFooter(props) {
    return (
        <ul>
            <li>{props.list[0]}</li>
            <li>{props.list[1]}</li>
            <li>{props.list[2]}</li>
            <li>{props.list[3]}</li>
        </ul>
    );
};

export default MenuFooter;