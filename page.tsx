import Link from 'next/link'
import Image from 'next/image'

 import heroimage from '../../public/images/CareerLandingHero.jpg' // Placeholder image for the hero section
import AboutUsJpg from '../../public/images/CareerLandingHero.jpg' // Placeholder image for About Us section
import JoinUsPng from '../../public/images/CareerLandingHero.jpg' // Placeholder image for Join Us section
import { getJobs } from '@/lib/jobs'
import { ListReveal } from '@/components/Reveal'
import BenefitCard from '@/components/landing/BenefitCard'
import { Button } from '@/components/ui/button'
 
export default async function Home() {
	const res = await getJobs()

	return (
		<>
			<div className="h-full bg-white">
				<section className="flex items-center">
					<div className="relative w-full overflow-hidden">
						<Image
							alt=""
							src={heroimage}
							placeholder="blur"
							quality={100}
							fill
							className="h-full w-full object-cover brightness-50"
						/>
						<div className="relative text-white">
							<div className="my-20 mt-10 flex flex-col items-center justify-center text-center text-[50px] md:text-[100px]">
								<h1 className="font-bold">Tracking Climate</h1>
								<h1 className="font-bold">IN REAL TIME</h1>
								<Button
									asChild
									className="flex justify-center rounded-[25px] bg-green-500 p-7 text-[20px] uppercase text-white hover:bg-blue-700"
								>
									<Link href="/climate-issues" className="">
										Explore Issues
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
				<ListReveal>
					<div className="">
						<div className="flex	flex-col items-center justify-center pb-10 md:flex-row-reverse md:pt-10">
							<div className="justify-center p-5 md:w-1/3">
								<div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text pb-10 text-4xl font-bold  text-transparent md:text-6xl">
									About Us
								</div>
								<div className="mb-8 font-sans text-[30px] tracking-[0.020rem]">
									We are a passionate group of environmental advocates committed to fighting climate
									change. Explore our journey and dedication to making a sustainable impact.
								</div>
								<Link
									href="/about"
									className="flex justify-center rounded-[1rem] bg-blue-500 p-4 text-lg text-white hover:bg-blue-600 md:w-1/3"
								>
									Learn More
								</Link>
							</div>

							<Image
								src={AboutUsJpg}
								alt="About Us"
								width={500}
								height={500}
								className="rounded-2xl p-4 md:w-2/5 md:p-0"
							/>
						</div>
					</div>
				</ListReveal>

				<ListReveal>
					<div className="">
						<div className="flex flex-col items-center justify-center  pb-10 md:flex-row">
							<div className="justify-center p-5 md:w-1/3">
								<div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text pb-10 text-4xl font-bold  text-transparent md:text-6xl">
									Join Our Mission
								</div>
								<div className="mb-8 max-w-prose font-sans text-[30px] md:tracking-[0.020rem]">
									At our organization, we&apos;re more than just activists — we&apos;re a global
									community united in fighting climate change. When you join us, you&apos;ll contribute
									to a cause that matters.
								</div>
								<div className="grid grid-cols-2 gap-4">
									<Link
										scroll={false}
										href="/join-us"
										className="flex justify-center rounded-[1rem] bg-blue-500 p-4 text-white hover:bg-blue-600"
									>
										Join Us
									</Link>
								</div>
							</div>

							<Image
								src={JoinUsPng}
								alt="Join Us"
								placeholder="blur"
								width={500}
								height={500}
								className="rounded-xl p-4 md:w-2/5 md:p-0"
							/>
						</div>
					</div>
				</ListReveal>
				<section id="#benefits">
					<ListReveal>
						<div className="text-center ">
							<h1 className="text-[2rem] sm:text-[4rem] md:text-[3.5rem]">Why Care?</h1>

							<p className="text-[3rem] sm:text-[2.5rem]">
								How Climate Change will affect your life.
							</p>
						</div>
					</ListReveal>
					<ListReveal>
						<div>
							<BenefitCard></BenefitCard>
						</div>
					</ListReveal>
				</section>
				<section className="border-gray-200 pt-10">
					<div className="py-5">
						<ListReveal>
							<div>
								<h1 className="pb-5 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Explore The <Link href="/climate" className="text-blue-600 font-bold">
										MAP
									</Link>
								</h1>
							 
							</div>
						</ListReveal>
						 
					</div>
				</section>
			</div>
		</>
	)
}
