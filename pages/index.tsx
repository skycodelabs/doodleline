import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { getServerSideProps } from '@utils/server_side_props';

import HomeView from '@components/home';

interface HomePageProps {
	colorMode: string;
	colorScheme: string;
}

const HomePage: NextPage<HomePageProps> = (props) => {
	return (
		<>
			<Head>
				<title>Doodleline | Practice</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HomeView {...props} />
		</>
	);
};

export { getServerSideProps };

export default HomePage;
