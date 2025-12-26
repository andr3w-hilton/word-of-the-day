// Word database - curated collection of interesting words
const wordDatabase = [
    // Week 1
    { word: "Ephemeral", pronunciation: "eh-FEM-er-ul", pos: "adjective", definition: "Lasting for a very short time; transient and fleeting.", example: "The ephemeral beauty of cherry blossoms reminds us to appreciate each moment." },
    { word: "Serendipity", pronunciation: "ser-en-DIP-ih-tee", pos: "noun", definition: "The occurrence of events by chance in a happy or beneficial way.", example: "Meeting her best friend was pure serendipity—they sat next to each other on a plane." },
    { word: "Mellifluous", pronunciation: "meh-LIF-loo-us", pos: "adjective", definition: "Sweet or musical; pleasant to hear.", example: "The singer's mellifluous voice filled the concert hall with warmth." },
    { word: "Luminous", pronunciation: "LOO-min-us", pos: "adjective", definition: "Bright or shining, especially in the dark; full of or shedding light.", example: "Her luminous smile could brighten even the darkest days." },
    { word: "Effervescent", pronunciation: "ef-er-VES-ent", pos: "adjective", definition: "Vivacious and enthusiastic; giving off bubbles; fizzy.", example: "Her effervescent personality made everyone around her feel energized." },

    // Week 2
    { word: "Petrichor", pronunciation: "PET-ri-kor", pos: "noun", definition: "The pleasant, earthy smell after rain.", example: "The petrichor rising from the garden after the storm was incredibly refreshing." },
    { word: "Eloquent", pronunciation: "EL-oh-kwent", pos: "adjective", definition: "Fluent or persuasive in speaking or writing.", example: "Her eloquent speech moved the audience to tears." },
    { word: "Ethereal", pronunciation: "eh-THEER-ee-ul", pos: "adjective", definition: "Extremely delicate and light; seeming too perfect for this world.", example: "The ballet dancer moved with an ethereal grace that mesmerized the audience." },
    { word: "Incandescent", pronunciation: "in-kan-DES-ent", pos: "adjective", definition: "Emitting light as a result of being heated; passionate or brilliant.", example: "She gave an incandescent performance that earned her a standing ovation." },
    { word: "Ebullient", pronunciation: "eh-BULL-yent", pos: "adjective", definition: "Cheerful and full of energy; enthusiastic.", example: "The children were ebullient on Christmas morning, racing to open their presents." },

    // Week 3
    { word: "Sanguine", pronunciation: "SANG-gwin", pos: "adjective", definition: "Optimistic or positive, especially in a difficult situation.", example: "Despite the setbacks, she remained sanguine about the project's success." },
    { word: "Quintessential", pronunciation: "kwin-teh-SEN-shul", pos: "adjective", definition: "Representing the most perfect or typical example of something.", example: "The cottage, with its thatched roof and garden, was the quintessential English home." },
    { word: "Ineffable", pronunciation: "in-EF-uh-bul", pos: "adjective", definition: "Too great or extreme to be expressed in words; indescribable.", example: "The ineffable joy of becoming a parent left them speechless." },
    { word: "Resplendent", pronunciation: "reh-SPLEN-dent", pos: "adjective", definition: "Attractive and impressive through being richly colorful or sumptuous.", example: "The peacock's resplendent plumage shimmered in the sunlight." },
    { word: "Halcyon", pronunciation: "HAL-see-on", pos: "adjective", definition: "Denoting a period of time in the past that was idyllically happy and peaceful.", example: "They often reminisced about the halcyon days of their youth." },

    // Week 4
    { word: "Verdant", pronunciation: "VER-dent", pos: "adjective", definition: "Green with grass or other rich vegetation.", example: "The verdant hills of Ireland stretched as far as the eye could see." },
    { word: "Sonorous", pronunciation: "suh-NOR-us", pos: "adjective", definition: "Capable of producing a deep or ringing sound; impressive in style.", example: "The actor's sonorous voice commanded attention whenever he spoke." },
    { word: "Benevolent", pronunciation: "beh-NEV-oh-lent", pos: "adjective", definition: "Well-meaning and kindly; serving a charitable purpose.", example: "The benevolent stranger helped them carry their groceries home." },
    { word: "Vivacious", pronunciation: "vih-VAY-shus", pos: "adjective", definition: "Attractively lively and animated, especially of a woman.", example: "Her vivacious nature made her the life of every party." },
    { word: "Redolent", pronunciation: "RED-oh-lent", pos: "adjective", definition: "Strongly reminiscent or suggestive of something; fragrant or sweet-smelling.", example: "The kitchen was redolent with the aroma of freshly baked bread." },

    // Week 5
    { word: "Perspicacious", pronunciation: "per-spih-KAY-shus", pos: "adjective", definition: "Having a ready insight into and understanding of things; perceptive.", example: "Her perspicacious observations helped solve the mystery." },
    { word: "Magnanimous", pronunciation: "mag-NAN-ih-mus", pos: "adjective", definition: "Generous or forgiving, especially toward a rival or less powerful person.", example: "The champion was magnanimous in victory, praising her opponent's skill." },
    { word: "Loquacious", pronunciation: "loh-KWAY-shus", pos: "adjective", definition: "Tending to talk a great deal; talkative.", example: "The loquacious taxi driver shared stories throughout the entire journey." },
    { word: "Iridescent", pronunciation: "ear-ih-DES-ent", pos: "adjective", definition: "Showing luminous colors that seem to change when seen from different angles.", example: "The soap bubbles created an iridescent display in the sunlight." },
    { word: "Euphonious", pronunciation: "yoo-FOH-nee-us", pos: "adjective", definition: "Pleasing to the ear; harmonious in sound.", example: "The euphonious melody of the harp filled the room." },

    // Week 6
    { word: "Sublime", pronunciation: "suh-BLIME", pos: "adjective", definition: "Of such excellence, grandeur, or beauty as to inspire great admiration.", example: "The view from the mountain peak was absolutely sublime." },
    { word: "Sagacious", pronunciation: "suh-GAY-shus", pos: "adjective", definition: "Having or showing keen mental discernment and good judgment; wise.", example: "The sagacious advisor helped them avoid many costly mistakes." },
    { word: "Sumptuous", pronunciation: "SUMP-choo-us", pos: "adjective", definition: "Splendid and expensive-looking; magnificent.", example: "They enjoyed a sumptuous feast at the wedding reception." },
    { word: "Ameliorate", pronunciation: "uh-MEEL-yor-ate", pos: "verb", definition: "To make something bad or unsatisfactory better.", example: "The new policies helped ameliorate working conditions in the factory." },
    { word: "Scintillating", pronunciation: "SIN-tih-lay-ting", pos: "adjective", definition: "Sparkling or shining brightly; brilliantly and excitingly clever or skillful.", example: "Her scintillating wit kept everyone entertained throughout dinner." }
];

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed:', err);
            });
    });
}

