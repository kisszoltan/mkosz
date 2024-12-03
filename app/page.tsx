import { title, subtitle } from "@/components/primitives";
import { CalculatorI18n } from "@/components/calculator-i18n";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Számold ki a&nbsp;</span>
        <span className={title({ color: "violet" })}>M</span>
        <span className={title()}>eg&nbsp;</span>
        <span className={title({ color: "violet" })}>k</span>
        <span className={title()}>ezdett</span>
        <span className={title({ color: "violet" })}>ó</span>
        <span className={title()}>rák&nbsp;</span>
        <span className={title({ color: "violet" })}>sz</span>
        <span className={title()}>ámát&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Ha nem megy a matek, kattintani azért csak tudsz párat.
        </div>
      </div>
      <CalculatorI18n className="mt-6" />
    </section>
  );
}
