
const verdict = (Study, Lazy) => {
    if (Study === 0 && Lazy === 0) return null;
    const total = Study + Lazy;
    const studyRatio = Study / total;

    if (studyRatio === 1) return { tag: "MONK MODE 🧘", comment: "Zero distractions. Pure focus. You're built different." };
    if (studyRatio >= 0.85) return { tag: "DEEP FOCUS 🔥", comment: "Almost untouchable today. Keep this energy." };
    if (studyRatio >= 0.7) return { tag: "LOCKED IN 💪", comment: "More grind than slack. Solid session." };
    if (studyRatio >= 0.55) return { tag: "DECENT RUN 📈", comment: "Leaning productive. Push a bit harder." };
    if (studyRatio === 0.5) return { tag: "PERFECTLY SPLIT ⚖️", comment: "Half hustle, half chill. Pick a side." };
    if (studyRatio >= 0.35) return { tag: "SLIPPING 😬", comment: "Laziness is winning. Time to flip the script." };
    if (studyRatio >= 0.2) return { tag: "COASTING 🛋️", comment: "Barely studying bro. What are we doing?" };
    if (studyRatio > 0) return { tag: "FULL SLACKER 💀", comment: "You basically just vibed today. Tomorrow better." };
    return { tag: "GHOST MODE 😶‍🌫️", comment: "Zero study. You didn't even try bro." };
};



export default verdict