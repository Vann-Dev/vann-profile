import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import React, { ReactNode } from 'react';

interface BackgroundProps {
    enable: boolean;
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ enable, children }) => {
    const [image, setImage] = useState("");

    const pngs = useMemo(
        () => [
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187363-2669561.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187359-2669557.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187356-2669554.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187355-2669553.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187357-2669555.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187365-2669563.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187358-2669556.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187364-2669562.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187362-2669560.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187360-2669558.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187361-2669559.png",
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-3187354-2669552.png",
            // Among us with hat
            "https://cdn.iconscout.com/icon/free/png-512/free-among-us-5295899-4452688.png",
        ],
        []
    );

    useEffect(() => {
        function takeRandomPngs() {
            return pngs[Math.floor(Math.random() * pngs.length)];
        }

        setInterval(() => {
            setImage(takeRandomPngs())
        }, 10000)

        return () => {
            setImage(takeRandomPngs())
        }
    }, [pngs])

    const particlesInit = useCallback(async (engine: Engine) => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, []);

    return (
        <div className="">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    name: "Among Us",
                    particles: {
                        groups: {
                            z5000: {
                                number: {
                                    value: 70
                                },
                                zIndex: {
                                    value: 50
                                }
                            },
                            z7500: {
                                number: {
                                    value: 30
                                },
                                zIndex: {
                                    value: 75
                                }
                            },
                            z2500: {
                                number: {
                                    value: 50
                                },
                                zIndex: {
                                    value: 25
                                }
                            },
                            z1000: {
                                number: {
                                    value: 40
                                },
                                zIndex: {
                                    value: 10
                                }
                            }
                        },
                        number: {
                            value: 200
                        },
                        color: {
                            value: "#fff",
                            animation: {
                                enable: false,
                                speed: 20,
                                sync: true
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        opacity: {
                            value: 0.2
                        },
                        size: {
                            value: 3
                        },
                        move: {
                            angle: {
                                value: 10,
                                offset: 0
                            },
                            enable: true,
                            speed: 5,
                            direction: "right",
                            random: false,
                            straight: false
                        },
                        zIndex: {
                            value: 1,
                            opacityRate: 1
                        }
                    },
                    background: {
                        color: "#000000"
                    },
                    emitters: {
                        position: {
                            y: 55,
                            x: -5
                        },
                        rate: {
                            delay: 7,
                            quantity: 1
                        },
                        size: {
                            width: 0,
                            height: 0
                        },
                        particles: {
                            shape: {
                                type: "images",
                                options: {
                                    images: {
                                        src: enable ? image : "https://dummyimage.com/1x1/00000000.png",
                                        width: 500,
                                        height: 634
                                    }
                                }
                            },
                            size: {
                                value: 40
                            },
                            move: {
                                speed: 10,
                                outModes: {
                                    default: "none",
                                    right: "destroy"
                                },
                                straight: false
                            },
                            rotate: {
                                value: {
                                    min: 0,
                                    max: 360
                                },
                                animation: {
                                    enable: true,
                                    speed: 10,
                                    sync: true
                                }
                            }
                        }
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1
                    }
                }
                }
            />
            {children}
        </div>
    )
};

export default Background;