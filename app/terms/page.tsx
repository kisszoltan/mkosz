import { title } from "@/components/primitives";

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className={title()}>Általános Szerződési Feltételek</h1>
      <p className="text-justify">
        Ez a dokumentum az Ön és a Kiss-Hanzsa Kft. közötti jogviszonyt
        szabályozza az oldalunk használata kapcsán. Kérjük, hogy figyelmesen
        olvassa el az alábbi feltételeket, mielőtt használni kezdi a
        webalkalmazásunkat.
      </p>

      <h2>1. Szolgáltatás leírása</h2>
      <p className="text-justify">
        A webalkalmazásunk lehetőséget biztosít arra, hogy a felhasználók két
        dátum (tól-ig) megadásával elvégezhessék a számításokat. A szolgáltatás
        használata során semmilyen adat nem kerül tárolásra, és kizárólag a
        megadott dátumok kerülnek feldolgozásra.
      </p>

      <h2>2. Adatkezelés</h2>
      <p className="text-justify">
        Webalkalmazásunk nem gyűjt, tárol, vagy dolgoz fel semmilyen személyes
        adatot. Az alkalmazás kizárólag két dátumot (tól-ig) fogad el, amelyek
        feldolgozása után az adatokat nem tároljuk el. A szolgáltatás használata
        során nem kerül sor személyazonosításra.
      </p>

      <h2>3. Látogatói statisztikák</h2>
      <p className="text-justify">
        Webalkalmazásunk a Google és a Microsoft szolgáltatásait használja az
        oldal látogatói statisztikáinak gyűjtésére. Ezek az adatok névtelenek,
        és kizárólag a weboldal teljesítményének javítására szolgálnak.
      </p>

      <h2>4. Weboldal használata</h2>
      <p className="text-justify">
        A webalkalmazás használatával Ön kijelenti, hogy elfogadja az itt leírt
        feltételeket. Ha nem ért egyet az Általános Szerződési Feltételekkel,
        kérjük, hogy ne használja a webalkalmazást.
      </p>

      <h2>5. Szellemi Tulajdon</h2>
      <p className="text-justify">
        A webalkalmazás teljes tartalma, beleértve a szövegeket, grafikákat,
        logókat és egyéb elemeket, a Kiss-Hanzsa Kft. szellemi tulajdonát
        képezi. A webalkalmazás bármilyen módosítása vagy újrahasznosítása
        tilos.
      </p>

      <h2>6. Jogviták</h2>
      <p className="text-justify">
        A jelen Általános Szerződési Feltételek alapján felmerülő jogvitákat a
        Kiss-Hanzsa Kft. székhelye szerinti bíróságok bírálják el.
      </p>

      <h2>7. Elérhetőség</h2>
      <p className="text-justify">
        Ha bármilyen kérdése van a szolgáltatás használatával kapcsolatban,
        vegye fel velünk a kapcsolatot a következő elérhetőségen:
      </p>
      <p>Email: info@kisshanzsa.hu</p>
    </div>
  );
}
