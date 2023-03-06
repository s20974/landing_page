import { useSpringRef, useTrail, animated } from '@react-spring/web'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

import howIthsWorks from '../../public/how_its_works.png'

import styles from './background-bottom-effect.module.scss'

interface IBackground {
    contactsRef: any,
    howItWorksRef: any,
    aboutUsRef: any
}

const BackgroundBottomSVGEffect: React.FC<IBackground> = (props: IBackground) => {

    const [clientHeight, setClientHeight] = React.useState<any>(500)
    const ref = React.useRef<any>(null)

    const size = useWindowSize()
    const containerSize = useContainerSize(props.howItWorksRef)

    const gridApi = useSpringRef()

    const gridSpring = useTrail(Math.round(1235 / 20), {
        ref: gridApi,
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: size.width,
            y: 1235 / 20
        }
    })

    React.useEffect(() => {
        let alphabet: any = "abcdefghijklmnopqrstuvwxyz"
        const rows: any = []
        const setup = () => {
            for (let y = 0; y < Math.round(1235 / 20); y++) {
                const elem = document.getElementById(`letters-${y}`);
                if (elem) {
                    let row = " "
                    for (let x = 0; x < size.width / 9; x++) {
                        row += " "
                    }
                    const index = Math.floor(Math.random() * row.length)

                    row = row.substring(0, index) + alphabet[Math.floor(Math.random() * alphabet.length)] + row.substring(index + 1);
                    elem.innerHTML = row;

                    rows.push(row)
                }
            }
        }

        setup()

        const changeLetterPosition = () => {
            const randomLinePosition = Math.floor(Math.random() * rows.length)
            let letterIndex = 0;

            for (let i = 0; i < alphabet.length; i++) {
                letterIndex = rows[randomLinePosition].indexOf(alphabet[i])
                if (letterIndex != -1) {
                    break;
                }
            }
            const elem = document.getElementById(`letters-${randomLinePosition}`);

            if (elem && letterIndex !== -1) {

                let newRow = "";

                for (let i = 0; i < rows[randomLinePosition].length; i++) {
                    newRow += (i == letterIndex + 1 ? rows[randomLinePosition][letterIndex] : " ")
                }

                elem.innerHTML = newRow;
                rows[randomLinePosition] = newRow;
            }
        }

        changeLetterPosition()

        const interval = setInterval(() => {
            changeLetterPosition()
        }, 500);

        return () => {
            clearInterval(interval);
        };
    })

    return (
        <>
            <div className={styles.contentContainer}>
                <svg className="bannerSVG" viewBox={`0 0 ${size.width} ${containerSize.height + 50}`} style={{
                    background: "#09073a", display: "block",
                    verticalAlign: "middle"
                }}>
                    {gridSpring.map(({ x, y }, index) => {
                        return (
                            <>
                                <animated.text
                                    id={`letters-${index}`}
                                    x={5}
                                    y={index * 20 + 5}
                                    fill="#7d9ddf"
                                    style={{
                                        fontSize: "17px", fontFamily: "monospace", dominantBaseline: "hanging", whiteSpace: "pre", transition: "0.7s", opacity: '0.5'
                                    }}
                                ></animated.text>
                            </>
                        )
                    })}
                </svg>
                <div className={styles.contentWrapper} ref={props.howItWorksRef}>
                    <h1 ref={props.howItWorksRef}>
                        How It{`'`}s works
                        <p>----------------------------</p>
                    </h1>
                    <div className={styles.howItsWorks}>
                        <div className={styles.imageWrapper}>
                            <img src='/how_its_works.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                        </div>
                        <div className={styles.imageWrapperMobile}>
                            <div className={styles.imageContainer}>
                                <img src='/how_its_works_1.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src='/how_its_works_2.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src='/how_its_works_3.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src='/how_its_works_4.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src='/how_its_works_5.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src='/how_its_works_6.png' alt="how it's works" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                            </div>
                        </div>
                    </div>
                    <h1>
                        About
                        <p>----------</p>
                    </h1>
                    <div className={styles.aboutUsWrapper} ref={props.aboutUsRef}>
                        <b>HomEazyAi</b> is an independent company providing and exploring AI and its uses for specific tasks. Our knowledge of AI {`"`}prompts{`"`} can generate best quality results AI can achieve.
                        <br />
                        <br />
                        Join us today and explore the world of AI and what it can do for you!
                    </div>
                    <h1>
                        Contact Us
                        <p>--------------------</p>
                    </h1>
                    <div className={styles.contactUsWrapper} ref={props.contactsRef}>
                        If you have some problems, please write to: <a href='mailto:aiprojectionshelp@gmail.com'>aiprojectionshelp@gmail.com</a>
                    </div>
                    <div className={styles.footerButtonsWrapper}>
                        <div className={styles.linksWrapper}>
                            <p><Link href='/terms-of-service'>Terms of Service</Link></p> <p><Link href='/privacy-policy'>Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState<any>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

function useContainerSize(ref: any) {
    const [windowSize, setWindowSize] = React.useState<any>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: ref?.current?.clientHeight,
                height: ref?.current?.clientHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [ref]);
    return windowSize;
}

export default BackgroundBottomSVGEffect