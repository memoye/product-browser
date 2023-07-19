import styles from "./navBtn.module.css"



const NavBtn = (props) => {
    const { label, setCurrentIndex } = props


    return (
        <button onClick={ () => {
            label === "prev" ? setCurrentIndex((prev) => prev - 1) : setCurrentIndex((prev) => prev + 1)
        } } className={ styles.navBtn } > { label } </button>
    )
}

export default NavBtn