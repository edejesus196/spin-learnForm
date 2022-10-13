const signature = (canvasId, clearId) => {
    const parent = document.getElementById(canvasId)
    const parentSignaturePad = new SignaturePad(parent, {
        penColor: 'rgb(0, 0, 0)'
    });

    const parentClear = document.getElementById(clearId);

    parentClear.addEventListener('click', function (even) {
        parentSignaturePad.clear();
    })
}


const submit = 

signature("parentSignaturePad", "parentClear")
signature("teacherSignaturePad", "teacherClear")


