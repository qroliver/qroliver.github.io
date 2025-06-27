const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

if (isMobile) {
    const container = document.getElementById('pdf-container');
    container.innerHTML = `
    <p>PDF is not supported on your device.
    <a href="/posts/img/lzt_net_zero_plan_img/lzt%20net-zero.pdf" download>Click here to download the PDF</a></p>
    `;
}