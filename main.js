Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality : 90,
    constraints : {facingMode : 'environment'}
});

camera = document.getElementById('camera');
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('Ml5 version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('Model loaded.');
}

function check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
    }
}
