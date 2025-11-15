javascript: (function () {
    const video = document.querySelector("video");
    if (!video) {
        alert("⚠%EF%B8%8F No video element found on this page.");
        return;
    }
    const t = video.currentTime;
    const videoTime = new Date(t * 1000).toISOString().substr(11, 8);
    const now = new Date();
    const systemTime = now.toLocaleTimeString();
    const formattedDate = now.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const channelElement = document.querySelector(
        "ytd-video-owner-renderer .ytd-channel-name a"
    );
    let channelName = null;
    if (channelElement) {
        channelName = channelElement.textContent.trim();
    }
    let message = `${formattedDate} ${systemTime}`;
    if (channelName) {
        message = `${channelName} | ` + message;
    }
    if (videoTime !== "00:00:00") {
        message += ` | Video Time: ${videoTime}`;
    }
    alert(message);
})();
