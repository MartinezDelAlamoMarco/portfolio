import { Link } from "react-router";

interface ButtonMailtoProps {
    mailto: string;
    label: string;
}

const ButtonMailto = ({ mailto, label }: ButtonMailtoProps) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            className="btn btn-secondary rounded-5 me-3 mb-3 "
        >
            <i className="bi bi-envelope me-2"></i>
            {label}
        </Link>
    );
};

export default ButtonMailto;