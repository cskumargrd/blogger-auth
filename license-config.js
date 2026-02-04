(function() {
    // 1. PREMIUM DOMAINS LIST (Sirf domain name rakhein)
    var premiumDomains = [
        "chandrashekharkumart.blogspot.com", 
        "client-site.com"
    ];

    var currentDomain = window.location.hostname;
    var footerId = "myFooterLink"; 
    var ownerLink = "https://kamalvasini.com/"; 
    var ownerName = "Kamalvasini"; 

    // 2. Premium vs Trial Logic
    var isPremium = premiumDomains.indexOf(currentDomain) > -1;
    var footer = document.getElementById(footerId);

    if (isPremium) {
        // PREMIUM: User ka domain name show hoga
        if (footer) {
            footer.href = "https://" + currentDomain;
            footer.innerHTML = currentDomain;
        }
    } else {
        // TRIAL: Aapka brand name show hoga
        if (footer) {
            footer.href = ownerLink;
            footer.innerHTML = ownerName;
        }
        // Trial Protection (Ched-chad karne par redirect)
        setInterval(function() {
            var f = document.getElementById(footerId);
            if (!f || f.getAttribute("href") !== ownerLink) {
                document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;font-family:sans-serif;'>Template Protected: Restore Footer Credits to continue.</h1>";
                setTimeout(function(){ window.location.href = ownerLink; }, 2000);
            }
        }, 5000);
    }

    // 3. Critical CSS Injection
    // NOTE: 'images/page.png' jaise path kaam nahi karenge. Inhe Full URL (http://...) se replace karein.
    var css = `
        #csk-main {
            background: #FFFFFF url('https://your-image-link.com/page.png') fixed !important;
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
            background-image: url('https://your-image-link.com/header.jpg') !important;
            background-position: center top !important;
            background-repeat: no-repeat !important;
            min-width: 700px !important;
            max-width: 1728px !important;
            width: 90% !important;
        }
        #${footerId} { 
            display: inline-block !important; 
            visibility: visible !important; 
            opacity: 1 !important;
            color: #FA8E00 !important;
            font-weight: bold !important;
        }
    `;
    
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();
