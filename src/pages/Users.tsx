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
        <section className="grid md:grid-cols-3 gap-4">
            {users.map((user: User) => (
                <article className="text-xl rounded-lg bg-gray-200 border border-gray-800 p-1.5">
                    <h3 className="text-2xl">
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