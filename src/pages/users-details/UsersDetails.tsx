import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

function UsersDetails() {
    let { userId } = useParams();
    const [user, setUser] = useState<User>();
    const getOneUser = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        setUser(user);
    };
    useEffect(() => {
        getOneUser();
    }, []);
    return (
        <article>
            <div className="flex">
                <div className="">
                    <h3 className="text-2xl">
                        {user?.gender} {user?.firstName}  {user?.lastName}
                    </h3>
                    <p>{user?.phone}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
        </article>
    )
}

export default UsersDetails;