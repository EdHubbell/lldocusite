import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Lawn Gets Long',
    Svg: require('@site/static/img/lawn.svg').default,
    description: (
      <>
        You live in North Carolina. Your lawn is going to grow. 
      </>
    ),
  },
  {
    title: 'Logan Mows Lawn',
    Svg: require('@site/static/img/lawn-mower.svg').default,
    description: (
      <>
        Logan comes and mows the lawn for you.
      </>
    ),
  },
  {
    title: 'Pay Logan Money',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        Give Logan money. Repeat throughout the summer. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
