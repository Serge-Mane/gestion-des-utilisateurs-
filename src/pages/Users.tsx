type User = {
    id: string;
    picture: string;
    gender: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    address: string;
    about: string;
}

type Props = {
    users: User[];
}

//Destructuration
function Users({ users }: Props) {
    //const users = props.users;
    //const { users } = props;
    return (
        <section className="grid md:grid-cols-3 gap-4">
            {users.map(({ firstName, lastName, phone, email = "Indisponible" }: User) => (
                <article className="text-xl rounded-lg bg-gray-200 border border-gray-800 p-1.5">
                    <h3 className="text-2xl">
                        {firstName}  {lastName}
                    </h3>
                    <p>{phone}</p>
                    <p>{email}</p>
                </article>
            ))}
        </section>
    );
}
export default Users;