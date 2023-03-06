import TopMenuBlock from "@/components/TopMenuBlock/TopMenuBlock";
import React from "react";

import styles from '../../styles/404.module.scss'

const Success: React.FC = () => {
    return (
        <>
            <TopMenuBlock is404 />

            <div className={styles.errorMessageWrapper}>
                <p>Success</p>
                <p>We sand you mail with Discord invite</p>
            </div>
        </>
    )
}

export default Success