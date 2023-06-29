import Button from "@/components/UI/Button";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "project del sol",
    imageMobile: "/portfolio/mobile/image-del-sol.jpg",
    imageDesktop: "/portfolio/desktop/image-del-sol.jpg",
  },
  {
    id: 2,
    title: "228B tower",
    imageMobile: "/portfolio/mobile/image-228b.jpg",
    imageDesktop: "/portfolio/desktop/image-228b.jpg",
  },
  {
    id: 3,
    title: "le prototype",
    imageMobile: "/portfolio/mobile/image-prototype.jpg",
    imageDesktop: "/portfolio/desktop/image-prototype.jpg",
  },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      <section className="home-section relative flex h-[560px] w-full flex-col items-center bg-home-mobile bg-cover px-6 py-16 text-white lg:bg-home-desktop">
        <div className="home-content mt-6 flex flex-col">
          <h1 className="text-6xl font-semibold capitalize">
            project
            <br /> paramour
          </h1>
          <p className="z-10 mt-4">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

          <Button
            classname="z-10 mt-16 px-8 justify-center w-[252px] h-[72px] capitalize bg-very-dark-blue gap-4"
            children="see our portfolio"
            icon={true}
            hover={true}
            active={true}
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="w-16 border border-medium-gray md:hidden"></div>
        <h1 className="pt-16 text-5xl font-bold">Welcome to Arch Studio</h1>
        <div className="font-medium text-dark-gray">
          <p className="mt-6">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.{" "}
          </p>
          <p className="mt-4">
            {" "}
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>{" "}
          <p className="mt-4">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </section>

      <section className="image-section relative flex h-[560px] flex-col justify-center bg-small-mobile bg-cover bg-center px-6 py-20 text-white lg:bg-small-desktop">
        <div className="home-content flex flex-col">
          <h1 className="text-5xl font-bold">
            Small team, <br /> big ideas
          </h1>
          <Button
            classname="mt-6 px-8 w-[187px] h-[72px] capitalize bg-very-dark-blue flex items-center justify-center gap-4"
            children="about us"
            icon={true}
            hover={true}
            active={true}
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <h1 className="text-5xl font-bold capitalize">featured</h1>

        <div className="pb-20 capitalize text-white">
          {data.map((item) => (
            <div className="relative mt-16" key={item.id}>
              <img
                src={item.imageMobile}
                alt={item.title}
                className="h-[280px] w-full md:hidden"
              />
              <img
                src={item.imageDesktop}
                alt={item.title}
                className="hidden md:block"
              />
              <div className="absolute bottom-0 left-0 z-10 flex h-[280px] w-full flex-col justify-end bg-black bg-opacity-50 p-6 lg:h-[35rem] lg:w-[21.9rem]">
                <h1 className="text-3xl font-bold">{item.title}</h1>

                <Link href={`/portfolio/${item.id}`}>
                  <p className="mt-4 text-white">view all projects</p>
                </Link>
              </div>
            </div>
          ))}

          <Button
            classname="mt-6 px-8 md:w-[187px] h-[72px] capitalize bg-very-dark-blue flex items-center justify-center gap-4 w-full"
            children="see all"
            icon={true}
            hover={true}
            active={true}
          />
        </div>
      </section>
    </main>
  );
}
