const nameList = [
    "AjeetKumar",
    "EshaGupta",
    "Glory",
    "BhushanKumar",
    "GulshanKumar",
    "RafikKhan",
    "AdityaManshi",
    "Ashishsinghvolg",
    "Pawankumar",
    "ZaherishSayyed",
    "KanishkSingh",
    "Loknathkrishnadas",
    "YoYoHoneySingh",
    "KabirSing",
    "VivekKumarSingh",
    "Abhishekkumar",
    "Apoorvamishra",
    "Mahroseashique",
    "Ayushdube",
    "Saroj__Vlog",
    "SkTarek",
    "KabirSing-c7d",
    "Sujan",
    "RohanbabuRohanbabu",
    "Turk_official_04",
    "YunusKhan",
    "Fowadhossain",
    "Ankit-8111",
    "AashishKumar",
    "Bipinmishra4813",
    "Optionsharma4442",
    "Mission.trader",
    "AravindKumargoswami",
    "Glory12-l8h",
    "Anshumishra28",
    "Anantsangam7073",
    "Aacharya_Nishindra_1176",
    "Solutionpoint-p4i",
    "SatsKumar",
    "Taikamchi8815",
    "Vishnu_patel_alone",
    "Vicky_mera_naam",
    "VishalRaj-x6d",
    "Shopnonilroy5368",
    "Santachemjong",
    "Sajalpanja6751",
    "Ssallu01",
    "AdityaSingh-dp6zo"
]

export const generaterandomName = () => {
    return finalName = nameList[Math.floor(Math.random() * nameList.length)];
};

export const genarateRandomChats = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
