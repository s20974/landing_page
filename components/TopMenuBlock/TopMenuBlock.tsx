import Link from 'next/link'
import React from 'react'

import styles from './top-menu-block.module.scss'

interface IMenu {
    contact?: any,
    howItWotks?: any,
    about?: any,
    isPrivacy?: boolean,
    is404?: any
}

const TopMenuBlock: React.FC<IMenu> = (props: IMenu) => {
    const scrollTo = (ref: any) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <>
            <div className={`${styles.menuWrapper} ${props.isPrivacy ? styles.privacyStyles : ''} ${props.is404 ? styles.styles404 : ''}`}>
                {
                    !props.is404 && !props.isPrivacy && 
                    <>
                        <div className={styles.topLogoName}>
                            <i>HomeazyAI</i>
                        </div>
                        <div className={styles.menuButtons}>
                            <a onClick={() => scrollTo(props.about)}>#about</a>
                            <a onClick={() => scrollTo(props.contact)}>#contact</a>
                            <a onClick={() => scrollTo(props.howItWotks)}>#how it works</a>
                        </div>
                    </>

                }
                {
                    !props.is404 && props.isPrivacy && 
                        <>
                            <div className={styles.topLogoNamePrivacy}>
                                <i>HomeazyAI</i>
                            </div>
                            <div className={styles.menuButtonsPrivacy}>
                                <div className={styles.menuButtonsLeft}>
                                    <Link href='/'>#home</Link>
                                </div>
                                <div className={styles.menuButtonsLeftRight}>
                                    <Link href='/privacy-policy'>#privacy</Link>
                                    <Link href='/terms-of-service'>#terms</Link>
                                </div>
                            </div>
                        </>
                }
                {
                    props.is404 && 
                    <>
                        <div className={styles.topLogoNamePrivacy}>
                            <i>HomeazyAI</i>
                        </div>
                        <div className={styles.menuButtonsPrivacy}>
                            <div className={styles.menuButtonsLeft}>
                                <Link href='/'>#home</Link>
                            </div>
                        </div>
                    </>
                }
                <p className={styles.menuBottomLine}>
                =====================================================================================================================================================================================================
                </p>
            </div>
        </>
    )
}

export default TopMenuBlock