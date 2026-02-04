(function() {
    // 1. PREMIUM DOMAINS LIST
    var premiumDomains = [
        "https://chandrashekharkumartech.blogspot.com/", // Aapka apna domain
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
    .csk-header {
            -webkit-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3) !important;
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3) !important;
            border-top: 5px solid #FA8E00 !important;
            height: 250px !important;
            background-image: url('images/header.jpg') !important;
            background-position: center top !important;
            background-repeat: no-repeat !important;
            min-width: 700px !important;
            max-width: 1728px !important;
            width: 90% !important;
        }
        /* Aapka footer aur baki security CSS yahan continue rahega */
        #${footerId} { display: inline-block !important; visibility: visible !important; }
    `;
       
    
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();


