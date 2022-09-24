//Promise
document.querySelector("button").addEventListener("click", function () {
    let url1 = "https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg";
    let url2 = "https://images-assets.nasa.gov/image/PIA22312/PIA22312~orig.jpg";
 
    let promise1 = downloadImage(url1);         //запустили downloadImage, получили от нее промис 
    // на этом промисе с помощью метода then, установили обработчик который срабатывает , когда промис перейдет в состояниее fulfilled и rejected
    promise1.then(image => document.body.append(image), e => console.log(e.message)) 

    let promise2 = downloadImage(url2);
    promise2.then(image => document.body.append(image), e => console.log(e.message));
});

function downloadImage(url) { 
    let promise = new Promise(function (resolve, reject) {
        let image = new Image(500);
        image.src = url;

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function (e) {
            reject(new Error("Не удалось загрузить изображение " + this.src));
        }
    });
    
    return promise;
}