// Get the word index based on the current date
function getWordIndex() {
    const startDate = new Date('2025-01-06'); // Monday, January 6, 2025
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calculate weekday count (skip weekends)
    let weekdayCount = 0;
    for (let i = 0; i <= diffDays; i++) {
        const checkDate = new Date(startDate);
        checkDate.setDate(startDate.getDate() + i);
        const dayOfWeek = checkDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday or Saturday
            weekdayCount++;
        }
    }

    return (weekdayCount - 1) % wordDatabase.length;
}

// Check if today is a weekend
function isWeekend() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
}

// Format date
function formatDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// Display word or weekend message
function displayWord() {
    const dateElement = document.getElementById('currentDate');
    dateElement.textContent = formatDate();

    if (isWeekend()) {
        document.getElementById('wordContent').style.display = 'none';
        document.getElementById('weekendMessage').style.display = 'block';
    } else {
        const wordIndex = getWordIndex();
        const wordData = wordDatabase[wordIndex];

        document.getElementById('word').textContent = wordData.word;
        document.getElementById('pronunciation').textContent = wordData.pronunciation;
        document.getElementById('partOfSpeech').textContent = wordData.pos;
        document.getElementById('definition').textContent = wordData.definition;
        document.getElementById('example').textContent = `"${wordData.example}"`;

        document.getElementById('wordContent').style.display = 'block';
        document.getElementById('weekendMessage').style.display = 'none';
    }
}

// Notification handling
async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('This browser does not support notifications');
        return;
    }

    if (!('serviceWorker' in navigator)) {
        alert('This browser does not support service workers');
        return;
    }

    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
        await subscribeUserToPush();
        document.getElementById('notificationPrompt').style.display = 'none';
        localStorage.setItem('notificationsEnabled', 'true');

        // Schedule daily notifications
        scheduleDailyNotification();
    }
}

async function subscribeUserToPush() {
    const registration = await navigator.serviceWorker.ready;

    try {
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDSKidOrChZlNfmYzxaPAFy-KVDPqcDh0Y5GlPmCmLNE')
        });

        console.log('User is subscribed:', subscription);
    } catch (err) {
        console.log('Failed to subscribe the user:', err);
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function scheduleDailyNotification() {
    // Check every hour if it's 9 AM on a weekday
    setInterval(() => {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();

        // If it's 9 AM on a weekday (1-5)
        if (hour === 9 && day >= 1 && day <= 5) {
            showNotification();
        }
    }, 60 * 60 * 1000); // Check every hour
}

async function showNotification() {
    const permission = Notification.permission;

    if (permission === 'granted') {
        const wordIndex = getWordIndex();
        const wordData = wordDatabase[wordIndex];

        const registration = await navigator.serviceWorker.ready;
        registration.showNotification('Word of the Day', {
            body: `Today's word: ${wordData.word} - ${wordData.definition}`,
            icon: 'icons/icon-192.png',
            badge: 'icons/icon-192.png',
            vibrate: [200, 100, 200],
            tag: 'word-of-the-day',
            requireInteraction: false
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayWord();

    // Check notification permission status
    if ('Notification' in window && Notification.permission === 'default') {
        document.getElementById('notificationPrompt').style.display = 'block';
    } else if (Notification.permission === 'granted') {
        document.getElementById('notificationPrompt').style.display = 'none';
        scheduleDailyNotification();
    } else {
        document.getElementById('notificationPrompt').style.display = 'none';
    }

    // Add event listener for notification button
    const notifButton = document.getElementById('enableNotifications');
    if (notifButton) {
        notifButton.addEventListener('click', requestNotificationPermission);
    }
});
