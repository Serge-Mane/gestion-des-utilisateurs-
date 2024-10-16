type User = {
    id: string;
    picture: string;
    gender: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    about: string;
}

type Props = {
    users: User[];
}

function Users(props: Props) {
    const users = props.users;
    return (
        <section className="grid">
            {users.map((user: User) => (
                <article className="user">
                    <h3>
                        {user.firstName}  {user.lastName}
                    </h3>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                </article>
            ))}
        </section>
    );
}
export default Users;