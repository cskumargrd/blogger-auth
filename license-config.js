(function() {
    // 1. Authorized (Premium) Domains List
    var authorizedDomains = [
        "chandrashekharkumartech.blogspot.com",
        "client-blog.blogspot.com"
    ];

    var currentDomain = window.location.hostname;
    var footerId = "myFooterLink"; // Aapke HTML mein anchor tag ki ID
    var ownerLink = "https://your-site.com"; // Aapka selling link
    var ownerName = "YourBrandName"; // Aapka brand name

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
    var css = `
        /* Aapka important CSS yahan paste karein */
        body { background-color: #f4f7f6; }
        #${footerId} { 
            display: inline-block !important; 
            visibility: visible !important; 
            opacity: 1 !important; 
            color: #d32f2f; /* Trial mein highlight karne ke liye color */
            text-decoration: none;
        }
    `;
    
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);

})();


Footer Link: Footer mein ek link zarur rakhein jiski ID myFooterLink ho (taki script use pehchan sake).

The Script Link: </body> se pehle aapka GitHub wala link.

ye link ko add karna hai <script src='https://cdn.jsdelivr.net/gh/username/repo@main/license-config.js'></script>
