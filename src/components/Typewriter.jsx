import { useState, useEffect, useRef } from 'react';

function Typewriter(words, wordDuration = 2000, deletingSpeed = 60, pauseMs = 1500) {
    const [display, setDisplay] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPausing, setIsPausing] = useState(false);
    const typingSpeed = useRef(wordDuration / words[0].length);

    useEffect(() => {
        if (isPausing) return;

        const current = words[wordIndex];
        typingSpeed.current = wordDuration / current.length; // calculates when wordIndex changes

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplay(current.slice(0, display.length + 1));
                if (display.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pauseMs);
                }
            } else {
                setDisplay(current.slice(0, display.length - 1));
                // isPausing needs to be set to true before displayed hits empty
                // otherwise there's always a gap where the effect runs one extra time
                // unguarded. Triggering at length 1 gives you that
                // one render of buffer to shut the gate before anything leaks through.
                if (display.length === 1) {
                    setIsPausing(true);
                    setTimeout(() => {
                        setIsDeleting(false);
                        setWordIndex(i => (i + 1) % words.length); // loop
                        setIsPausing(false);
                    }, 1500);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed.current);

        return () => clearTimeout(timeout);
    }, [display, isDeleting, wordIndex, isPausing, words]);

    return display;
}

export default Typewriter