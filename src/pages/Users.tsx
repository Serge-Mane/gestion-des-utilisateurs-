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
    const usersSorted: User[] = users;
    const sortBy = (field: string) => {
        console.log(field);
        usersSorted.sort((firstUser: User, secondUser: User) => {
            const fieldFirstUser = firstUser[field as keyof User] || "";
            const fieldSecondtUser = secondUser[field as keyof User] || "";

            if (fieldFirstUser > fieldSecondtUser) {
                return 0;
            }

            if (fieldFirstUser < fieldSecondtUser) {
                return -1;
            }
        });
    };
    return (
        <section >
            <div className="flex justify-end items-center text-sm mt-4 mb-2 gap-2 ">
                <span>Trier par</span>
                <button type="button" className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs" onClick={() => sortBy("male")}>Hommes</button>
                <button type="button" className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs" onClick={() => sortBy("female")}>Femmes</button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {usersSorted.map(({ gender, firstName, lastName, phone, email = "Indisponible" }: User) => (
                    <article className="text-xl rounded-lg bg-gray-200 border border-gray-800 p-1.5">
                        <h3 className="text-2xl">
                            {gender} {firstName}  {lastName}
                        </h3>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
export default Users;