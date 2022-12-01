export const samplePlaces = shuffleArray(
    [
        {
            "name": "laguna",
            "thumbnail": "https://res.klook.com/image/upload/Mobile/City/hfxllzo0t8fxm9bcyb2l.jpg"
        },
        {
            "name": "manila",
            "thumbnail": "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Manila1-1125x624_biy6ej.png"
        },
        {
            "name": "bulacan",
            "thumbnail": "https://www.lamudi.com.ph/journal/wp-content/uploads/2018/06/Barasoain-Church.-Photo-by-IJVelas-via-Wikimedia-Commons.jpg"
        },
        {
            "name": "batangas",
            "thumbnail": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d7/ee/12/img-20170212-223321-557.jpg?w=700&h=500&s=1"
        },
        {
            "name": "puerto princesa",
            "thumbnail": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e7/b0/ea/photo0jpg.jpg?w=700&h=500&s=1"
        },
        {
            "name": "cebu",
            "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cebu_City_%28Aerial%29.jpg"
        },
        {
            "name": "baguio",
            "thumbnail": "https://miro.medium.com/max/1000/1*acl_kd5JJbgpWg4iRTHgtQ.png"
        },
    ]
);

export const sampleModerators = shuffleArray(
    [
        "Jam Villarosa",
        "Angel Macatuhay",
        "Novem Lanaban",
        "Jose Gayares_III",
        "JR Gasidan",
        "Mark Siazon"
    ]
)

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    console.log(array);
    return array;
}