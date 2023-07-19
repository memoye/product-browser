import React from 'react'

const SubHeading = (props) => {
    const { price, desc } = props

    return (
        <>
            <p> <strong>Price</strong>: { price } </p>
            <p> <strong>Description</strong>: { desc } </p>
        </>

    )
}

export default SubHeading