import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{title}} */
export interface Social {
	/** @title Rede Social */
	title: string;
	/** @title Ícone */
	icon: ImageWidget
	/** @title Largura */
	width: number
	/** @title Altura */
	height: number
	/** @title Link */
	href: string;
}

export interface Props {
	/** @title Logo */
	logo: ImageWidget;
	/** @title Texto de Copyright */
	copyright: string;
	/** @title Redes Sociais */
	social: Social[];
}

const SocialMedia = ({ title, icon, width, height, href }: Social) => (
	<a href={href} title={title} target="_blank">
		<Image
			src={icon}
			width={width}
			height={height}
		/>
	</a>
);

const CopyrightText = ({ copyright }: { copyright: string }) => (
	<p class="font-primary text-dark-green text-base/5 md:text-lg">
		{copyright}
	</p>
);

export default function Footer({ logo, copyright, social }: Props) {
	return (
		<footer class="bg-white px-16 py-9">
			<section class="flex flex-col items-center justify-center gap-7 md:hidden">
				<div class="flex items-center gap-10">
					{social.map((props) => (
						<SocialMedia {...props} />
					))}
				</div>
				<div class="flex items-center gap-10">
					<Image
						src={logo}
						width={63}
						height={43}
					/>
					<CopyrightText copyright={copyright} />
				</div>
			</section>
			<section class="hidden items-center justify-between max-w-xl w-full mx-auto md:flex">
				<Image
					src={logo}
					width={83}
					height={56}
				/>
				<div class="flex flex-col items-center gap-3">
					<span class="flex items-center gap-5">
						{social.map((props) => (
							<SocialMedia {...props} />
						))}
					</span>
					<CopyrightText copyright={copyright} />
				</div>
			</section>
		</footer>
  	);
}
