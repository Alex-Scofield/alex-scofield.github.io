const HEIGHT = window.screen.height;
const WIDTH = window.screen.width;
const DAY_SIZE = HEIGHT/24 + "pt";

const links = [
    "https://drive.google.com/file/d/16axbTxQt2mhrwIM_0OMo7tVloLZRIXJ5/view",
    "https://drive.google.com/file/d/1baJfsFgP_yXSq0eAmQOyD1pcJp_0YQrU/view",
    "https://drive.google.com/file/d/1LoROBS6Twco1COfVfnI8S4OoNN2rW0C1/view",
    "https://drive.google.com/file/d/1zXcWQt9WXTpwwupTxufENZ4A4VYwwHQG/view",
    "https://drive.google.com/file/d/1UTmLtl0LamNv5PADZG_jSOk9zUKexrHm/view",
    "https://drive.google.com/file/d/1vDhWFYH_7GgWdtAnXss9oJgeDeCnl4zt/view",
    "https://drive.google.com/file/d/1lRa3hfmPYM8cfvwQ5hNPEPDaQ_lDKU0p/view",
    "https://drive.google.com/file/d/1AeQ74xDA0xW2u_hOhxlNwLP83aU6wuOc/view",
    "https://drive.google.com/file/d/1inhI4YW2rFIfkOuC46bjR-lwat6OEFCv/view",
    "https://drive.google.com/file/d/1vZnbfvAMKNGK9zXVLANN14-Kwpa8SINb/view",
    "https://drive.google.com/file/d/1O98ktqV0zr1JlhYHp7HyVOGyCgHan1u1/view",
    "https://drive.google.com/file/d/1UJlJb3M_RmniLBaN25iHYAbY61G1eqm7/view",
    "https://drive.google.com/file/d/12Zn71uj2sqfDalyom5nrm_rcP8hQ2S4x/view",
    "https://drive.google.com/file/d/1cxmAMwnteOfKfKS5GCaUWLJpNEX9h6I_/view",
    "https://drive.google.com/file/d/1-KgrpMzC3ifV1NNDkn1xDpGv3xHuUW-S/view",
    "https://drive.google.com/file/d/1r5hzP1LR0xRjAC74hZpw88hvShmVwtC0/view",
    "https://drive.google.com/file/d/1rIE84hKsBdt_srAAG5QObuHHGbanROQ_/view",
    "https://drive.google.com/file/d/1QlExiwiGegBk1p6eNmze23ERJKiHSB0L/view",
    "https://drive.google.com/file/d/1m3Z84r7Wlc-PyR3KD6f2EiNPyc3WZxB9/view",
    "https://drive.google.com/drive/folders/1TkMDsEXm7L07_UAVC-54Kc-nrPXESVC0",
    "https://drive.google.com/file/d/1qXF_vX9hR9b_U8C5t-9SIOQ1168w8yV2/view",
    "https://drive.google.com/file/d/13RR-NOMd746VPg1dNkLxhi4KguP4xVrx/view",
    "https://drive.google.com/file/d/1CwmL2zpE7hwqnELQRTFQ7RbqlrT27UEo/view",
    "https://drive.google.com/drive/folders/1TkMDsEXm7L07_UAVC-54Kc-nrPXESVC0"
]


function createDivs() {
    const days = []
    for(i=1; i<25; i++) {
        let day = document.createElement("div");
        day.id = i;
        day.classList.add("day");
        day.style.width = DAY_SIZE;
        day.style.height = DAY_SIZE;
        day.innerText = i;
        
        day.style.top = HEIGHT*((i-1)/24)+HEIGHT/7 + "pt";
        day.style.right = WIDTH*((i-1)%6/24) + "pt";
        days.push(day);
        document.body.appendChild(day);
    }
    return days;
}


function openDay(day) {
    const date = new Date().getDate();
    if(date >= day.id) {
        window.open(links[day.id - 1]);
    }
    else {
        alert("This door is not open yet!");
    }
}

const days = createDivs();
days.map((day) => day.addEventListener("click", () => openDay(day)));
