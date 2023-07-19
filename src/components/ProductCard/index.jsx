import { useEffect, useState } from "react"
import NavBtn from "../NavButton"
import styles from "./productCard.module.css"
import SubHeading from "../SubHeading"

const Card = () => {
    const [prod, setProd] = useState({});
    const [currentIndex, setCurrentIndex] = useState(1)


    useEffect(
        () => {
            fetch(`https://dummyjson.com/products/${currentIndex}`)
                .then(response => response.json())
                .then(result => result)
                .then(data => setProd(data))
                .catch(error => console.log('error', error));

        }, [currentIndex]
    )

    return (
        <div className={ styles.prodCard }>
            <h1 className={ styles.mainTitle }> { prod.title } </h1>
            <div className={ styles.prodImgBox }>
                <img className={ styles.prodImg } src={ prod.thumbnail } alt="product" />
            </div>
            <div>
                <SubHeading
                    price={ prod.price }
                    desc={ prod.description }
                />
            </div>
            <div className={ styles.navs }>
                <NavBtn
                    label={ "prev" }
                    setCurrentIndex={ setCurrentIndex }

                />
                <NavBtn
                    label={ "next" }
                    setCurrentIndex={ setCurrentIndex }
                />
            </div>
        </div >
    )
}

export default Card