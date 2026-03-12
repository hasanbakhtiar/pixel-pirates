type propType = {
    title: string
}

const List = ({ title }: propType) => {
    return (
        <div>
            {title}
        </div>
    )
}

export default List