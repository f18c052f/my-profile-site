import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './ui/Container';
import Education from './profile/Education';
import Career from './profile/Career';
import Skills from './profile/Skills';
import Hobbies from './profile/Hobbies';
import Achievements from './profile/Achievements';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="profile" className="bg-surface py-16 md:py-24">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold text-fg md:mb-12">
          {t('profile.title')}
        </h2>

        <Education />
        <Career />
        <Skills />
        <Hobbies />
        <Achievements />
      </Container>
    </section>
  );
};

export default Profile;
