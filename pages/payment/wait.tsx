import TopMenuBlock from "@/components/TopMenuBlock/TopMenuBlock";
import React from "react";

import styles from '../../styles/404.module.scss';

const Wait: React.FC = () => {
    return (
        <>
            <TopMenuBlock is404 />

            <div className={styles.errorMessageWrapper}>
                <p>Waith</p>
                <p>We proceed yor payment</p>
            </div>
        </>
    )
}

export default Wait