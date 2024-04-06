import { Alert } from "react-bootstrap";

export default function Rodape(props) {
    return (
        <Alert variant="light" className="text-center"><p>{props?.titulo}</p></Alert>
    );
}

