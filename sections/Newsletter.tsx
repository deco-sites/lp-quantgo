import NewsletterForm from "site/islands/NewsletterForm.tsx";

export interface Props {
    title: string;
    optInText: string;
    ctaText: string;
}

const Newsletter = (props: Props) => {
    return (
        <section class="bg-dark-blue pt-7 pb-14">
            <NewsletterForm {...props} />
        </section>
    );
};

export default Newsletter;