import React from "react"
import BackgroundSVGEffect from "@/components/BackgroundSVGEffect/BackgroundSVGEffect";
import TopMenuBlock from "@/components/TopMenuBlock/TopMenuBlock";
import styles from '../styles/home.module.scss'
import Button from "@/components/Buttons/Button";
import BackgroundBottomSVGEffect from "@/components/BackgroundBottomSVGEffect/BackgroundBottomSVGEffect";
import Modal from '@/components/Modal/Modal';

const Home: React.FC = () => {
    const conatctUsRef = React.useRef()
    const howItWorksRef = React.useRef()
    const aboutUsRef = React.useRef()

    const [open, setOpen] = React.useState<any>(false);
 
    return (
        <>
            <TopMenuBlock
                contact={conatctUsRef}
                howItWotks={howItWorksRef}
                about={aboutUsRef}
            />
            <div className={styles.headerWrapper}>
                <BackgroundSVGEffect/>
                <div className={styles.buttonsWrapper}>
                    <div className={styles.topButtons}>
                        <Button
                            onClick={() => {setOpen(true)}}
                            text='Join'
                            icon={<><i className="fas fa-user-plus"></i></>}
                            styleType='solid'
                        />

                        <Button
                            link='https://discord.com/'
                            text='Sign In'
                            icon={<><i className="fa-solid fa-arrow-right-to-bracket"></i></>}
                            styleType='solid'
                        />
                    </div>

                    <div className={styles.bottomButtons}>
                        <Button
                            link=''
                            text='Getting Started'
                            icon={<><i className="fa-solid fa-book-open"></i></>}
                            styleType='transparent'
                            onClickRef={howItWorksRef}
                        />
                    </div>
                </div>
            </div>

            <BackgroundBottomSVGEffect
                howItWorksRef={howItWorksRef}
                contactsRef={conatctUsRef}
                aboutUsRef={aboutUsRef}
            />

            <Modal open={open} setOpen={setOpen}/>
        </>
    );
}

export default Home;