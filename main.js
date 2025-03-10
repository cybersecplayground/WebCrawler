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
