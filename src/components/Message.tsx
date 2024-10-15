type Props = {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: number;
    text: string;
};

function Message(props: Props) {
    return (
        <>
            <p>
                {props.text} {props.firstName} {props.lastName}
            </p>
            <p>
                {props?.email && <span>{props.email}</span>}
                {props?.phone ? <span>{props.phone}</span> : null}
            </p>
        </>
    );
}
export default Message;