$.ajax('https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            let justadvice = JSON.parse(APIResponse);
            console.log(justadvice);

            // let 

            // let madvice = document.getElementById("advice");
            // madvice.innerHTML = justadvice.slip.advice;

        }
    });