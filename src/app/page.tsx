import Posts from '@/components/Posts';
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Posts page',
	description: 'All posts for all...'
};

export default function Home() {
	return (
		<div>
      <Image src={'/globe.svg'} alt='globe img' width={50} height={50} />
			
		</div>
	);
}
