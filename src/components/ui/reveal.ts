/**
 * スクロールで一度だけフェードインする framer-motion の props。
 *
 * ラッパーコンポーネントにしていないのは、DOM が 1 段深くなるうえ
 * className や transition の上書きを全部 props で受け直す必要が出るため。
 * 呼び出し側は <motion.div {...revealProps}> の 1 行で済む。
 */
export const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;
