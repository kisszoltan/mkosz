import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className={title()}>Ez meg mi?</h1>
      <div className="text-justify">
        Ez egy egyedileg készített webalkalmazás egyetlen drága feleségem
        számára, aki munkájából adódóan gyakran kér segítséget megkezdett órák
        számának kiszámolásához.
      </div>
      <div className="text-justify">
        Ez az alkalmazás egyszerre ad segítséget neki egy gyors és pontos
        számításhoz, és veszi le a vállamról a számítás és felelőségvállalás
        terhét.
      </div>
      <div className="text-justify">
        És természetesen ha már elkészült és mások számára is hasznos lehet,
        bárki számára elérhető online, akinek közvetlenül vagy akár bármely
        kedves hozzátartozója számára segítséget jelent.
      </div>
    </div>
  );
}
