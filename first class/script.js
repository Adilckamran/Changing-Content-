document.getElementById('btn').addEventListener('click', function () {
    // Get the iframe element
    const iframe = document.getElementById('contentIframe');

    // Access the content of the iframe
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Get the text inside the <div> tag
    const divText = iframeDocument.querySelector('div').innerText;

    // Show the text in an alert
    document.write(divText);
});