import { title, subtitle } from "@/components/primitives";
import { Calculator } from "@/components/calculator";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center max-w-xl justify-center">
        <span className={title()}>Számold ki a </span>
        <span className={title({ color: "violet" })}>M</span>
        <span className={title()}>eg</span>
        <span className={title({ color: "violet" })}>k</span>
        <span className={title()}>ezdett </span>
        <span className={title({ color: "violet" })}>ó</span>
        <span className={title()}>rák </span>
        <span className={title({ color: "violet" })}>sz</span>
        <span className={title()}>ámát</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Ha nem megy a matek, kattintani azért csak tudsz párat.
        </div>
      </div>
      <Calculator className="mt-6" />
    </section>
  );
}
