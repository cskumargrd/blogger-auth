(function() {
    // 1. PREMIUM DOMAINS LIST
    var premiumDomains = [
        "chandrashekharkumartech.com", // Aapka apna domain
        "client-site.com"
    ];

    var currentDomain = window.location.hostname;
    var footerId = "myFooterLink"; 
    var ownerLink = "https://kamalvasini.com/"; // Aapki site
    var ownerName = "Kamalvasini"; 

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
        var css = `
        #csk-main {
            background: #FFFFFF url('images/page.png') fixed !important;
            background: url('images/pageglare.png') no-repeat, url('images/page.png'), #FFFFFF !important;
            background-attachment: fixed, fixed, scroll !important;
            width: 100% !important;
            min-height: 100% !important;
            font-size: 13px !important;
            font-family: Verdana, Geneva, Arial, Helvetica, Sans-Serif !important;
        }
        /* Aapka footer aur baki security CSS yahan continue rahega */
        #${footerId} { display: inline-block !important; visibility: visible !important; }
    `;
       
    
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();


