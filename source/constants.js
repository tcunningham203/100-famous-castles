// catsle region data 
// used in map page
const castleRegions = {
    Hokkaido: [
        {
            long: "Hokkaido",
            short: "HK",
            background: "#2c3e44",
            fontsize: "1.5rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-8 ",
            map_pic: "/images/maps/japanmap2.png",
            castles: [
                {
                    id: 1,
                    number: "001",
                    name: "Nemuro Chashi Site"
                },
                {
                    id: 2,
                    number: "002",
                    name: "Goryokaku Fort"
                },
                {
                    id: 3,
                    number: "003",
                    name: "Matsumae Castle"
                },
            ],
        },   
    ],
    Tohoku: [
        {
            long: "Tohoku",
            short: "TH",
            background: "#1d283b",
            fontsize: "1.2rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-8",
            map_pic: "/images/maps/japanmap3.png",
            castles: [{
                id: 4,
                number: "004",
                name: "Hirosaki Castle"
            },
            {
                id: 5,
                number: "005",
                name: "Ne Castle"
            },
            {
                id: 6,
                number: "006",
                name: "Morioka Castle"
            },
            {
                id: 7,
                number: "007",
                name: "Taga Castle"
            },
            {
                id: 8,
                number: "008",
                name: "Sendai Castle"
            },
            {
                id: 9,
                number: "009",
                name: "Kubota Castle"
            },
            {
                id: 10,
                number: "010",
                name: "Yamagata Castle"
            },
            {
                id: 11,
                number: "011",
                name: "Nihonmatsu Castle"
            },
            {
                id: 12,
                number: "012",
                name: "Aizuwakamatsu Castle"
            },
            {
                id: 13,
                number: "013",
                name: "Shirakawa Castle"
            }],
        },   
    ],
    Kanto: [
        {
            long: "Kanto",
            short: "KT",
            background: "#382844",
            fontsize: "1.0rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-5",
            map_pic: "/images/maps/japanmap4.png",
            castles: [{
                id: 14,
                number: "014",
                name: "Mito Castle"
            },
            {
                id: 15,
                number: "015",
                name: "Ashikagashi Yakata"
            },
            {
                id: 16,
                number: "016",
                name: "Minowa Castle"
            },
            {
                id: 17,
                number: "017",
                name: "Kanayama Castle"
            },
            {
                id: 18,
                number: "018",
                name: "Hachigata Castle"
            },
            {
                id: 19,
                number: "019",
                name: "Kawagoe Castle"
            },
            {
                id: 20,
                number: "020",
                name: "Sakura Castle"
            },
            {
                id: 21,
                number: "021",
                name: "Edo Castle"
            },
            {
                id: 22,
                number: "022",
                name: "Hachioji Castle"
            },
            {
                id: 23,
                number: "023",
                name: "Odawara Castle"
            },
            {
                id: 24,
                number: "024",
                name: "Tsutsujigasaki Palace"
            },
            {
                id: 25,
                number: "025",
                name: "Kofu Castle"
            }],
        },   
    ],
    Chubu: [
        {
            long: "Chubu",
            short: "CB",
            background: "#3f121c",
            fontsize: "1.0rem",
            li_class: "btn btn-outline-light text-start mt-2 col-md-5",
            map_pic: "/images/maps/japanmap5.png",
            castles: [{
                id: 26,
                number: "026",
                name: "Matsushiro Castle"
            },
            {
                id: 27,
                number: "027",
                name: "Ueda Castle"
            },
            {
                id: 28,
                number: "028",
                name: "Komoro Castle"
            },
            {
                id: 29,
                number: "029",
                name: "Matsumoto Castle"
            },
            {
                id: 30,
                number: "030",
                name: "Takato Castle"
            },
            {
                id: 31,
                number: "031",
                name: "Shibata Castle"
            },
            {
                id: 32,
                number: "032",
                name: "Kasugayama Castle"
            },
            {
                id: 33,
                number: "033",
                name: "Takaoka Castle"
            },
            {
                id: 34,
                number: "034",
                name: "Nanao Castle"
            },
            {
                id: 35,
                number: "035",
                name: "Kanazawa Castle"
            },
            {
                id: 36,
                number: "036",
                name: "Maruoka Castle"
            },
            {
                id: 37,
                number: "037",
                name: "Ichijodani Castle"
            },
            {
                id: 38,
                number: "038",
                name: "Iwamura Castle"
            },
            {
                id: 39,
                number: "039",
                name: "Gifu Castle"
            },
            {
                id: 40,
                number: "040",
                name: "Yamanaka Castle"
            },
            {
                id: 41,
                number: "041",
                name: "Sunpu Castle"
            },
            {
                id: 42,
                number: "042",
                name: "Kakegawa Castle"
            },
            {
                id: 43,
                number: "043",
                name: "Inuyama Castle"
            },
            {
                id: 44,
                number: "044",
                name: "Nagoya Castle"
            },
            {
                id: 45,
                number: "045",
                name: "Okazaki Castle"
            },
            {
                id: 46,
                number: "046",
                name: "Nagashino Castle"
            },
            {
                id: 47,
                number: "047",
                name: "Iga Ueno Castle"
            },
            {
                id: 48,
                number: "048",
                name: "Matsusaka Castle"
            }],
        },   
    ],
    Kansai: [
        {
            long: "Kansai",
            short: "KS",
            background: "#5e4c32",
            fontsize: "1.0rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-5",
            map_pic: "/images/maps/japanmap6.png",
            castles: [{
                id: 49,
                number: "049",
                name: "Odani Castle"
            },
            {
                id: 50,
                number: "050",
                name: "Hikone Castle"
            },
            {
                id: 51,
                number: "051",
                name: "Azuchi Castle"
            },
            {
                id: 52,
                number: "052",
                name: "Kannonji Castle"
            },
            {
                id: 53,
                number: "053",
                name: "Nijo Castle"
            },
            {
                id: 54,
                number: "054",
                name: "Osaka Castle"
            },
            {
                id: 55,
                number: "055",
                name: "Chihaya Castle"
            },
            {
                id: 56,
                number: "056",
                name: "Takeda Castle"
            },
            {
                id: 57,
                number: "057",
                name: "Sasayama Castle"
            },
            {
                id: 58,
                number: "058",
                name: "Akashi Castle"
            },
            {
                id: 59,
                number: "059",
                name: "Himeji Castle"
            },
            {
                id: 60,
                number: "060",
                name: "Ako Castle"
            },
            {
                id: 61,
                number: "061",
                name: "Takatori Castle"
            },
            {
                id: 62,
                number: "062",
                name: "Wakayama Castle"
            }],
        },  
    ],
    Chugoku: [
        {
            long: "Chugoku",
            short: "CG",
            background: "#302f1a",
            fontsize: "1.0rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-5",
            map_pic: "/images/maps/japanmap7.png",
            castles: [{
                id: 63,
                number: "063",
                name: "Tottori Castle"
            },
            {
                id: 64,
                number: "064",
                name: "Matsue Castle"
            },
            {
                id: 65,
                number: "065",
                name: "Gassan Toda Castle"
            },
            {
                id: 66,
                number: "066",
                name: "Tsuwano Castle"
            },
            {
                id: 67,
                number: "067",
                name: "Tsuyama Castle"
            },
            {
                id: 68,
                number: "068",
                name: "Bitchu Matsuyama Castle"
            },
            {
                id: 69,
                number: "069",
                name: "Kinojo Castle"
            },
            {
                id: 70,
                number: "070",
                name: "Okayama Castle"
            },
            {
                id: 71,
                number: "071",
                name: "Fukuyama Castle"
            },
            {
                id: 72,
                number: "072",
                name: "Koriyama Castle"
            },
            {
                id: 73,
                number: "073",
                name: "Hiroshima Castle"
            },
            {
                id: 74,
                number: "074",
                name: "Iwakuni Castle"
            },
            {
                id: 75,
                number: "075",
                name: "Hagi Castle"
            }],
        },  
    ],
    Shikoku: [
        {
            long: "Shikoku",
            short: "SK",
            background: "#0c2513",
            fontsize: "1.2rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-8",
            map_pic: "/images/maps/japanmap8.png",
            castles: [{
                id: 76,
                number: "076",
                name: "Tokushima Castle"
            },
            {
                id: 77,
                number: "077",
                name: "Takamatsu Castle"
            },
            {
                id: 78,
                number: "078",
                name: "Marugame Castle"
            },
            {
                id: 79,
                number: "079",
                name: "Imabari Castle"
            },
            {
                id: 80,
                number: "080",
                name: "Yuzuki Castle"
            },
            {
                id: 81,
                number: "081",
                name: "Matsuyama Castle"
            },
            {
                id: 82,
                number: "082",
                name: "Ozu Castle"
            },
            {
                id: 83,
                number: "083",
                name: "Uwajima Castle"
            },
            {
                id: 84,
                number: "084",
                name: "Kochi Castle"
            }],
        },  
    ],
    Kyushu: [
        {
            long: "Kyushu",
            short: "KY",
            background: "#3d4639",
            fontsize: "1.0rem",
            li_class: "btn btn-outline-light text-start mt-3 col-md-5",
            map_pic: "/images/maps/japanmap9.png",
            castles: [{
                id: 85,
                number: "085",
                name: "Fukuoka Castle"
            },
            {
                id: 86,
                number: "086",
                name: "Ono Castle"
            },
            {
                id: 87,
                number: "087",
                name: "Hizen Nagoya Castle"
            },
            {
                id: 88,
                number: "088",
                name: "Yoshinogari Site"
            },
            {
                id: 89,
                number: "089",
                name: "Saga Castle"
            },
            {
                id: 90,
                number: "090",
                name: "Hirado Castle"
            },
            {
                id: 91,
                number: "091",
                name: "Shimabara Castle"
            },
            {
                id: 92,
                number: "092",
                name: "Kumamoto Castle"
            },
            {
                id: 93,
                number: "093",
                name: "Hitoyoshi Castle"
            },
            {
                id: 94,
                number: "094",
                name: "Funai Castle"
            },
            {
                id: 95,
                number: "095",
                name: "Oka Castle"
            },
            {
                id: 96,
                number: "096",
                name: "Obi Castle"
            },
            {
                id: 97,
                number: "097",
                name: "Kagoshima Castle"
            },
            {
                id: 98,
                number: "098",
                name: "Nakijin Castle"
            },
            {
                id: 99,
                number: "099",
                name: "Nakagusuku Castle"
            },
            {
                id: 100,
                number: "100",
                name: "Shuri Castle"
            }],
        },
    ]
}

module.exports = castleRegions;