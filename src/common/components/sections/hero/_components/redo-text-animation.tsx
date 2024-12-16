'use client';

import splitParagraphToSentences from '@/common/helper/string';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    'Crafting digital magic with code that sparks joy and innovation!',
    'Turning complex problems into elegant, user-focused solutions.',
    'Engineering the future with clean code and creative thinking.',
    'Architecting digital solutions that exceed expectations.',
    'Coding with purpose to create meaningful user experiences.',
    'Where imagination meets technical excellence in perfect code.',
    "Building tomorrow's web experiences with passion and precision.",
    'Bringing innovative ideas to life through beautiful interfaces.',
    'Pushing boundaries to build exceptional digital products.',
    'Creating digital experiences that inspire, delight and transform.',
  ];

  const [aiText, setAiText] = useState(texts);

  const fetchAiText = async () => {
    try {
      const response = await fetch('/api/text-generation', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      const texts = data.message
        .trim()
        .split('\n\n')
        .map((line: any) => {
          const cleanedLine = line.replace(/^[0-9]+\.\s*\"|\"\s*$/g, '').trim();
          return cleanedLine;
        })
        .filter((line: any) => line !== '');

      setAiText(texts);
    } catch (error) {
      console.log('error :', error);
    }
  };

  useEffect(() => {
    fetchAiText();
  }, []);

  const baseText = useTransform(textIndex, (latest) => {
    return aiText[latest % aiText.length] || "";
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, baseText.get().length, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-32 max-w-96 text-black italic text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}
