import React from 'react'

import styles from './button.module.scss'

interface IButton {
    link?: any,
    text?: any,
    icon?: any,
    styleType: 'solid' | 'transparent',
    onClickRef?: any,
    onClick?: any,
    classname?: any
}

const Button: React.FC<IButton> = (props: IButton) => {

    const scrollTo = (ref: any) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <>
            {
                props.onClickRef || props.onClick ?
                    <>
                        <div className={`${styles.buttonWrapper} ${props.styleType == 'solid' ? styles.solid : styles.transparent} ${props.classname ?? ""}`}
                            onClick={() => props.onClickRef ? scrollTo(props.onClickRef) : props.onClick ? props.onClick() : undefined}>

                            <a >
                                {props.icon} {props.text}
                            </a>

                        </div>
                    </>
                    : <>
                        <a href={props.link}>
                            <div className={`${styles.buttonWrapper} ${props.styleType == 'solid' ? styles.solid : styles.transparent} ${props.classname ?? ""}`}>
                                <span>{props.icon} {props.text}</span>
                            </div>
                        </a>
                    </>
            }

        </>
    )
}

export default Button