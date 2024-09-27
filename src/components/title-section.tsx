import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center">
      <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-sky-500 dark:to-violet-500">
        <div className="rounded-full px-5 py-1 dark:bg-black">
          {pill}
        </div>
      </article>
      {subheading ? (
        <>
          <h2 className="text-3xl font-bold sm:text-5xl max-w-4xl">
            {title}
          </h2>
          <p
              className='dark:text-gray-500 max-w-[450px]
              md:text-center px-3
            '
            >
              {subheading}
            </p>
        </>
      ) : (
        <h1 className="text-4xl font-semibold sm:text-6xl">
          {title}
        </h1>
      )}
    </section>
  );
};

export default TitleSection;
