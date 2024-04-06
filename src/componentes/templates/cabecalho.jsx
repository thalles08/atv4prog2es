import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return (
        <Alert variant="secondary" className="text-center"><h2>{props?.titulo}</h2></Alert>
    );
}