import { GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from "../icons";

export default function Footer() {
  return (
    <section className="w-full sm:px-10 px-6 md:px-20 pt-16 bg-tertiary-8">
      <div className="flex w-full justify-between mb-8 items-center">
        <div className="flex flex-col gap-8 ">
          <a href={"/"}>
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="md:w-44 w-32"
              width={100}
              height={100}
            />
          </a>

          <nav className=" md:flex gap-6 items-center">
            <ul className="sm:flex grid grid-cols-3 gap-8 text-neutral-3">
              <a
                href="https://digitsave.finance"
                target="_blank"
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Save
              </a>

              <a
                href="https://digitsave.finance/learn"
                target="_blank"
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Learn
              </a>
            </ul>
          </nav>
        </div>
      </div>

      <hr className="text-neutral-8" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-neutral-3 mt-8 pb-12">
        <p>&copy; DigitSave. All right reserved</p>

        <nav className=" md:flex gap-4 items-center">
          <ul className="flex gap-8">
            <li>
              <a target="_blank" href={"https://x.com/digitsave?s=21"}>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={"https://github.com/orgs/DigitSave/repositories"}
              >
                <GithubIcon />
              </a>
            </li>
            <li className="pt-1">
              <a target="_blank" href={"https://www.youtube.com/@digitsave"}>
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={"https://www.linkedin.com/company/digitsave/"}
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
