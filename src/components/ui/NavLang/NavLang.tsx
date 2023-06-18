import "./NavLang.scss"
import { useState } from "react"


export const NavLang = (props: any) => {

    const [isActiveUk, setActiveUk] = useState(true)
    const [isActiveRu, setActiveRu] = useState(false)
    const [isActiveEn, setActiveEn] = useState(false)

    return (
        <>
            <div className="nav-lang">
                <ul className="nav-pills">
                    <li className="nav-item">
                        <button className={isActiveUk ? "nav-link nav-link_active" : "nav-link"} onClick={() => {
                            if (!isActiveUk) {
                                setActiveUk(true)
                                setActiveRu(false)
                                setActiveEn(false)
                            }
                        }} type="button">УК</button>
                    </li>
                    <li className="nav-item">
                        <button className={isActiveRu ? "nav-link nav-link_active" : "nav-link"} onClick={() => {
                            if (!isActiveRu) {
                                setActiveRu(true)
                                setActiveUk(false)
                                setActiveEn(false)
                            }
                        }} type="button">РУ</button>
                    </li>
                    <li className="nav-item">
                        <button className={isActiveEn ? "nav-link nav-link_active" : "nav-link"} onClick={() => {
                            if (!isActiveEn) {
                                setActiveEn(true)
                                setActiveRu(false)
                                setActiveUk(false)
                            }
                        }} type="button">EN</button>
                    </li>
                </ul>
            </div>
        </>
    )
}