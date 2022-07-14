if (window.hasOwnProperty('flectra') && flectra && flectra.hasOwnProperty('debug')) {
    const body = document.getElementsByTagName('body')[0];
    if (window.location.href.includes('debug=assets')) {
        body.setAttribute('data-flectra-debug-mode', 'assets');
    } else if (window.location.href.includes('debug=1')) {
        body.setAttribute('data-flectra-debug-mode', '1');
    } else {
        body.setAttribute('data-flectra-debug-mode', '0');
    }
}
