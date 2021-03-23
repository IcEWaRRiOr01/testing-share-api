var shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', function () {
    // Проверка поддержки navigator.share
    if (navigator.share) {
        console.log("Congrats! Your browser supports Web Share API")

        // navigator.share принимает объект с URL, title или text
        navigator.share({
            title: "Bits and pieces: Web Share API article",
            text: "Web Share API feature is awesome. You must check it",
            url: window.location.href
        })
        .then(function () {
            console.log("Shareing successful")
        })
        .catch(function () {
            console.log("Shareing failed")
        })
    } else {
        console.log("Sorry! Your browser does not support Web Share API")
    }
})