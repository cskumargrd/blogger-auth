(function() {
    // 1. Authorized (Premium) Domains List
    var authorizedDomains = [
        "chandrashekharkumartech.blogspot.com",
        "client-blog.blogspot.com"
    ];

    var currentDomain = window.location.hostname;
    var footerId = "myFooterLink"; // Aapke HTML mein anchor tag ki ID
    var ownerLink = "https://kamalvasini.com/"; // Aapka selling link
    var ownerName = "Kamalvasini"; // Aapka brand name

    // 2. Logic: Premium vs Trial
    var isPremium = authorizedDomains.indexOf(currentDomain) > -1;
    var footer = document.getElementById(footerId);

    if (isPremium) {
        // --- PREMIUM USER ---
        if (footer) {
            footer.href = "https://" + currentDomain;
            footer.innerHTML = currentDomain; // Unka apna domain show hoga
        }
    } else {
        // --- TRIAL USER ---
        if (footer) {
            footer.href = ownerLink;
            footer.innerHTML = ownerName; // Aapka brand show hoga
        }
        
        // Trial walo ke liye protection: Agar footer hataya to redirect
        setInterval(function() {
            var f = document.getElementById(footerId);
            if (!f || f.getAttribute("href") !== ownerLink || f.innerHTML !== ownerName) {
                alert("Trial Version: License required to modify footer.");
                window.location.href = ownerLink;
            }
        }, 5000);
    }

    // 3. CSS Injection (Dono ke liye layout load karega)
   // ... verification logic ke baad ...
    var css = `
        /* 1. Main Layout */
        .main-wrapper { width: 1100px; margin: 0 auto; background: #fff; }
        
        /* 2. Header Style */
        #header-inner { background: #2c3e50; color: #ffffff; padding: 20px; text-align: center; }
        
        /* 3. Footer Protection Style (Zaroori) */
        #myFooterLink { color: #e74c3c !important; font-weight: bold !important; display: inline-block !important; }

        /* 4. Fonts and Body */
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f2f5; }
    `;
    
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
    
})();


Footer Link: Footer mein ek link zarur rakhein jiski ID myFooterLink ho (taki script use pehchan sake).

The Script Link: </body> se pehle aapka GitHub wala link.

ye link ko add karna hai <script src='https://cdn.jsdelivr.net/gh/username/repo@main/license-config.js'></script>
