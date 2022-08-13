var storyContent = {
    "inkVersion": 19,
    "root": [
        [{
            "#": "theme: dark"
        }, "^<img class=\"cover bapa\"/>", "\n",
            "\n", "^The one who sparked a new revolution in the Swaminarayan Sampraday", {
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
                        "#": "CLASS: date",
                    },  "^<img src ='img/paagh.png' class ='maharaj topic' >",
                        "\n", "^<i>Siddhant ma Samadhan nahi ane niyam dharamma chhutchhat nahi</i> <b> - Gurudev's Moto</b>",
                        "\n", "^Jivan pariyant darek nanama nani niyam palya ane sant haribhakt samaj ne palaya",
                        "\n", "^Till the age of 75 Gurudev graced everyone with 5+ hours of labh everyday",
                        
                        "\n", "^<br><hr><br><i>સિદ્ધાર્થ માં સમાધાન નહીં ને નિયમ ધરમ માં છૂટ નહીં</i> - <b> ગુરુદેવનું સૂત્ર </b>",
                        "\n", "^જીવન પર્યંત દાનેક નાનામાં નાની નિયમની પાળીને સંત હરિભક્ત સમાજ ને પડાવી",
                        "\n", "^75 વર્ષની ઉંમર સુધી ગુરુદેવ દરરોજ 5+ કલાકનો લાભ આપીને દરેકને આશીર્વાદ આપતા હતા.",
                        "\n", "^<br><hr><br><span class=subtitle>  Bapji's Paagh </span> <br><video class ='maharaj topic' controls> <source src='img/paagh_vid.mov' type='video/mp4'> </video>",
                        "\n", "ev", "str", "^Siddhat Vadi Sankalp Swarop", "/str", "/ev", {
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
                    ["^Sankalp Swarop", {
                        "#": "CLASS: date",
                    }, "^<img src ='img/maharaj.png' class ='maharaj topic' >",
                        "\n", "^Maha samarth Jivanpran Abjibapashree sankalpe padharya. \"Adha hamara, adha tumara\" ",
                        "\n", "^Never gave into the words or pressure of anyone. Always focused on Maharaj and their rajipo",
                        "\n", "^He has always followed the creed of \"Sarvopari Swaminarayan Bhagwanini upasana dhrad karavi, ane anadimuktni sthiti pamadvi\" ",

                        "\n", "^<br><hr><br>મહાસમર્થ જીવનપ્રાણ અબજીબાપાશ્રીના સંકલ્પે પધાર્યા. \"આધા તુમારા, આધા હમારા\" ",
                        "\n", "^ક્યારેય કોઈની વાત કે દબાણમાં ન આવ્યા અને હંમેશા મહારાજ અને તેમના રાજીપો પર ધ્યાન કેન્દ્રિત કર્યું.",
                        "\n", "^તેમણે હંમેશા \"સર્વોપરી સ્વામિનારાયણ ભગવાનની ​​ઉપાસના ધ્રડ કરાવી, અને અનાદિમુક્તની સ્થિતી પમાડી.\" ",

                        "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
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
                    }, "^<img src ='img/img2.png' class ='maharaj topic' >",
                        "\n", "^Shunya mathi sarjan karyu",
                        "\n", "^Apaar kasht shaya ek Maharaj ni sarvopari nistha samjava ane anant ne Mahrajni olkhan karavi, atyantik kalyan no marg sharu karyo",
                        "\n", "^Chokhi Sarvopari Swaminarayan Bhagwani nistha saman Maharajno sanklap ke amara mandiroma amara swaroopaj hase tevu sakar kari chokka mandiro nu sthapan karyu",
                        "\n", "^<br><hr><br>અપાર કષ્ટ સહ્યા અને એક મહારાજની સર્વોપરી નિષ્ઠા સમજાવી ને અનંત ને મહારાજની ઓળખાણ કરાવી, અત્યંતિક કલ્યાણનો માર્ગ ચાલુ કર્યો",
                        "\n", "^ચોખ્ખી સર્વોપરી સ્વામિનારાયણ ભગવાનની નિષ્ઠા સાથેનો મહારાજનો સંકલ્પ સાથે અમારા મંદિરોમા અમારા જ સ્વરૂપ હસે તે સાકર કરી ચોખ્ખી મંદિરો નું સ્થપણ કર્યું",
                        "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
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
                    }, "^<img src ='img/img3.png' class ='maharaj topic' >",
                        "\n", "^Vachramrut na acharya",
                        "\n", "^Ek Ek shabda saral karine Maharajni swamukh vani evo Vachanamrut no arth chuto padine samjayo. ",
                        "\n", "^He always says from all of the scriptures, Vachanamrut is the best and all scriptures are in the Vachanamrut.",
                        "\n", "^When explaining the Vachanamrut, it always feels like Maharaj himself is explaining his own words.",
                        
                        "\n", "^<br><hr><br>એક શબ્દ છુટ્ટા કરીને મહારાજની સ્વમુખવાણી એવો વચનામૃત નો અર્થ છૂટો પડીને સમજાવ્યો.",
                        "\n", "^બધા શાસ્ત્રોમાંથી વચનામૃત શ્રેષ્ઠ છે.",
                        "\n", "^વચનામૃત સમજાવતી વખતે હંમેશા એવું લાગે છે કે મહારાજ પોતે જ પોતાની વાત સમજાવી રહ્યા છે.",

                        "\n", "ev", "str", "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
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
                    },  "^<img src ='img/img1.png' class ='maharaj topic' >",
                        "\n", "^Divyapurush always put education, health and humanity forward and demonstrated it with the Boy's Gurukul, Girl's Gurukul, and 3 educational institues in Ahmedabad and Gandhinagar.",
                        "\n", "^Inaugarated a high-class hospital which provides all services at a low cost. Helped 450,000 in the first 6 months.",
                        "\n", "^Bapji opened 'Shreeji Bapa Medical Center' in 1996 which helped over 150,000 people.",

                        "\n", "^<br><hr><br>દિવ્યપુરુષે હંમેશા શિક્ષણ, આરોગ્ય અને માનવતાને આગળ ધપાવ્યું. અમદાવાદ અને ગાંધીનગરમાં છોકરાઓનું ગુરુકુળ, છોકરીનું ગુરુકુળ અને 3 શૈક્ષણિક સંસ્થાઓ સાથે તેનું પ્રદર્શન કર્યું.",
                        "\n", "^ઓછી કિંમતે તમામ સેવાઓ પૂરી પાડતી ઉચ્ચ કક્ષાની હોસ્પિટલનું ઉદ્ઘાટન કર્યું. પ્રથમ 6 મહિનામાં 450,000 લોકોને ની મદદ કરી.",
                        "\n", "^બાપજીએ 1996 માં 'શ્રીજી બાપા મેડિકલ સેન્ટર' ખોલ્યું જેણે 150,000 થી વધુ લોકોને મદદ કરી.",

                        "\n", "ev", "str", "^Sadhuta ni Murti", "/str", "/ev", {
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