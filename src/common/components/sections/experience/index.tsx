'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';
import { Building2, IdCard, MapPinned } from 'lucide-react';

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={false}>
        {ihasMounted &&
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                  contentStyle={{
                    background:
                      theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                    transition: 'background 0.3s ease, transform 0.2s ease',
                  }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                  display: theme === 'dark' ? 'none' : 'block',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                  display: theme === 'dark' ? 'none' : 'flex',
                }}
                className="hover:scale-[1.02] dark:hover:bg-white/10"
              >
                <div className="flex items-center">
                  <span className="mr-2"><IdCard /></span>
                  <h3 className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">{item.title}</h3>
                </div>
                <div className="flex items-center">
                  <span className="mr-2"><Building2 /></span>
                  <h3 className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">{item.company}</h3>
                </div>
                <div className="flex items-center">
                  <span className="mr-2"><MapPinned /></span>
                  <p className="mt-1 text-sm font-normal text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-500">{item.location}</p>
                </div>
                <div className="flex items-center">
                  <p className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}