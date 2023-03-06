import React from 'react'
import { useSpringRef, useTrail, animated } from "@react-spring/web";

import styles from './background-svg-effect.module.scss'

const BackgroundSVGEffect: React.FC = () => {
    const [words] = React.useState([
        "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog.", "Lorem", "ipsum", "dolor", "sit", "amet,",
        "consectetur", "adipiscing", "elit.", "Cras", "sollicitudin,", "nibh", "non", "suscipit", "interdum,", "diam", "turpis",
        "pharetra", "augue.", "Sed", "at", "bibendum", "elit.", "Nam", "sollicitudin", "lacus", "sit", "amet", "velit",
        "suscipit,", "vel", "efficitur", "erat", "elementum.", "Aenean", "porttitor", "erat", "vel", "malesuada", "mollis.",
    ]);

    /**
     * 
     * homeazyai
     * 
     *  _   _                                         _
     * | |_| | ___  _ __ __  ___ __  ____  _  _  __  ( )
     * |  _  |/ _ \| '  '  |/ -_) _\/__ /_| || || _\ | |
     * |_| |_|\___/|_||_||_|\___|_._|/___/\_,  ||_._||_|
     *                                    |___/
     * 
     *  _   _                                          _
     * | |_| | ___  _ __ __  ___  __  ____  _  _  __  ( )
     * |  _  |/ _ \| '  '  |/ -_)| _\/__ /_| || || _\ | |
     * |_| |_|\___/|_||_||_|\___||_._|/___/\_,  ||_._||_|
     *                                     |___/
     *  _   _                                       __    _
     * | |_| | ___  _ __ __  ___  ___   ____  _  _ |  \  | |
     * |  _  |/ _ \| '  '  |/ -_)| - \ /__ /_| || || - \ | |
     * |_| |_|\___/|_||_||_|\___||_||_| /___/\_,  ||_||_||_|
     *                                       |___/       
     * 
     * 
     *                    
     */

    const MAX_WIDTH = 1920;
    const MAX_HEIGHT = 920;
    const LINES_NUMBER = 60
    const STROKE_WIDTH = 10
    const OFFSET = STROKE_WIDTH / 2

    const logoContent: any = [
        " _   _                                     __    _",
        "| |_| | ___  _ __ __  ___  __  ____  _  _ |  \\  | |",
        "|  _  |/ _ \\| '  '  |/ -_)| _\\/__ /_| || || - \\ | |",
        "|_| |_|\\___/|_||_||_|\\___||_._|/___/\\_,  ||_||_||_|",
        "                                    |___/"
    ]

    const size = useWindowSize()

    const changebleSimbold = "/\\*#%&-=~${}[]HOMEAZYAI!^"

    const logoCoordX = size.width / 2 - logoContent[2].length * 5
    const logoCoordY = size.height / 2 - 5 * 20

    const [sentences] = React.useState<any>([])


    const gridApi = useSpringRef()

    const gridSpring = useTrail(LINES_NUMBER, {
        ref: gridApi,
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: size.width,
            y: size.height
        }
    })

    const logoApi = useSpringRef()
    const gridLogo = useTrail(5, {
        ref: logoApi,
        from: {
            x: logoCoordX,
            y: size.height  / 2 - 5 * 40
        },
        to: {
            x: size.width / 2 - logoContent[2].length * 5.5,
            y: size.height  / 2 - 5 * 40
        }
    })

    let maxSentenceCount: any = size.height / 16;
    let maxSentenceLength: any = size.width / 9;

    const maxSpeed = 0.4;
    const minSpeed = 0.1;

    const screenRatio = size.width / size.height;

    React.useEffect(() => {
        let chars: any = []
        let showRow: string[] = []

        const constrain = (e: any, t: any, r: any) => {
            return Math.max(Math.min(e, r), t)
        }
        const speedFactor = (e: any, t: any, r: any, n: any, i: any, a?: any) => {
            var s = (e - t) / (r - t) * (i - n) + n;

            return (e - t) / (r - t) * (i - n) + n
        }

        const generateSentence = () => {
            let sentence = "/imagine ";
            let numWords = Math.floor(Math.random() * 20) + 5;
            for (let i = 0; i < numWords; i++) {
                let wordIndex = Math.floor(Math.random() * words.length);
                sentence += words[wordIndex] + " ";
            }
            return sentence;
        }

        function setup() {
            let sentencesCountSoFar = sentences.length;
            for (let i = 0; i < maxSentenceCount - sentencesCountSoFar; i++) {
                sentences.push(generateSentence());
            }

            for (let y = 0; y < sentences.length; y++) {
                let sentence = sentences[y];
                sentence = sentence.slice(0, maxSentenceLength);
                sentences[y] = sentence;
            }

            for (let y = 0; y < maxSentenceCount; y++) {
                const elem = document.getElementById(`text-${y}`);
                let row = [];
                let words = " ";

                for (let x = 0; x < maxSentenceLength; x++) {
                    row.push({
                        character: sentences[y][x] || " ",
                        x: x,
                        y: y,
                    });
                    words += sentences[y][x] || " "
                }
                chars.push(row);
                showRow.push(words)

                if (elem) {
                    elem.innerHTML = words;
                }
            }
        }

        setup()

        const draw = () => {
            let displayChars: any = [];
            for (let y = 0; y < maxSentenceCount; y++) {
                let row = [];
                for (let x = 0; x < maxSentenceLength; x++) {
                    row.push(" ");
                }
                displayChars.push(row);
            }



            let centerX = maxSentenceLength / 2;
            let centerY = maxSentenceCount / 2;

            for (let y = 0; y < chars.length; y++) {
                let sentence = chars[y];
                for (let x = 0; x < sentence.length; x++) {
                    let character = sentence[x];
                    let distanceX = character.x - centerX;
                    let distanceY = character.y - centerY;
                    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                    let angle = Math.atan2(distanceY, distanceX);

                    let newX, newY;

                    let stretchX = 1;
                    let stretchY = 1;

                    if (screenRatio > 1) {
                        stretchX = screenRatio;
                    } else if (screenRatio < 1) {
                        stretchY = 1 / screenRatio;
                    }

                    let _speedFactor = speedFactor(
                        distance,
                        0,
                        Math.max(maxSentenceLength, maxSentenceCount) / 2,
                        maxSpeed,
                        minSpeed
                    )

                    newX = centerX + Math.cos(angle - 0.05 * _speedFactor * stretchX) * distance;
                    newY = centerY + Math.sin(angle - 0.05 * _speedFactor * stretchY) * distance;

                    if (
                        Math.round(newX) >= 0 &&
                        Math.round(newX) < maxSentenceLength &&
                        Math.round(newY) >= 0 &&
                        Math.round(newY) < maxSentenceCount
                    ) {
                        displayChars[Math.round(newY)][Math.round(newX)] = character.character
                    }

                    chars[y][x] = {
                        character: character.character,
                        x: newX,
                        y: newY,
                    }

                }
            }

            for (let y = 0; y < displayChars.length; y++) {
                const elem = document.getElementById(`text-${y}`);
                let sentence = displayChars[y];

                if (elem) {
                    let row = " "
                    for (let x = 0; x < sentence.length; x++) {
                        row += sentence[x]
                    }
                    elem.innerHTML = row;
                }
            }
        }

        draw()

        const interval = setInterval(() => {
            draw()
        }, 100);

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxSentenceCount, maxSentenceLength])

    React.useEffect(() => {
        const ITERATIONS = 15
        const opacity: any = 1 / ITERATIONS

        const timeout = (i: any) => {
            setTimeout(function () {
                const changedOne = changebleSimbold.charAt(Math.floor(Math.random() * changebleSimbold.length))
                const changedTwo = changebleSimbold.charAt(Math.floor(Math.random() * changebleSimbold.length))

                for (let y = 0; y < logoContent.length; y++) {
                    const elem = document.getElementById(`logo-${y}`);
                    let row = logoContent[y]
                    if (i < ITERATIONS - 1) {
                        row = logoContent[y].replaceAll(/[_\-\.'\\/*\|,\)\(]/g, Math.round(Math.random()) ? changedOne : changedTwo)
                    }
                    if (elem) {
                        elem.innerHTML = row
                        elem.style.opacity = (opacity * i).toString()
                    }
                }
            }, 50 * i);
        }

        for (let i = 0; i < ITERATIONS; i++) {
            timeout(i)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <svg className="bannerSVG" viewBox={`0 0 ${size.width} ${size.height}`} style={{
                background: "#09073a", display: "block",
                verticalAlign: "middle"
            }}>
                {gridSpring.map(({ x, y }, index) => {
                    return (
                        <>
                            <animated.text
                                id={`text-${index}`}
                                x={0}
                                y={index * 20 + OFFSET}
                                fill="#7d9ddf"
                                style={{
                                    fontSize: "17px", fontFamily: "monospace", dominantBaseline: "hanging", whiteSpace: "pre", transition: "0.7s"
                                }}
                            ></animated.text>
                        </>
                    )
                })}
                {gridLogo.map(({ x, y }, index) => {
                    return (
                        <>
                            <animated.rect
                                className={styles.logoBackground}
                                x={x}
                                y={index * 20 + logoCoordY + 5}
                                width='510px'
                                height='25px'
                                fill="#09073a"
                            ></animated.rect>
                        </>
                    )
                })}
                {gridLogo.map(({ x, y }, index) => {
                    return (
                        <>
                            <animated.text
                                className={styles.logo}
                                id={`logo-${index}`}
                                x={x}
                                y={index * 20 + logoCoordY + 5}
                                fill="white"
                                fontWeight="bold"
                                style={{
                                    fontSize: "20px", fontFamily: "monospace", dominantBaseline: "hanging", whiteSpace: "pre",
                                    backgroundColor: "rgba(9,7,58,.95)", letterSpacing: "-1px", overflow: "hidden", overflowClipMargin: "content-box",
                                }}
                            ></animated.text>
                        </>
                    )
                })}


            </svg>
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

export default BackgroundSVGEffect