import React from 'react';
import Image from 'next/image';
import iconImage from '@/assets/images/top/icon.jpg';
import backgroundImage from '@/assets/images/top/background.jpg';
import githubImage from '@/assets/images/top/github-icon.svg';

const Top: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        priority
      />

      <div className="flex h-full items-center justify-center">
        <div
          className="flex flex-col items-center justify-center bg-white bg-opacity-10 p-16 text-center font-bold text-white backdrop-blur-md"
          style={{ textShadow: '0 0 20px black' }}
        >
          <div>
            <Image
              src={iconImage}
              alt="Yuta Ohara"
              className="rounded-full"
              width={128}
              height={128}
            />
          </div>
          <h1 className="text-4xl font-semibold">Yuta Ohara</h1>
          <div className="mt-4">
            <a
              href="https://github.com/f18c052f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubImage}
                alt="GitHub"
                style={{ width: '40px', height: 'auto' }}
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
