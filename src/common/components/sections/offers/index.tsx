'use client'

import React from 'react';
import { services } from './_components/data';
import ServiceCard from './_components/service-card';
import BackgroundEffects from './_components/background-effects';
import SectionHeader from './_components/section-header';
import { useSectionInView } from '@/common/lib/hooks';

const WhatIOffer = () => {
  const { ref } = useSectionInView("whatIOffer");

  return (
    <section
      id='whatIOffer'
      ref={ref}
      className="py-20 relative overflow-hidden">
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;
