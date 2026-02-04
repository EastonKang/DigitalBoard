

document.addEventListener("DOMContentLoaded", () => {
    const alert_0by0 = document.getElementById('alert_0by0');
    const alert_0by1 = document.getElementById('alert_0by1');
    const alert_0by2 = document.getElementById('alert_0by2');
    const alert_0by3 = document.getElementById('alert_0by3');
    const alert_1by0 = document.getElementById('alert_1by0');
    const alert_1by1 = document.getElementById('alert_1by1');
    const alert_1by2 = document.getElementById('alert_1by2');
    const alert_1by3 = document.getElementById('alert_1by3');

    const ad_video = document.getElementById('ad_video')
    const ad_img = document.getElementById('advertising_img')

    let ad_video_resource = "https://www.youtube.com/embed/AgKKXag9mzs"
    let ad_video_option = "?autoplay=1&mute=1&loop=1&playlist=AgKKXag9mzs&vq=hd720"
    let ad_img_resource = "./white_logo.png"
    

    let alertList = [alert_0by0, alert_0by1, alert_0by2, alert_0by3, alert_1by0, alert_1by1, alert_1by2, alert_1by3]
    // let alertImage = ["./testImage.svg", "./testImage.jpg", "./testImage.svg", "./testImage.jpg", "./testImage.svg", "./testImage.jpg", "./testImage.svg", "./testImage.jpg"]
    let alertImage = ["./testImage.jpg", "./images/002.png", "./images/003.png", "./images/004.png", "./images/005.png", "./images/006.png", "./images/007.png", "./testPDF.svg" ]

    for(var i=0;i<alertList.length;i++) {
        alertList[i].style.backgroundImage = `url(${alertImage[i]})`
        alertList[i].style.backgroundRepeat = "no-repeat"
        alertList[i].style.backgroundPosition = "center"
        alertList[i].style.backgroundSize = "contain"
    }


    ad_img.style.backgroundImage = `url(${ad_img_resource})`
    ad_img.style.backgroundRepeat = "no-repeat"
    ad_img.style.backgroundPosition = "center"
    ad_img.style.backgroundSize = 'contain'

    ad_video.src=`${ad_video_resource}${ad_video_option}`
})