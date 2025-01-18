import type { TextArea } from "apps/admin/widgets.ts";

export interface Props {
  title: string;
  description: TextArea;
}

const AboutUs = ({ title, description }: Props) => {
  return (
    <section class="w-fit max-w-[95%] bg-light-blue px-16 py-7 rounded-3xl mx-auto sm:max-w-3xl">
        <h1 class="font-primary font-bold text-white text-center text-5xl mb-8">
            {title}
        </h1>
        <p
            dangerouslySetInnerHTML={{ __html: description }}
            class="font-primary text-white text-center text-base/5"
        />
    </section>
  );
}

export default AboutUs;