import { useEffect, useState } from "react";
import { USERS } from "../../utils/data";
import { Link } from "react-router-dom";

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
//const users = props.users;
//const { users } = props;
function Users() {
    const [usersSorted, setUsersSorted] = useState<User[]>(USERS);
    const [alphabetOrder, setAlphabetOrder] = useState(1);
    const sortBy = (field: string, value: string) => {
        const reult = usersSorted.sort((firstUser: User, secondUser: User) => {
            const fieldFirstUser = firstUser[field as keyof User] || "";
            const fieldSecondtUser = secondUser[field as keyof User] || "";

            let order = 1;
            if (value === "male" || value === "-1") {
                order = -1;
            }

            let sortResult = 0;
            if (fieldFirstUser > fieldSecondtUser) {
                sortResult = 1;
            }

            if (fieldFirstUser < fieldSecondtUser) {
                sortResult = -1;
            }
            return sortResult * order;
        });
        setUsersSorted([...reult]);
    };

    const sortAlphabetically = () => {
        const reult = usersSorted.sort((firstUser: User, secondUser: User) => {
            const fieldFirstUser = firstUser.firstName;
            const fieldSecondtUser = secondUser.firstName;

            const order = alphabetOrder === 1 ? -1 : 1;
            setAlphabetOrder(order);

            let sortResult = 0;
            if (fieldFirstUser > fieldSecondtUser) {
                sortResult = 1;
            }

            if (fieldFirstUser < fieldSecondtUser) {
                sortResult = -1;
            }
            return sortResult * alphabetOrder;
        });
        setUsersSorted([...reult]);
    };

    //les methodes sont identiques pour effectuer des requetes
    const getUsersWithThoutAssyncAwait = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setUsersSorted(users));
    };

    const getUsersWithAssyncAwait = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsersSorted(users);
    };

    useEffect(() => {
        getUsersWithAssyncAwait();
    }, []);

    return (
        <section >
            <div className="flex justify-end items-center text-sm mt-4 mb-2 gap-2 ">
                <span>Trier par</span>
                <button type="button" className="border border-gray-100 bg-green-50 rounded-md px-2 py-1 text-xs" onClick={() => sortBy("gender", "male")}>Hommes</button>
                <button type="button" className="border border-gray-100 bg-blue-50 rounded-md px-2 py-1 text-xs" onClick={() => sortBy("gender", "female")}>Femmes</button>
                <button type="button" className="border border-gray-100 bg-yellow-50 rounded-md px-2 py-1 text-xs" onClick={() => sortAlphabetically()}>De A - Z / Z - A</button>

            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {usersSorted.map
                    (({ id, gender, firstName, lastName, phone, email = "Indisponible" }: User) => (
                        <Link to={`me/users/${id}`} className="text-xl rounded-lg bg-gray-200 border border-gray-800 p-1.5" key={id}>
                            <h3 className="text-2xl">
                                {gender} {firstName}  {lastName}
                            </h3>
                            <p>{phone}</p>
                            <p>{email}</p>
                        </Link>
                    ))}
            </div>
        </section>
    );
}
export default Users;