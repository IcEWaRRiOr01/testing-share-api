var shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', function () {
    // Проверка поддержки navigator.share
    if (navigator.share) {
        alert("Congrats! Your browser supports Web Share API")

        // navigator.share принимает объект с URL, title или text
        navigator.share({
            title: "Bits and pieces: Web Share API article",
            text: "Web Share API feature is awesome. You must check it",
            url: window.location.href
        })
        .then(function () {
            alert("Shareing successful")
        })
        .catch(function () {
            alert("Shareing failed")
        })
    } else {
        alert("Sorry! Your browser does not support Web Share API")
    }
})
