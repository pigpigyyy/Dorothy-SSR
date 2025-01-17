import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
				<p className={clsx('hero__subtitle', styles.heroSubtitle)}>The <strong>Dora</strong> game engine, <strong>S</strong>pecial <strong>S</strong>uper <strong>R</strong>are edition.</p>
				<div className={styles.buttons}>
					<Link
						className="button button--primary button--lg"
						to="/docs/tutorial/quick-start">
						<Translate
							id='dora_enter_tutorial_button'
							description='The tutorial button in front page'>
							Start
						</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout
			description="Description will go into a meta tag in <head />">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
