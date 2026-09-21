import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { skillIcons } from '../../assets/icons';
import { technologies } from '../../data/skills';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Code}>{t('profile.skills.title')}</SectionHeading>
      <div className="space-y-4 md:space-y-6">
        <Card>
          <h4 className="mb-3 font-medium text-fg">{t('profile.skills.domainsTitle')}</h4>
          <dl className="space-y-4">
            {t('profile.skills.domains', { returnObjects: true }).map((domain, index: number) => (
              <div key={index}>
                <dt className="font-medium text-fg">{domain.name}</dt>
                <dd className="mt-1 text-sm text-fg-muted">{domain.description}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card>
          <h4 className="mb-3 font-medium text-fg">{t('profile.skills.technologiesTitle')}</h4>
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-fg-muted"
              >
                {/*
                  ブランド色が黒や濃灰のアイコンは暗い背景に沈むため、
                  ダークモードでのみ明るい下地を敷く。
                  配色トークンではなく可読性のための処置なので dark: を直接使う。
                */}
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded dark:bg-white/85">
                  <img src={skillIcons[tech.icon]} alt="" aria-hidden="true" className="h-4 w-4" />
                </span>
                {tech.name}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h4 className="mb-3 font-medium text-fg">{t('profile.skills.qualificationsTitle')}</h4>
          <ul className="space-y-2">
            {t('profile.skills.qualifications', { returnObjects: true }).map(
              (qualification: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-fg-muted">
                  <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-words">{qualification}</span>
                </li>
              ),
            )}
          </ul>
        </Card>
      </div>
    </motion.div>
  );
};

export default Skills;
