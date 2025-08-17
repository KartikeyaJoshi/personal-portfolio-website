'use client';
import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export function Typewriter({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  delay: pauseDelay = 2000 
}: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDelay]);

  const nameToStyle = "Kartikeya Joshi";
  const styledHtml = displayedText.replace(
    new RegExp(`(${nameToStyle.substring(0, displayedText.length - (texts[textIndex].indexOf(nameToStyle)))})`, 'i'),
    (match) => {
      if(texts[textIndex].includes(nameToStyle) && match) {
        return `<span class="text-primary">${match}</span>`;
      }
      return match;
    }
  );


  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: styledHtml }} />
      <span className="animate-ping">|</span>
    </>
  );
}
