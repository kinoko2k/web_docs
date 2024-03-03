import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '書くことない。',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        書くことない。
      </>
    ),
  },
  {
    title: 'このサイトの意味',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        この雑記帳は、文書作成の趣味技術を向上させるために作成されたものであり、
        ここで得られる情報はすべて自分の情報なので間違ってる場合は、Issuesでも立ててください。
      </>
    ),
  },
  {
    title: '書くことない。',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        書くことない。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
