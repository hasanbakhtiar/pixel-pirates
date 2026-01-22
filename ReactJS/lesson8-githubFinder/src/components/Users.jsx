import SingleUser from "./SingleUser"

const Users = ({ sendUsers }) => {
    return (
        <div className="container">
            <div className="row g-5">
                {sendUsers.map(item => (
                    <SingleUser
                        key={item.id}
                        image={item.avatar_url}
                        name={item.login}
                        profileUrl={item.html_url}
                        node_id={item.node_id} />

                ))}
            </div>
        </div>
    )
}

export default Users