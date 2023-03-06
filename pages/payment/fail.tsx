import TopMenuBlock from "@/components/TopMenuBlock/TopMenuBlock";
import React from "react";

import styles from '../../styles/404.module.scss'

const Fail: React.FC = () => {
    return (
        <>
            <TopMenuBlock is404/>

            <div className={styles.errorMessageWrapper}>
                <p>Ooops</p>
                <p>Payment was failed</p>
            </div>
        </>
    )
}

export default Fail