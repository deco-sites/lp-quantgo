import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

/** @title {{title}} */
interface ItemProps {
    /** @title Titulo */
    title: string;
    /** @title Descrição */
    description: string;
}

/** @title {{title}} */
export interface Props {
    /** @title {{title}} */
    title: string;
    /** @title Primeira Coluna */
    firstColumn: ItemProps[];
    /** @title Segunda Coluna */
    secondColumn: ItemProps[];
    /** @title Imagem */
    image: ImageWidget;    
}

const Item = ({ title, description }: ItemProps) => (
    <div class="flex flex-col items-center justify-center gap-2 max-w-80 md:justify-start md:items-start">
        <span class="h-2 w-16 rounded-full bg-light-blue" />
        <h2 class="font-primary font-bold text-white text-center text-5xl md:text-left">
            {title}
        </h2>
        <p class="font-primary text-white text-center text-base/5 md:text-left">
            {description}
        </p>
    </div>
)

function WhatDoWeDo({ title, firstColumn, secondColumn, image }: Props) {
    return (
        <section class={clx(
            "bg-dark-blue pt-5 px-12 mt-16"
        )}>
            <h1 class="font-primary font-bold text-white text-5xl text-center mb-12">
                {title}
            </h1>
            <div class="flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-14 md:items-start sm:mb-8">
                <div class="flex flex-col items-center justify-center gap-12">
                    {firstColumn.map((items) => (
                        <Item {...items} />
                    ))}
                </div>
                <div class="flex flex-col items-center justify-center gap-12">
                    {secondColumn.map((items) => (
                        <Item {...items} />
                    ))}
                    <Image
                        src={image}
                        width={383}
                    />  
                </div>
            </div>
        </section>
    )
}

export default WhatDoWeDo;