import { Heading } from '~/components/typography/Heading';
import { MapViewer } from './MapViewer';

export const MapModule = () => {
	return (
		<section className="py-10">
			<div className="flex flex-col items-center gap-5">
				<Heading className="text-center" level={1} as="h1">
					Страница карты
				</Heading>
				<MapViewer/>
			</div>
		</section>
	);
};
