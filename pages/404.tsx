import TopMenuBlock from '@/components/TopMenuBlock/TopMenuBlock';
import React from 'react';

import styles from '../styles/404.module.scss'

const Custom404: React.FC = () => {
    return (
        <>
            <TopMenuBlock is404/>

            <div className={styles.errorMessageWrapper}>
                <p>404</p>
                <p>Page not found</p>
            </div>
        </>
    )
}

export default Custom404