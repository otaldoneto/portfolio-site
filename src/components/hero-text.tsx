'use client';

import { useEffect, useState } from 'react';

const NAME = 'Ismael Neto';
const TAGLINE = 'Desenvolvedor Fullstack — Java/Spring · TypeScript/React · React Native';

type Phase = 'typing-name' | 'typing-tagline' | 'pause' | 'deleting-tagline' | 'deleting-name';

export function HeroText() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [phase, setPhase] = useState<Phase>('typing-name');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing-name') {
      if (name.length < NAME.length) {
        timeout = setTimeout(() => setName(NAME.slice(0, name.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase('typing-tagline'), 300);
      }
    } else if (phase === 'typing-tagline') {
      if (tagline.length < TAGLINE.length) {
        timeout = setTimeout(() => setTagline(TAGLINE.slice(0, tagline.length + 1)), 25);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting-tagline'), 0);
    } else if (phase === 'deleting-tagline') {
      if (tagline.length > 0) {
        timeout = setTimeout(() => setTagline(tagline.slice(0, -1)), 15);
      } else {
        timeout = setTimeout(() => setPhase('deleting-name'), 200);
      }
    } else if (phase === 'deleting-name') {
      if (name.length > 0) {
        timeout = setTimeout(() => setName(name.slice(0, -1)), 40);
      } else {
        timeout = setTimeout(() => setPhase('typing-name'), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, name, tagline]);

  const isTypingName = phase === 'typing-name' || phase === 'deleting-name';
  const isTypingTagline = phase === 'typing-tagline' || phase === 'deleting-tagline';

  return (
    <>
      <h1 className="text-5xl font-bold text-[#D4AF37]">
        {name}
        {isTypingName && <span className="animate-pulse">|</span>}
      </h1>
      <p className="text-xl text-gray-300">
        {tagline}
        {isTypingTagline && <span className="animate-pulse">|</span>}
      </p>
    </>
  );
}
