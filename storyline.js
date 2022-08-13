var storyContent = {
    "inkVersion": 19,
    "root": [
        [{
            "#": "theme: dark"
        }, "^<img class=\"cover\"/>", "\n",
            "\n", "^The man of ages who sparked a new revolution in the Swaminarayan sect.", {
            "#": "CLASS: subtitle"
        }, "\n", "ev", "str", "^<span class=\"play\">Start</span>", "/str", "/ev", {
            "*": "0.c-0",
            "flg": 20
        }, {
            "c-0": ["\n", {
                "->": "Intro.Start"
            }, {
                    "->": "0.g-0"
                }, {
                    "#f": 5
                }],
            "g-0": ["done", null]
        }], "done", {
            "Intro": [{
                "->": ".^.Start"
            }, {
                "Start": [{
                    "->": "Housing.Start"
                }, null]
            }],
            "Housing": [{
                "->": ".^.Start"
            }, {
                "Start": [
                    ["^Sadhuta ni Murti", {
                        "#": "CLASS: date"
                    }, "\n", "^<i>Siddhart ma Samadhan nahi ne niyam dharamma chutchat nahi</i> <b> - Gurudev's Moto</b>",  "\n", "^Jivan pariyant danek nanam nani niyam palya ane sant haribhakt samaj ne palaya", "\n", "^Till the age of 75 gurudev graced everyone with 5+ hours of labh everyday.", "\n", "ev", "str", "^Siddhat Vadi Sankalp Swarop", "/str", "/ev", {
                            "*": ".^.c-0",
                        "flg": 4,
                        }, "ev", "str", "^Founder of SMVS", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 4
                        }, "ev", "str", "^Vachanamrut", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 4
                        }, "ev", "str", "^Hospital", "/str", "/ev", {
                            "*": ".^.c-3",
                            "flg": 4
                        }, {
                            "c-0": ["^ ", {
                                "->": "Housing.Siddhat Vadi Sankalp Swarop"
                            }, "\n", null],
                            "c-1": ["^ ", {
                                "->": "Housing.Founder of SMVS"
                            }, "\n", null],
                            "c-2": ["^ ", {
                                "->": "Housing.Vachanamrut"
                            }, "\n", null],
                            "c-3": ["^ ", {
                                "->": "Housing.Hospital"
                            }, "\n", null]
                        
                        }], null
                ],
                "Siddhat Vadi Sankalp Swarop": [
                    ["^Siddhat Vadi Sankalp Swarop", {
                        "#": "CLASS: date"
                    }, "\n", "^Maha samarth Jivanpran Abjibapashree sankalpe padharya. \" Adha hamara, adha tumara\" ", "\n", "^Never gave into the words or pressure of anyone. Always focused on Maharaj and his rajipo.", "\n", "^He has always followed the creed of \" Sarvopari Swaminarayan Bhagwanini upasana dhrad karavi, ane anadimuktni sthiti pamadvi. \" ", "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
                            "*": ".^.c-0",
                        "flg": 4,
                        }, "ev", "str", "^Founder of SMVS", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 4
                        }, "ev", "str", "^Vachanamrut", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 4
                        }, "ev", "str", "^Hospital", "/str", "/ev", {
                            "*": ".^.c-3",
                            "flg": 4
                        }, {
                            "c-0": ["^ ", {
                                "->": "Housing.Sadhuta ni Murti"
                            }, "\n", null],
                            "c-1": ["^ ", {
                                "->": "Housing.Founder of SMVS"
                            }, "\n", null],
                            "c-2": ["^ ", {
                                "->": "Housing.Vachanamrut"
                            }, "\n", null],
                            "c-3": ["^ ", {
                                "->": "Housing.Hospital"
                            }, "\n", null]
                        
                        }], null
                ],
                "Founder of SMVS": [
                    ["^Founder of SMVS", {
                        "#": "CLASS: date"
                    }, "\n", "^Shunya mathi sarjan karyu", "\n", "^Apaar kasht shaya ek Maharaj ni sarvopari nistha samjava ne anant ne Mahrajni olkhan karavi, atyantik kalyan no marg chalu karyo.", "\n" ,"^Chokhi Sarvopari Swaminarayan Bhagwani nistha saman Maharajno sanklap ke amara mandiroma amara swaroopaj hase sakar kari chokka mandiro nu sthapan karyu.","\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
                            "*": ".^.c-0",
                        "flg": 4,
                        }, "ev", "str", "^Founder of SMVS", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 4
                        }, "ev", "str", "^Vachanamrut", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 4
                        }, "ev", "str", "^Hospital", "/str", "/ev", {
                            "*": ".^.c-3",
                            "flg": 4
                        }, {
                            "c-0": ["^ ", {
                                "->": "Housing.Sadhuta ni Murti"
                            }, "\n", null],
                            "c-1": ["^ ", {
                                "->": "Housing.Founder of SMVS"
                            }, "\n", null],
                            "c-2": ["^ ", {
                                "->": "Housing.Vachanamrut"
                            }, "\n", null],
                            "c-3": ["^ ", {
                                "->": "Housing.Hospital"
                            }, "\n", null]
                        
                        }], null
                ],
                "Vachanamrut": [
                    ["^Vachanamrut", {
                        "#": "CLASS: date"
                    }, "\n", "^Vachramrut na acharya", "\n", "^Ek Ek shabda saral karine Maharajni swamukh vani evo Vachanamrut no arth chuto padine samjayo. ", "\n", "^He always says from all of the scriptures, Vachanamrut is the best and all scriptures are in the Vachanamrut.", "\n", "^When explaining the Vachanamrut, it always feels like Maharaj Himself is explaining His own words.", "\n", "ev", "str", "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
                            "*": ".^.c-0",
                        "flg": 4,
                        }, "ev", "str", "^Founder of SMVS", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 4
                        }, "ev", "str", "^Vachanamrut", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 4
                        }, "ev", "str", "^Hospital", "/str", "/ev", {
                            "*": ".^.c-3",
                            "flg": 4
                        }, {
                            "c-0": ["^ ", {
                                "->": "Housing.Sadhuta ni Murti"
                            }, "\n", null],
                            "c-1": ["^ ", {
                                "->": "Housing.Founder of SMVS"
                            }, "\n", null],
                            "c-2": ["^ ", {
                                "->": "Housing.Vachanamrut"
                            }, "\n", null],
                            "c-3": ["^ ", {
                                "->": "Housing.Hospital"
                            }, "\n", null]
                        
                        }], null
                ],
                "Hospital": [
                    ["^Hospital", {
                        "#": "CLASS: date"
                    }, "\n", "^Divyapurush always put education, health and humanity forward and demonstrated it with the Boy's Gurukul, Girl's Gurukul, and 3 educational institues in Ahmedabad and Gandhinagar.", "\n", "^Inaugarated a high-class hospital which provides all services at a low cost. Helped 450,000 in the first 6 months.", "\n", "^Bapji opened 'Shreeji Bapa Medical Center' in 1996 which helped over 150,000 people.", "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
                            "*": ".^.c-0",
                        "flg": 4,
                        }, "ev", "str", "^Founder of SMVS", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 4
                        }, "ev", "str", "^Vachanamrut", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 4
                        }, "ev", "str", "^Hospital", "/str", "/ev", {
                            "*": ".^.c-3",
                            "flg": 4
                        }, {
                            "c-0": ["^ ", {
                                "->": "Housing.Sadhuta ni Murti"
                            }, "\n", null],
                            "c-1": ["^ ", {
                                "->": "Housing.Founder of SMVS"
                            }, "\n", null],
                            "c-2": ["^ ", {
                                "->": "Housing.Vachanamrut"
                            }, "\n", null],
                            "c-3": ["^ ", {
                                "->": "Housing.Hospital"
                            }, "\n", null]
                        
                        }], null
                ],
            }
            ]
        }
    ]
}