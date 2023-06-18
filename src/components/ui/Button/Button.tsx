import { Link } from "react-router-dom"
import "./Button.scss"

export const Button = (props: any) => {

    const {text} = props
    return (
        <>
            <Link className='button-link' to="">
                <div className="button_wrapper">
                    <div className="big_wrapper">
                        <div className="button_text">
                            {text}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}