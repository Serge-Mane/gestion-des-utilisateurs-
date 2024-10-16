type Props = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: number;
    text: string;
};

function Message(props: Props) {
    return (
        <div className="message">
            <p>
                {props.text} {props.firstName} {props.lastName}
            </p>
            <p>
                {props?.email && <span>{props.email}</span>}
                {props?.phone ? <span>{props.phone}</span> : null}
            </p>
        </div>
    );
}
export default Message;