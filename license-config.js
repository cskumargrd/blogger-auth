(function() {
    // 1. PREMIUM DOMAINS LIST
    var premiumDomains = [
        "cskumargrd.blogspot.com", // Aapka apna domain
        "client-site.com"
    ];

    var currentDomain = window.location.hostname;
    var footerId = "myFooterLink"; 
    var ownerLink = "https://chandrashekharkumartech.blogspot.com/"; // Aapki site
    var ownerName = "Chandra Shekhar Kumar"; 

    // 2. Premium vs Trial Logic
    var isPremium = premiumDomains.indexOf(currentDomain) > -1;
    var footer = document.getElementById(footerId);

    if (isPremium) {
        if (footer) {
            footer.href = "https://" + currentDomain;
            footer.innerHTML = currentDomain;
        }
    } else {
        if (footer) {
            footer.href = ownerLink;
            footer.innerHTML = ownerName;
        }
        // Trial Protection
        setInterval(function() {
            var f = document.getElementById(footerId);
            if (!f || f.getAttribute("href") !== ownerLink) {
                document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%'>Template Protected: Restore Footer Credits</h1>";
                window.location.href = ownerLink;
            }
        }, 5000);
    }

    // 3. Critical CSS Injection (Template ka huliya control karne ke liye)
    var css = `
        #csk-main { background: #FFFFFF !important; width: 100% !important; }
        .csk-header { height: 250px !important; border-top: 5px solid #FA8E00 !important; }
        .csk-nav { background: #292929 !important; border-bottom: 6px solid #FA8E00 !important; }
        .csk-sheet { width: 90% !important; max-width: 1728px !important; margin: 10px auto !important; }
        #${footerId} { display: inline-block !important; visibility: visible !important; opacity: 1 !important; font-weight: bold !important; color: #FA8E00 !important; }
    `;
    
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();

Footer Link: Footer mein ek link zarur rakhein jiski ID myFooterLink ho (taki script use pehchan sake).

The Script Link: </body> se pehle aapka GitHub wala link.

ye link ko add karna hai <script src='https://cdn.jsdelivr.net/gh/username/repo@main/license-config.js'></script>
