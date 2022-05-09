import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import useToggle from '@hooks/useToggle';
import {
	ReferencesCanvas,
	FooterControls,
	SettingsModal,
	CustomizeModal,
	AboutModal,
} from '@components/home';

type Settings = { type: string; timer: number; imgs: File[] };
const HomePage: NextPage = () => {
	const [settings, setSettings] = useState<Settings>();
	const [current, setCurrent] = useState<number>(0);
	const { value: showSettings, onToggle: onToggleSettings } = useToggle();
	const { value: showCustomize, onToggle: onToggleCustomize } = useToggle();
	const { value: showAbout, onToggle: onToggleAbout } = useToggle();

	const onPrevRef = () => {
		if (current > 0) {
			setCurrent(current - 1);
		}
	};

	const onNextRef = () => {
		if (settings && current < settings.imgs.length) {
			setCurrent(current + 1);
		}
	};

	return (
		<>
			<Head>
				<title>Doodleline | Practice</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex direction='column' h='100vh' w='100vw'>
				<Flex h='calc(100vh - 6em)' w='100vw' gap='1em'>
					<ReferencesCanvas current={current} imgs={settings?.imgs} />
				</Flex>
				<Box h='6em' w='100vw' border='1px solid grey'>
					<FooterControls
						threshold={settings?.timer ?? 0}
						onToggleCustomize={onToggleCustomize}
						onToggleAbout={onToggleAbout}
						onPrevRef={onPrevRef}
						onNextRef={onNextRef}
					/>
				</Box>
			</Flex>
			<SettingsModal
				isOpen={showSettings}
				onClose={onToggleSettings}
				onStart={(type, timer, imgs) => setSettings({ type, timer, imgs })}
			/>
			<CustomizeModal isOpen={showCustomize} onClose={onToggleCustomize} />
			<AboutModal isOpen={showAbout} onClose={onToggleAbout} />
		</>
	);
};

export default HomePage;
