function loadProject(projectNumber) {
    if (projectNumber === 1) {
        //فال حافظ
        let projectFile1 = './One/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile1}" style="width:100%; height:500px;"></iframe>`;
    }

    else if (projectNumber === 2) {
        //اعتبار سنجی
        let projectFile2 = './Two/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile2}" style="width:100%; height:500px;"></iframe>`;
    }

    else if (projectNumber === 3) {
        //تبدیل ارز
        let projectFile3 = './Three/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile3}" style="width:100%; height:500px;"></iframe>`;
    }

    else if (projectNumber === 4) {
        //امتحان
        let projectFile4 = './Four/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile4}" style="width:100%; height:500px;"></iframe>`;
    }

    else if (projectNumber === 5) {
        //قیمت خودرو
        let projectFile5 = './Five/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile5}" style="width:100%; height:500px;"></iframe>`;
    }

    else if (projectNumber === 6) {
        //اوقات نماز
        let projectFile6 = './Six/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile6}" style="width:100%; height:500px;"></iframe>`;
    }

    else if (projectNumber === 7) {
        //شبکه ی اجتماعی
        let projectFile7 = './Seven/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile7}" style="width:100%; height:500px;"></iframe>`;
    }
    
    else {
        // وام بانکی
        let projectFile = './Eight/index.html';
        document.getElementById('content').innerHTML = `<iframe src="${projectFile}" style="width:100%; height:500px;"></iframe>`;
    }
}
