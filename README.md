🚀 Extract All Images from a Web Page

Want to quickly list all images on a website? Use this JavaScript snippet in your browser’s DevTools or as a bookmarklet to extract image URLs instantly!

🔥 JavaScript Code:
javascript:console.log('Images on this Page:\n' + Array.from(document.querySelectorAll('img')).map(img => img.src).join('\n'));

🎯 How It Works?
✅ document.querySelectorAll('img') selects all <img> elements on the page.
✅ .map(img => img.src) extracts the source URLs of the images.
✅ .join('\n') formats the output for easy readability in the console.

📌 How to Use?
1️⃣ Open the browser DevTools (F12 → Console).
2️⃣ Copy and paste the JavaScript code into the console.
3️⃣ Press Enter to list all image URLs on the page!

🔹 Bonus: Save it as a bookmarklet for quick access!
👉 Bookmark Name: Extract Images
👉 URL:
```javascript:(function(){console.log('Images on this Page:\n' + Array.from(document.querySelectorAll('img')).map(img => img.src).join('\n'));})();```

Here’s the **upgraded** script that extracts images (img), videos (mp4), JavaScript files (script), and links (a tags) from a webpage:
```
(() => {
    try {
        let media = [
            ...Array.from(document.querySelectorAll('img')).map((el, index) => `${index + 1}: [IMG] ${el.src}`),
            ...Array.from(document.querySelectorAll('video source')).map((el, index) => `${index + 1}: [MP4] ${el.src}`),
            ...Array.from(document.querySelectorAll('script[src]')).map((el, index) => `${index + 1}: [JS] ${el.src}`),
            ...Array.from(document.querySelectorAll('a[href]')).map((el, index) => `${index + 1}: [LINK] ${el.href}`)
        ].filter(src => src); // Remove empty src/href values

        if (media.length === 0) {
            console.log("No images, videos, JS files, or links found on this page.");
        } else {
            console.log("📸🎥📜🔗 Extracted Media & Links:\n" + media.join("\n"));
        }
    } catch (error) {
        console.error("Error extracting data:", error);
    }
})();
```
🔥 New Features:
✅ Extracts Images (img), MP4 Videos (video source), JavaScript Files (script[src]), and Links (a[href])
✅ Labels each entry as [IMG], [MP4], [JS], or [LINK] for easy identification
✅ Filters out empty values to avoid clutter
✅ Error handling ensures smooth execution

📢 Stay ahead in bug bounty & web scraping! Follow @cybersecplayground for more hacking tips & automation tricks!

#BugBounty #WebScraping #EthicalHacking #JavaScript #CyberSecurity

#BugBounty #WebScraping #EthicalHacking #JavaScript #CyberSecurity
