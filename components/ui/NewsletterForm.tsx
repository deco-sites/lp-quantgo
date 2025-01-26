import { useUI } from "site/sdk/useUI.ts";

interface Props {
    title: string;
    optInText: string;
    ctaText: string;
}

const NewsletterForm = ({ title, optInText, ctaText }: Props) => {
    const { isChecked } = useUI();

    const handleClick = (ev: Event) => {
        ev.preventDefault();
        isChecked.value = !isChecked.value;

        console.log("in", isChecked.value);
        
    };

    return (
        <form class="max-w-[300px] mx-auto">
            <h1 class="font-primary font-bold text-white text-center text-5xl mb-8">
                {title}
            </h1>
            <input
                id="name"
                required
                type="text"
                placeholder="Nome"
                class="w-full py-3 px-2 rounded-xl border border-light-blue text-light-blue text-base/none mb-6 focus:outline-none"
                />
            <input
                id="email"
                required
                type="text"
                placeholder="E-mail"
                class="w-full py-3 px-2 rounded-xl border border-light-blue text-light-blue text-base/none mb-6 focus:outline-none"
            />
            <label for="optIn" class="flex gap-2 items-start mb-7" onClick={(ev) => handleClick(ev)}>
                <input
                    name="optIn"
                    id="optIn"
                    required
                    type="checkbox"
                    class="hidden"
                />
                {isChecked.value ? (
                    <div class="size-4 rounded border border-light-gray bg-light-blue px-[7px] relative">
                        <span class="border-b-[3px] border-l-[3px] border-white h-[5px] w-[9px] absolute -rotate-45 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                    </div>
                ) : (
                    <div class="size-4 rounded border border-light-gray bg-white px-[7px]" />
                )}
                <span class="text-light-blue text-sm">
                    {optInText}
                </span>
            </label>
            <button
                type="submit"
                class="font-secondary font-bold text-light-blue uppercase bg-white rounded-full w-full h-14 text-center text-base"
            >
                {ctaText}
            </button>
        </form>
    );
};

export default NewsletterForm;