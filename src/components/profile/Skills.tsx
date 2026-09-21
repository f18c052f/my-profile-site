import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { skillIcons } from '../../assets/icons';
import { skillCategories, skills } from '../../data/skills';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Code}>{t('profile.skills.title')}</SectionHeading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {skillCategories.map((category) => (
          <Card key={category}>
            <h4 className="mb-4 font-medium text-fg">
              {t(`profile.skills.categories.${category}`)}
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills[category].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {/*
                    ブランド色が黒や濃灰のアイコン（carbon-original は #000000、
                    wordpress-plain は #494949）は暗い背景に沈むため、
                    ダークモードでのみ明るい下地を敷く。
                    配色トークンではなく可読性のための処置なので dark: を直接使う。
                  */}
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded dark:bg-white/85">
                    <img
                      src={skillIcons[item.icon]}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="break-words text-fg-muted">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}

        <Card>
          <h4 className="mb-4 font-medium text-fg">
            {t('profile.skills.categories.Qualifications')}
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {t('profile.skills.qualifications', { returnObjects: true }).map(
              (qualification: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <Award className="h-6 w-6 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-words text-fg-muted">{qualification}</span>
                </div>
              ),
            )}
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Skills;
